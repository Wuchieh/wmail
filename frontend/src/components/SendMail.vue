<template>
  <v-container class="" fluid>
    <v-sheet class="mx-auto pa-2 w-100 w-lg-66" width="100%">
      <v-form fast-fail @submit.prevent="sendMail" class="">
        <v-select
          v-model="formData.to"
          label="收件人"
          :items="recipients"
          multiple
        >
          <template v-slot:selection="{ item, index }">
            <v-chip v-if="index < 2">
              <span>{{ item.title }}</span>
            </v-chip>
            <span
              v-if="index === 2"
              class="text-grey text-caption align-self-center">
              (+{{ formData.to.length - 2 }} 收件人)
            </span>
          </template>
          <template #prepend>
            <v-btn
              size="small"
              icon="mdi-plus"
              text="+"
              border
              @click="addRecipient"/>
          </template>
        </v-select>


        <v-text-field
          v-model="formData.title"
          label="標題"
        />
        <QuillEditor
          style="height: calc(100vh - 355px);"
          ref="QuillEditorRef"
          theme="snow"/>
        <v-btn class="mt-2" type="submit" color="success" block :loading="btn.submit.loading">送出</v-btn>
      </v-form>
    </v-sheet>
  </v-container>
  <snackbars ref="snackbar"/>
  <v-dialog max-width="500" v-model="addRecipientModel.show">

    <template v-slot:default="{ isActive }">
      <v-card title="新增收件人">
        <v-card-text>
          <v-text-field
            label="Email"
            v-model="addRecipientModel.value"
            :variant="defaults.VTextField.variant"/>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="取消"
            @click="isActive.value = false"
          ></v-btn>

          <v-btn
            text="確定"
            @click="addRecipientVal"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import {onMounted, ref} from "vue";
import {SendMail} from "@/api";
import Snackbars from "@/components/Snackbars.vue";
import {GetData, SetData, useStore} from "@/plugins/store/store";

const snackbar = ref<null | InstanceType<typeof Snackbars>>(null)
const QuillEditorRef = ref<null | InstanceType<typeof QuillEditor>>(null)

const {sendMailRecord, refreshSendMailRecord, defaults} = useStore()

const addRecipientModel = ref({
  show: false,
  value: "",
})

const formData = ref({
  to: [] as string[],
  title: ""
})

const btn = ref({
  submit: {
    loading: false,
  }
})

const KRTS = "recipient_list"
const recipients = ref<string[]>([])

const addRecipient = () => {
  addRecipientModel.value.show = true
  addRecipientModel.value.value = ""
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

const addRecipientVal = () => {
  const val = addRecipientModel.value.value
  if (!isValidEmail(val)) {
    snackbar.value?.Show({
      content: "email 格式錯誤",
      color: "danger",
    })
    return
  }

  if (!recipients.value.includes(val)) recipients.value.push(val)
  if (!formData.value.to.includes(val)) formData.value.to.push(val)
  SetData(KRTS, JSON.stringify(recipients.value)).then()
  addRecipientModel.value.show = false
}

const sendMail = async () => {
  if (QuillEditorRef.value) {
    btn.value.submit.loading = true
    const {to, title} = formData.value
    await SendMail(to, title, QuillEditorRef.value.getHTML())
      .then(() => {
        if (snackbar.value) {
          snackbar.value.Show({
            content: "寄送成功",
            color: "success"
          })
        }
        if (sendMailRecord.length > 0) {
          setTimeout(refreshSendMailRecord, 100)
        }
      })
      .catch(err => {
        let msg: string
        try {
          msg = err.response.data.message
        } catch (e) {
          msg = `網路狀態異常`
        }
        if (snackbar.value) {
          snackbar.value.Show({
            content: `寄送失敗, ${msg}`,
            color: "danger"
          })
        }
      })
    btn.value.submit.loading = false
  }
}

onMounted(() => {
  GetData(KRTS).then(res => {
    if (res.value) {
      const val = JSON.parse(res.value)
      if (val instanceof Array) recipients.value = val
    }
  })
})
</script>

<style scoped>
</style>
