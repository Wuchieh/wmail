<template>
  <v-container class="h-100" fluid>
    <v-sheet class="mx-auto pa-2" width="100%" height="">
      <v-form fast-fail @submit.prevent="sendMail" class="">
        <v-text-field
          v-model="formData.to"
          label="收件人"
        />

        <v-text-field
          v-model="formData.title"
          label="標題"
        />
        <QuillEditor
          style="height: calc(100vh - 350px);"
          ref="QuillEditorRef"
          theme="snow"/>
        <v-btn class="mt-2" type="submit" color="success" block :loading="btn.submit.loading">送出</v-btn>
      </v-form>
    </v-sheet>
  </v-container>
  <snackbars ref="snackbar"/>
</template>

<script setup lang="ts">
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import {ref} from "vue";
import {SendMail} from "@/api";
import Snackbars from "@/components/Snackbars.vue";
import {useStore} from "@/plugins/store/store";

const snackbar = ref<null | InstanceType<typeof Snackbars>>(null)
const QuillEditorRef = ref<null | InstanceType<typeof QuillEditor>>(null)

const {sendMailRecord, refreshSendMailRecord} = useStore()

const formData = ref({
  to: "",
  title: ""
})

const btn = ref({
  submit: {
    loading: false,
  }
})

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
            color: "success"
          })
        }
      })
    btn.value.submit.loading = false
  }
}
</script>

<style scoped>
</style>
