import router from '@/router'
import store from '@/store'

const writeList = ['/login', '/404']
router.beforeEach(async (to, from, next) => {
  const token = store.state.user?.userInfo?.token

  if (token) {
    if (!store.state.user?.userInfo?.mobile) {
      // 获取用户信息
      await store.dispatch('user/getMyUserInfo')
    }
    return to.path === '/login' ? next('/') : next()
  }

  writeList.includes(to.path) ? next() : next('/login')
})
