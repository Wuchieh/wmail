import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import {useStore} from "@/plugins/store/store";
import Login from "@/components/Login.vue";
import SendMail from "@/components/SendMail.vue";
import MainLayout from "@/components/MainLayout.vue";
import SettingLayout from "@/components/SettingLayout.vue";
import SettingAccount from "@/components/SettingAccount.vue";
import SendMailRecords from "@/components/SendMailRecords.vue";


const routes: RouteRecordRaw[] = [
  {path: '', component: Login, name: 'login'},
  {
    path: '/mail', component: MainLayout,
    children: [
      {path: '', component: SendMail, name: 'send_mail'},
      {path: '/mail_records', component: SendMailRecords, name: 'mail_records'},
      {
        path: '/setting', component: SettingLayout, children: [{
          path: '', component: SettingAccount, name: 'setting'
        }]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export const LOGIN_PAGE = {name: 'login'}
export const MAIN_PAGE = {name: 'send_mail'}
export const SETTING_PAGE = {name: 'setting'}
export const MAIL_RECORDS_PAGE = {name: 'mail_records'}

router.beforeEach(async (to, from, next) => {
  const app = useStore()
  const token = app.getToken()

  if (!token) {
    if (to.name == LOGIN_PAGE.name) next()
    next(LOGIN_PAGE)
    return
  }

  if (app.account.email === '') {
    const resp = await app.refreshAccount()
    if (resp) {
      console.log(resp)
      next(LOGIN_PAGE)
      return
    }

  }
  next()
})

export default router
