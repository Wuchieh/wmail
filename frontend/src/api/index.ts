import {AccountApi, Configuration, EmailApi} from './swag'
import {useStore} from "@/plugins/store/store";


const conf = new Configuration()
conf.basePath = 'https://wmail_api.wuchieh.com'
// conf.basePath = "http://localhost:1701"
const account = new AccountApi(conf)
const email = new EmailApi(conf)

async function Login(email: string, password: string) {
  return account.apiV1AccountLoginPost({
    email,
    password
  })
}

async function GetAccountInfo(header: string) {
  if (!header.startsWith("Bearer")) header = `Bearer ${header}`
  return account.apiV1AccountInfoGet(header)
      .then(res => {
        if (res.data.data) {
          return res.data.data
        }
        return void 0
      })
      .catch(err => {
        try {
          if (err.response.data) {
            return `${err.response.data[`message`]}`
          }
        } catch (e) {
          console.log(err)
          return `網路異常`
        }
      })

}

function UpdateAccount(header: string, name: string, password: string) {
  if (!header.startsWith("Bearer ")) header = `Bearer ${header}`
  return account.apiV1AccountUpdatePost(header, {name, password})
}

function UpdateToken(header: string) {
  if (!header.startsWith("Bearer ")) header = `Bearer ${header}`
  return account.apiV1AccountUpdateTokenGet(header)
}

function SendMail(to: string|string[], subject: string, content: string) {
  const token = useStore().getToken()
  if(typeof to ==="string"){
    to = [to]
  }
  return email.apiV1MailSendPost(`Bearer ${token}`, {
    to,
    subject,
    content,
  })
}

function GetSendMailRecord(token: string) {
  if (!token.startsWith("Bearer ")) token = `Bearer ${token}`
  return email.apiV1MailListGet(token)
}

function GetEmail(token: string, mailId: string) {
  if (!token.startsWith("Bearer ")) token = `Bearer ${token}`
  return email.apiV1MailMailIdGet(token, mailId)
}

export {
  Login,
  SendMail,
  GetAccountInfo,
  UpdateToken,
  UpdateAccount,
  GetSendMailRecord,
  GetEmail,
}
