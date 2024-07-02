<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-img
            src="/favicon.ico"
            @click="goSendMail"
            max-width="50"
            max-height="64"
            class="cursor-pointer me-3"/>
        <v-btn text="寄信" @click="goSendMail"/>
        <v-btn text="紀錄" @click="goMailRecordsPage"/>
        <v-spacer></v-spacer>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
                color="primary"
                v-bind="props"
            >
              {{ account.name }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="themeTrigger">
              <v-list-item-title>
                <v-icon :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"/>
                主題切換
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="goSetting">
              <v-list-item-title>
                <v-icon icon="mdi-cog"/>
                設定
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-title>
                <v-icon icon="mdi-exit-to-app"/>
                登出
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main>
          <router-view/>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import {useStore} from "@/plugins/store/store";
import {ref} from 'vue'
import {useRouter} from "vue-router";
import {LOGIN_PAGE, MAIL_RECORDS_PAGE, MAIN_PAGE, SETTING_PAGE} from "@/plugins/router";

const {account, clearAccountData} = useStore()
const router = useRouter()

const KTHEME = 'theme'
const theme = ref(function () {
  const theme = localStorage.getItem(KTHEME)
  switch (theme) {
    case 'light':
    case 'dark':
      return theme
  }
  return 'dark'
}())

const themeTrigger = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem(KTHEME, theme.value)
}

const logout = () => {
  clearAccountData()
  router.push(LOGIN_PAGE)
}

const goSetting = () => {
  router.push(SETTING_PAGE)
}

const goSendMail = () => {
  router.push(MAIN_PAGE)
}
const goMailRecordsPage=()=>{
  router.push(MAIL_RECORDS_PAGE)
}
</script>

<style scoped>

</style>
