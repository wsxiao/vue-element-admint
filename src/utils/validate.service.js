/**
 * @Author: DKing
 * @Desc: 正则校验
 * @Date: 2019-08-19
 */

import {checkEmail, checkPhoneNumber, checkDotBehindNum, taxCode, checkChinese, pwdFilter} from "../filters/filters";

export const VDT = {
  vdtConst:{
    nameMaxLengthNomal: 30,
    remarkMaxLength: 200,
    platformNameMaxLength:10,
    welcomeNameMaxLength:16,

  },

  message: {
    required: "请输入",
    maxLength: "输入文字过长",
    phoneNum:'输入手机号格式不正确',
    email: "输入电子邮件地址无效",
    number: "请输入有效的数字",
    dotBehindNum:'最多小数点后',
    taxCodeErrorMsg:'税务登记号格式错误',
    loginNameNoChineseErrorMsg:'不能包含中文字符',
    pwdErrorMsg:'6+12位数字+字母(区分大小写)',
  },

  required:  (value) => {
    return value != undefined ? (value.toString().length > 0) : false
  },
  maxLength:  (value, param) => {
    return value.length <= param
  },
  equalLength: (value, num) => {
    return value.length === num
  },
  phoneNum:(value) => {
    return checkPhoneNumber(value)
  },
  email:(value)=>{
    return checkEmail(value)
  },
  dotBehindNum:(value)=> {
    return checkDotBehindNum(value)
  },
  taxCodeVdt: (value) => {
    return taxCode(value)
  },
  loginNameNoChinese: (value) => {
    return !checkChinese(value)
  },
  loginPwd: (value) => {
    return pwdFilter(value)
  },
}

export const VDATA = (value,config) => {
  for (let fun in config) {
    if (typeof VDT[fun] == "function" && (!(config[fun].param == undefined ? VDT[fun](value) : VDT[fun](value, config[fun].param)))) {
      if (typeof config[fun] == "object") {
        return { msg: config[fun].msg ? config[fun].msg : VDT[fun], result: false };
      } else {
        return { msg: typeof config[fun] == "string" ? config[fun] :VDT[fun], result: false };
      }

    } else if (typeof config[fun] == "function") {
      var tmpr = config[fun](value);
      if (tmpr != "" && tmpr != undefined && tmpr != false) {
        return { msg: tmpr, result: false }
      }
    }
  }

  return {msg:"" , result:true}
}
