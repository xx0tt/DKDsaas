import router from '@/router'
import store from '@/store'

const writeList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  const token = store.state.user.userInfo.token

  if (token) return to.path === '/login' ? next('/') : next()

  writeList.includes(to.path) ? next() : next('/login')
})
