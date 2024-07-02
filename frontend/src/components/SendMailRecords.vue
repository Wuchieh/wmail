<template>
  <v-data-table :items="sendMailRecord" :headers="headers" :loading="tableRef.loading">
    <template v-slot:[`item.getData`]="{item}">
      <v-btn @click="getData(item.mail_id)">
        查看內容
      </v-btn>
    </template>
  </v-data-table>

  <snackbars ref="snackbarsRef"/>
  <show-email-data ref="showEmailDataRef"/>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useStore} from "@/plugins/store/store";
import {storeToRefs} from "pinia";
import {MailRecord} from "@/api/swag";
import {parseDate} from "@/pkg";
import Snackbars from "@/components/Snackbars.vue";
import ShowEmailData from "@/components/ShowEmailData.vue";

const snackbarsRef = ref<null | InstanceType<typeof Snackbars>>(null)
const showEmailDataRef = ref<null | InstanceType<typeof ShowEmailData>>(null)
const tableRef = ref({
  loading: true,
})
const app = useStore()
const {refreshSendMailRecord, getMailRecordData} = app
const {sendMailRecord} = storeToRefs(app)
const headers = [
  {title: 'ID', value: 'mail_id'},
  {title: '標題', value: 'title'},
  {
    title: '寄送時間', key: 'create_time', value: (v: MailRecord) => {
      if (!v.create_time) return "error"
      const date = new Date(v.create_time)
      return parseDate(date, 'YYYY-MM-DD hh:mm:ss');
    }
  },
  {title: '', key: 'getData'}
]

const getData = async (mailId?: string) => {
  if (!mailId) {
    if (!snackbarsRef.value) return;
    snackbarsRef.value.Show({
      content: "mail id 取得失敗",
      color: "danger"
    })
    return
  }
  if (!showEmailDataRef.value)  return
  showEmailDataRef.value.ShowSkeleton()
  const resp = await getMailRecordData(mailId)
  if (typeof resp === "string") {
    if (!snackbarsRef.value) return
    snackbarsRef.value.Show({
      content: resp,
      color: 'danger'
    })
  }else{
    showEmailDataRef.value.ShowData(resp)
  }
}

onMounted(() => {
  if (sendMailRecord.value.length == 0) refreshSendMailRecord()
      .catch(err => {
        console.log(err)
      })
      .then(() => {
        tableRef.value.loading = false
      })
  else tableRef.value.loading = false
})
</script>

<style scoped>

</style>
