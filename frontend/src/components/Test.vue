<template>
  <v-container fluid class="d-flex ga-2 flex-wrap">
    <v-btn text="checkAppLaunchUrl" @click="checkAppLaunchUrl"/>
  </v-container>
</template>

<script setup lang="ts">
import {App} from '@capacitor/app';


App.addListener('backButton', () => {

})

App.addListener('appStateChange', ({isActive}) => {
  console.log('App state changed. Is active?', isActive);
});

App.addListener('appUrlOpen', data => {
  console.log('App opened with URL:', data);
});

App.addListener('appRestoredResult', data => {
  console.log('Restored state:', data);
});

const checkAppLaunchUrl = async () => {
  const url = await App.getLaunchUrl();
  if (!url) return
  console.log('App opened with URL: ' + url.url);
};
</script>

<style scoped>

</style>
