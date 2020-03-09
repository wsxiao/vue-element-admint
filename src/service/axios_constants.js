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
  suc: 66,    // 成功
  err:88,     // 失败
  back:99,    // 返回上一步
  param_err:81, // 参数错误
  down_err:80,  // 读取 or 下载失败
  other_err:89, // 未知错误
}

