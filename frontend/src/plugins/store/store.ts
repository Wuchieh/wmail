import {defineStore} from "pinia";
import {ref} from "vue";
import {GetAccountInfo, UpdateToken} from "@/api";

const KTOKEN = "token"

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
    localStorage.setItem(KTOKEN, token)
    account.value.token = token
  }

  const getToken = (): string => {
    const token = account.value.token !== '' ? account.value.token : localStorage.getItem(KTOKEN)
    setToken(token ?? '')
    return account.value.token
  }

  const clearAccountData = () => {
    setToken("")
    account.value.email = ''
    account.value.name = ''
  }

  return {account, setToken, getToken, refreshAccount, clearAccountData}
})
