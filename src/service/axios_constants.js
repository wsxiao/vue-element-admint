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
  suc: '66',  // 请求成功
  warn: '88',  // 失败
  err: '99',  // 需要返回上步操作
  err_auth:'82',  // 参数非法 弹框提示
  err_params:'81',  // 服务器失败，保存or上传失败
  err_risk_request:'80',  // 服务器错误 读取or下载失败
  err_operate:'89',  // 未知错误
}

