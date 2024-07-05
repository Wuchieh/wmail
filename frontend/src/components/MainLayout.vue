<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-img
          :src="theme === 'light' ?Logo:darkLogo"
          @click="debugModeTrigger"
          width="50"

          max-width="50"
          max-height="64"
          class="cursor-pointer me-3"/>
        <div v-for="v in mainItems">
          <v-btn
            v-if="v.to.name != TEST_PAGE.name || debugMode"
            :prepend-icon="v.icon"
            :text="v.title"
            @click="go(v.to)"/>
        </div>
        <v-spacer></v-spacer>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              color=""
              v-bind="props"
              prepend-icon="mdi-account"
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
            <v-list-item @click="go(SETTING_PAGE)">
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
import {GetData, KTHEME, SetData, useStore} from "@/plugins/store/store";
import {onMounted, ref} from 'vue'
import {useRouter} from "vue-router";
import darkLogo from '@/assets/logo-dark.png'
import Logo from '@/assets/logo.png'
import {LOGIN_PAGE, MAIL_RECORDS_PAGE, MAIN_PAGE, SETTING_PAGE, TEST_PAGE} from "@/plugins/router";

const {account, clearAccountData} = useStore()
const router = useRouter()
const theme = ref('dark')
const debugMode = ref(false)

const debugModeTrigger = (() => {
  let clickTime = 1
  let startTime = Date.now()
  return () => {
    go(MAIN_PAGE)

    let now = Date.now()
    clickTime = now - startTime < 500 ? clickTime + 1 : 1
    startTime = now
    debugMode.value = clickTime >= 8
  }
})()

const mainItems = [
  {icon: "mdi-email-edit-outline", to: MAIN_PAGE, title: "寄信"},
  {icon: "mdi-history", to: MAIL_RECORDS_PAGE, title: "寄送紀錄"},
  {icon: "", to: TEST_PAGE, title: "TEST"},
]

const themeTrigger = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  SetData(KTHEME, theme.value).then()
}

const go = (to: { name: string }) => {
  router.push(to)
}

const logout = () => {
  clearAccountData()
  go(LOGIN_PAGE)
}

onMounted(async () => {
  const _theme = await GetData(KTHEME)
  if (_theme.value) {
    theme.value = _theme.value
  }
})
</script>

<style scoped>

</style>
