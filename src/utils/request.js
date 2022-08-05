import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getTokenTime } from '@/utils/auth'
import router from '@/router'

const timeOut = 2 * 60 * 60 * 1000

const isTimeOut = () => +new Date() - getTokenTime() > timeOut

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API // /likede/ ,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  const token = store.state.user.userInfo.token

  if (!token) return config
  if (isTimeOut()) {
    // 如果已登录并且token过期
    store.commit('user/logout')
    router.push('/login')
    return Promise.reject(new Error('登录过期'))
  }
  config.headers.Authorization = token

  return config
})

// 相应拦截器
request.interceptors.response.use(
  (res) => res.data,
  (error) => {
    if (error.response?.status === 401) {
      Message.error('登录过期')
      store.commit('user/logout')
      router.push('/login')
    } else {
      Message.error(error.message)
    }

    return Promise.reject(error)
  }
)

export default request
