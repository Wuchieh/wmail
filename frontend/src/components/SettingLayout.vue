<template>
  <v-responsive class="border rounded" max-height="calc(100vh - 63px)" >
    <v-app>
      <v-navigation-drawer v-model="show">
        <v-list >
          <v-list-item @click="goSettingAccount" title="個人資料"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <v-btn
              class="d-block d-lg-none mb-2"
              @click="show = !show"
              text="更多設定"/>
          <router-view/>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {SETTING_PAGE} from "@/plugins/router";

const show = ref(true)
const router = useRouter()
const goSettingAccount = ()=>{
  router.push(SETTING_PAGE)
}

onMounted(()=>{
  show.value = window.innerWidth > 1280
})
</script>

<style scoped>

</style>
