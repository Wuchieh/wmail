<template>
  <v-defaults-provider :defaults="defaults">
    <v-app>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </v-defaults-provider>
</template>

<script setup lang="ts">
import {useStore} from "@/plugins/store/store";

const {defaults} = useStore()
</script>
