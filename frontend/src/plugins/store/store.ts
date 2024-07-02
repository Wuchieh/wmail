import {defineStore} from "pinia";
import {ref} from "vue";
import {GetAccountInfo, GetEmail, GetSendMailRecord, UpdateToken} from "@/api";
import {Preferences} from '@capacitor/preferences';
import {MailEmail, MailRecord} from "@/api/swag";

export const KTOKEN = "token"

export const SetData = (key: string, value: string) => {
  return Preferences.set({key, value})
}

export function GetData(key: string) {
  return Preferences.get({key})
}

export const useStore = defineStore('app', () => {
  const account = ref({
    email: "",
    name: "",
    token: "",
  })

  const refreshAccount = async (): Promise<string | undefined> => {
    const token = getToken()
    const resp = await GetAccountInfo(token)

    UpdateToken(token)
      .then(res => {
        try {
          setToken(`${res.data.data}`)
        } catch (err) {
          console.log(err)
        }
      })
      .catch(err => {
        console.log(err)
      })

    switch (typeof resp) {
      case "object":
        account.value.email = `${resp.email}`
        account.value.name = `${resp.name}`
        break
      case "undefined":
        return `異常情況請回報管理員`
      case "string":
        return resp
    }
    return void 0
  }

  const setToken = (token: string) => {
    SetData(KTOKEN, token).then()
    account.value.token = token
  }

  const getToken = (): string => {
    return account.value.token
  }

  const clearAccountData = () => {
    setToken("")
    account.value.email = ''
    account.value.name = ''
  }

  const sendMailRecord = ref<MailRecord[]>([])

  const refreshSendMailRecord = async () => {
    const token = getToken()
    return GetSendMailRecord(token)
      .then(res => {
        if (res.data.data) {
          sendMailRecord.value = res.data.data
        }
      })
  }

  const mailRecordData: { [keys: string]: MailEmail } = {}
  const getMailRecordData = async (mailID: string) => {
    const mail = mailRecordData[mailID]
    if (mail) return mail

    const token = getToken()
    return await GetEmail(token, mailID)
      .then(res => {
        if (res.data.data) {
          mailRecordData[mailID] = res.data.data
        }
        return mailRecordData[mailID]
      })
      .catch(err => {
        try {
          return `${err.response.data['message']}`
        } catch (e) {
          return '網路狀態異常'
        }
      })
  }

  return {
    account,
    setToken,
    getToken,
    refreshAccount,
    clearAccountData,
    sendMailRecord,
    refreshSendMailRecord,
    getMailRecordData
  }
})
