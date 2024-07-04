<template>
  <v-container class="align-center justify-center h-100 d-flex" fluid>
    <v-form class="w-100 w-md-66 w-lg-50">
      <v-text-field
          v-model="formData.email"
          type="email"
          label="Email"
          required
      />
      <v-text-field
          v-model="formData.password"
          label="密碼"
          type="password"
          required
      />

      <v-btn
          :loading="btns.login.loading"
          text="登入"
          @click="login"/>
    </v-form>
    <div class="position-absolute" style="bottom: 15px;right: 15px">V0.3.0</div>
  </v-container>
  <snackbars ref="SnackbarsRef"/>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {Login} from "@/api";
import {useRouter} from "vue-router";
import {MAIN_PAGE} from "@/plugins/router";
import {useStore} from "@/plugins/store/store";
import Snackbars from "@/components/Snackbars.vue";

type SnackbarsInstance = InstanceType<typeof Snackbars>
const SnackbarsRef = ref<null | SnackbarsInstance>(null)

const router = useRouter()
const btns = ref({
  login: {
    loading: false,
  }
})
const formData = ref({
  email: "",
  password: "",
})

const loginService = async (email: string, password: string) => {
  return Login(email, password)
      .then(res => {
        if (res.data.data) {
          useStore().setToken(`${res.data.data}`)
        }
        return `${res.data.message}`
      })
      .catch(err => {
        try {
          if (err.response.data) {
            return `${err.response.data['message']}`
          }
        } catch (e) {
          console.log(err)
          return `網路異常`
        }
      })
}

const login = async () => {
  btns.value.login.loading = true
  const {email, password} = formData.value
  const resp = await loginService(email, password)

  if (resp === 'success') {
    if (SnackbarsRef.value) {
      SnackbarsRef.value.Show({
        content: `登入成功`,
        color: 'success',
        timeout: 800,
      })
    }
    setTimeout(() => {
      router.push(MAIN_PAGE)
    }, 500)
  } else {
    if (SnackbarsRef.value) {
      SnackbarsRef.value.Show({
        content: `${resp}`,
        color: 'danger'
      })
    }
    btns.value.login.loading = false
  }
}
</script>

<style scoped>

</style>
