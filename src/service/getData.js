import fetch from '../config/fetch'


/**
 * 获取验证码
 */

 export const getVerify = ( phone ) => fetch('/auth/userInfo/sendSms?phone=' + phone ,{

 }, 'POST')

/**
 * 手机登陆
 */

 export const mobileLogin = ( phone, verify ) => fetch('/auth/loginWithType', {
    username: phone,
    password: verify,
    loginType: 1
 }, 'POST')

 /**
  * 账号密码登陆
  */

 export const accountLogin = ( phone, password ) => fetch('/auth/loginWithType', {
    username: phone,
    password: password,
    loginType: 2
}, 'POST')

/**
 * 找回密码
 */
export const getModifyPassword = ( phone, verify, password, password2 ) => fetch('/auth/userInfo/findPassword' , {
    username: phone,
    authCode: verify,
    resurePassword: password2,
    password: password
}, 'POST')