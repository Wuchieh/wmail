<template>
  <div class="d-flex flex-column">
    <v-text-field
        v-model="formData.name"
        label="暱稱"/>
    <v-text-field
        v-model="formData.password"
        label="密碼(需要修改才輸入)"
        type="password"/>
    <v-btn
        @click="updateAccount"
        :loading="btns.sendBtn.loading"
        text="送出"/>
  </div>
  <snackbars ref="SnackbarsRef"/>
</template>

<script setup lang="ts">
import {UpdateAccount} from "@/api";
import {useStore} from "@/plugins/store/store";
import {onMounted, ref} from "vue";
import Snackbars from "@/components/Snackbars.vue";

const SnackbarsRef = ref<null | InstanceType<typeof Snackbars>>(null)
const btns = ref({
  sendBtn: {
    loading: false
  }
})
const {getToken, account,refreshAccount} = useStore()
const formData = ref({
  name: "",
  password: ""
})

const updateAccount = async () => {
  const token = getToken()
  const {name, password} = formData.value
  btns.value.sendBtn.loading = true
  await UpdateAccount(token, name, password)
      .then(() => {
        if (SnackbarsRef.value) {
          SnackbarsRef.value.Show({
            content: `資料已成功更新`,
            color: 'success',
            timeout: 800,
          })
        }
        refreshAccount()
      })
      .catch(err => {
        console.log(err)
        let msg: string
        try {
          msg = err.response.data.message
        } catch (e) {
          msg = `網路狀態異常`
        }
        if (SnackbarsRef.value) {
          SnackbarsRef.value.Show({
            content: `資料更新失敗, ${msg}`,
            color: "success"
          })
        }
      })
  btns.value.sendBtn.loading = false
}

onMounted(() => {
  formData.value.name = account.name
})
</script>

<style scoped>

</style>
