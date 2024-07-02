<template>
  <v-dialog max-width="500" v-model="show">
    <v-sheet v-if="loading">
      <v-skeleton-loader type="article"/>
      <v-skeleton-loader type="article"/>
      <v-skeleton-loader type="article"/>
    </v-sheet>
    <v-card title="123" v-else>
      <v-card-text>
        <div>Email ID: {{ data.id }}</div>
        <div>收件者: {{ data.to ? data.to.join(',') : '' }}</div>
        <div>寄件時間: {{ parseDate(new Date(data.created_at as string), 'YYYY-MM-DD hh:mm:ss') }}</div>
        <div>標題: {{ data.subject }}</div>
        <div>
          <h4>內容:</h4>
          <div v-if="data.text!==''">{{ data.text }}</div>
          <div v-else v-html="data.html"></div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
            text="Close Dialog"
            @click="show = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {MailEmail} from "@/api/swag";
import {parseDate} from "@/pkg";

const show = ref(false)
const loading = ref(false)

const ShowSkeleton = () => {
  show.value = true
  loading.value = true
}

const ShowData = (showData: MailEmail) => {
  data.value = showData
  loading.value = false
  show.value = true
}

const Show = () => {
  show.value = true
}


const data = ref<MailEmail>({
  "id": "",
  "object": "",
  "to": [
    ""
  ],
  "from": "",
  "created_at": "",
  "subject": "",
  "html": "",
  "text": "",
  "last_event": ""
})

defineExpose({
  Show,
  ShowSkeleton,
  ShowData,
})
</script>

<style scoped>

</style>
