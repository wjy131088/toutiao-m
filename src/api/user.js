// user.js 划分是跟后端接口文档
import request from '@/utils/request'
// import store from '@/store/index'
export const login = (mobile, code) => {
  return request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile,
      code
    }
  })
}
/**
 * 发送验证码
 * @param {string} mobile 手机号
 * @returns Promise
 */
export const sendCodeAPI = (mobile) => {
  return request({
    url: `/v1_0/sms/codes/${mobile}`
  })
}
/**
 * 获取用户信息
 * @returns Promise
 */
export const getUserInfoAPI = () => {
  return request({
    url: '/v1_0/user'
    // headers: {
    //   Authorization: `Bearer ${store.state.tokenObj.token}`
    // }
  })
}
