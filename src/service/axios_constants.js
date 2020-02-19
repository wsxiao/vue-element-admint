/**
 * @Author: DKing
 * @Desc: axios 所需的常量
 * @Date: 2019-12-16
 */

// axios content-type
export const CONTENT_TYPE  = {
  form:'application/x-www-form-urlencoded',
  json:'application/json;charset=UTF-8',
  multipart:'multipart/form-data'
};

// http请求的返回状态码
export const HTTP_CODE = {
  suc: '000000',  // 请求成功
  warn: '100000',  // 前端直接显示
  err: '500000',  // 服务器异常，出错页面
  err_auth:'400101',  // 无权访问 ,没有权限
  err_params:'400201',  // 参数非法 弹框提示
  err_risk_request:'400301',  // 风控拦截 - 没有session_token 直接跳转到登录页 清除cookie和local
  err_operate:'400401',  // 风控拦截 - 异常请求 清除cookie和local
}

