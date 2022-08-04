import { getCode, getuserInfoApi, loginApi } from '@/api'
import { Message } from 'element-ui'
import router from '@/router'
import { setTokenTime } from '@/utils/auth'

export default {
  namespaced: true,
  state: {
    clientToken: '',
    userInfo: {}
  },
  mutations: {
    setClientToken(state, payload) {
      state.clientToken = payload
    },
    updateUserInfo(state, payload) {
      state.userInfo = payload
    },
    logout(state) {
      state.userInfo = ''
    }
  },
  actions: {
    // 获取验证码图片
    async getCodeActions(context) {
      const clientToken = Math.random()
      context.commit('setClientToken', clientToken)
      const data = await getCode(clientToken)
      const src = URL.createObjectURL(data)
      return src
    },

    // 登录
    async login(context, payload) {
      const data = await loginApi(payload)

      if (!data.success) return Message.error(data.msg)
      context.commit('updateUserInfo', data)
      setTokenTime() // 记录登录时间戳
      Message.success('登陆成功')
      router.push('/')
    },

    // 获取用户信息
    async getMyUserInfo(context) {
      const data = await getuserInfoApi(context.state.userInfo.userId)
      context.commit('updateUserInfo', { ...context.state.userInfo, ...data })
    }
  }
}
