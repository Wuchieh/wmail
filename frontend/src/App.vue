<template>
  <div v-if="routerLoading" class="d-flex justify-center align-center" style="height: 100vh">
    <v-progress-circular
      size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
  <v-defaults-provider :defaults="defaults">
    <v-app>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </v-defaults-provider>
  <snackbars ref="snackbarsRef"/>
</template>

<script setup lang="ts">
import {useStore} from "@/plugins/store/store";
import {App} from '@capacitor/app';
import Snackbars from "@/components/Snackbars.vue";
import {ref} from "vue";
import {storeToRefs} from "pinia";

const snackbarsRef = ref<InstanceType<typeof Snackbars>>()
const app = useStore()
const {defaults} = app
const {routerLoading} = storeToRefs(app)
const backTime = ref(0)
App.addListener('backButton', () => {
  const now = Date.now()
  if (now - backTime.value > 3000) {
    backTime.value = now
    snackbarsRef.value?.Show({
      content: "再返回一次 關閉APP",
      color: 'primary',
      timeout: 3000
    })
  } else {
    App.exitApp()
  }
})
</script>
