/**
 * @Author: DKing
 * @Desc: my-project
 * @Date: 2019-12-16
 */

import axios from 'axios';
import QS from 'qs';// 引入qs模块，用来序列化post类型的数据，后面会提到
import {CONTENT_TYPE, HTTP_CODE} from "./axios_constants";
import {Loading} from 'element-ui';

let lodingOptions = {background: 'rgb(255,255,255, 0.1)'}
let loadingInstance;

/**
 * 环境切换更换接口地址
 * */
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http:bdi.hvyogo.com';
}
else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = 'http://bdi.hvyogo.com';
  }
else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://di.hvyogo.com';
}

/**
 * timeout：设置请求超时时间
 * withCredentials：ajax携带cookie
 * */
axios.defaults.timeout = 50000;
axios.defaults.withCredentials = true;


/** 请求拦截
 *  有些请求是需要用户登录之后才能访问的，或者post请求的时候，我们需要序列化我们提交的数据
 * */
axios.interceptors.request.use(config => {
    if (config.method === 'post') {
    }
    return config
  },
  err => Promise.reject(err)
);


/**
 * 拦截相应
 * 就是服务器返回给我们的数据，我们在拿到之前可以对他进行一些处理
 * */
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      responseCode(response.data, response.data.statusCode)

      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          console.log('未登录无权限 - 401')
          break;

        case 403:
          console.log('登录过期 - 403')
          break;

        case 404:
          console.log('接口不存在 - 404 ')
          break;
        case 500:
          console.log('服务器异常');
          break;

        // 其他错误，直接抛出错误提示
        default:
      }
      return Promise.reject(error.response);
    }
  }
)


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {String} type [请求类型]
 */
export function get(url, params, type) {
  loadingInstance = Loading.service(lodingOptions);
  url += (url.indexOf('?') < 0 ? '?' : '&') + transformParam(params)
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'get',
      data: params,
      headers: {
        'Content-Type': contentType(type)
      }
    }).then(res => {
      resolve(res.data);

    }).catch(err => {
      reject(err.data)

    })
  });
}


/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {String} type [请求类型]
 */
export function post(url, params, type) {
  return new Promise((resolve, reject) => {
    loadingInstance = Loading.service(lodingOptions);
    if (type === 'json') {
      axios({
        url: url,
        method: 'post',
        data: params,
        headers: {
          'Content-Type': contentType(type)
        }
      }).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err.data)
      })

    } else {
      axios({
        url: url,
        method: 'post',
        data: QS.stringify(params),
        headers: {
          'Content-Type': contentType(type)
        }
      }).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err.data)
      })
    }

  });
}


/**
 * 转换http请求的code码，找到对应的状态
 * @param {String} code [接口返回的状态码]
 * */
export function responseCode(resData, code) {
  loadingInstance.close();

  switch (code) {

    // 000000 成功
    case HTTP_CODE.suc:
      break;

    // 100000 前端直接显示
    case HTTP_CODE.warn:
      break;

    // 500000 服务器异常，出错页面
    case HTTP_CODE.err:
      break;

    // 400101 无权访问 ,没有权限
    case HTTP_CODE.err_auth:
      break;

    // 400201 参数非法 弹框提示
    case HTTP_CODE.err_params:
      break;

    // 400301 风控拦截 - 没有session_token 直接跳转到登录页 清除cookie和local
    case HTTP_CODE.err_risk_request:
      break;

    // 400401 风控拦截 - 异常请求 清除cookie和local
    case HTTP_CODE.err_operate:
      break;

    default:
      break;
  }
}


/**
 * 请求类型选项
 * @param {String} type [请求类型]
 * */
export function contentType(type) {
  switch (type) {
    case 'form':
      return CONTENT_TYPE.form;
    case 'json':
      return CONTENT_TYPE.json;
    case 'multipart':
      return CONTENT_TYPE.multipart
  }
}

/**
 * 封装一个序列化get请求的参数的方法
 */
export function transformParam(data) {
  let url = '';
  for (const k in data) {
    const value = data[k] !== undefined ? data[k] : '';
    url += `&${k}=${encodeURIComponent(value)}`;
  }
  return url ? url.substring(1) : '';
}


