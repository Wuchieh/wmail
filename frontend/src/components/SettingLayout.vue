<template>
  <v-responsive class="border rounded" max-height="calc(100vh - 63px)" >
    <v-app>
      <v-navigation-drawer v-model="show">
        <v-list >
          <v-list-item @click="go(SETTING_PAGE)" title="個人資料"></v-list-item>
        </v-list>
        <v-list >
          <v-list-item @click="go(SETTING_STYLE_PAGE)" title="樣式"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <v-btn
              class="d-block d-lg-none mb-3"
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
import {SETTING_PAGE, SETTING_STYLE_PAGE} from "@/plugins/router";

const show = ref(true)

const router = useRouter()

const go = (to:{name:string})=>{
  router.push(to)
}


onMounted(()=>{
  show.value = window.innerWidth > 1280
})
</script>

<style scoped>

</style>
