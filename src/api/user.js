import request from '@/utils/request'

// 请求验证码
export const getCode = (clientToken) => {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    responseType: 'blob'
  })
}

// 登录
export const loginApi = (data) => {
  return request({
    url: '/api/user-service/user/login',
    method: 'POST',
    data
  })
}
