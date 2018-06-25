import fetch from '../config/fetch';
import { hex_sha1 } from '../assets/sha1';

/**
 * 获取验证码
 */

 export const getVerify = ( phone ) => fetch('/auth/userInfo/sendSms?phone=' + phone ,{

 }, 'POST', 1)

/**
 * 手机登陆
 */

 export const mobileLogin = ( phone, verify ) => fetch('/auth/loginWithType', {
    username: phone,
    password: verify,
    loginType: 1
 }, 'POST', 1)

 /**
  * 账号密码登陆
  */

 export const accountLogin = ( phone, password ) => fetch('/auth/loginWithType', {
    username: phone,
    password: hex_sha1( password ),
    loginType: 2
}, 'POST', 1)

/**
 * 找回密码
 */
export const getModifyPassword = ( phone, verify, password, password2 ) => fetch('/auth/userInfo/findPassword' , {
    username: phone,
    authCode: verify,
    resurePassword: hex_sha1( password2 ),
    password: hex_sha1( password )
}, 'POST', 1)

/**
 * 获取搜索下拉列表
 */

 export const getSearchSelect = () => fetch('/v1.0/accounts/record/getSearchLable',{

 },'GET', 2, 'promise')