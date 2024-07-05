import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import {GetData, KTOKEN, useStore} from "@/plugins/store/store";
import Login from "@/components/Login.vue";
import SendMail from "@/components/SendMail.vue";
import MainLayout from "@/components/MainLayout.vue";
import SettingLayout from "@/components/SettingLayout.vue";
import SettingAccount from "@/components/SettingAccount.vue";
import SendMailRecords from "@/components/SendMailRecords.vue";
import SettingStyle from "@/components/SettingStyle.vue";
import Test from "@/components/Test.vue";

const LOGIN_PAGE = {name: 'login'}
const MAIN_PAGE = {name: 'send_mail'}
const SETTING_PAGE = {name: 'setting'}
const SETTING_STYLE_PAGE = {name: 'setting_style'}
const MAIL_RECORDS_PAGE = {name: 'mail_records'}
const TEST_PAGE = {name: 'test'}

export {
  LOGIN_PAGE,
  MAIN_PAGE,
  SETTING_PAGE,
  MAIL_RECORDS_PAGE,
  SETTING_STYLE_PAGE,
  TEST_PAGE,
}

const routes: RouteRecordRaw[] = [
  {path: '', component: Login, name: LOGIN_PAGE.name},
  {
    path: '/mail', component: MainLayout, children: [
      {path: '', component: SendMail, name: MAIN_PAGE.name},
      {path: '/records', component: SendMailRecords, name: MAIL_RECORDS_PAGE.name},
      {path:'/test',component:Test,name:TEST_PAGE.name},
      {
        path: '/setting', component: SettingLayout, children: [
          {path: '', component: SettingAccount, name: SETTING_PAGE.name},
          {path: '/style', component: SettingStyle, name: SETTING_STYLE_PAGE.name},
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const app = useStore()
  let token = app.getToken()

  // 如果 store 中沒有 token，嘗試從本地存儲獲取
  if (!token) {
    try {
      const res = await GetData(KTOKEN)
      if (res.value) {
        token = res.value
        app.setToken(token)
      }
    } catch (err) {
      console.error('Error fetching token:', err)
    }
  }

  // 如果沒有 token，重定向到登入頁面
  if (!token) {
    if (to.name === LOGIN_PAGE.name) {
      next()
    } else {
      next(LOGIN_PAGE)
    }
    return
  }

  // 如果帳戶資訊不完整，嘗試刷新
  if (app.account.email === '') {
    const resp = await app.refreshAccount()
    if (resp) {
      console.error('Error refreshing account:', resp)
      if (to.name != LOGIN_PAGE.name) {
        return next(LOGIN_PAGE)
      } else {
        return next()
      }
    }
  }

  // 如果用戶已登入但嘗試訪問登入頁面，重定向到主頁
  if (to.name === LOGIN_PAGE.name) {
    return next(MAIN_PAGE)
  }

  // 其他情況，允許導航
  next()
})

router.afterEach(() => {
  const app = useStore()
  app.routerLoading = false
})

export default router
