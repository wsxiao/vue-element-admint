import {VDATA, VDT} from "./validate.service";

/**
 * @Author: DKing
 * @Desc: 表单校验的公用方法
 * @Date: 2019-08-19
 */
// 长度校验
export const vdtEqualLength =(length)=> {
  var maxLengthTemp;
  if(!length){
    maxLengthTemp = 30
  } else {
    maxLengthTemp = length
  }
  return {
    validator: (rule, value, callback) => {
      let vdt = VDATA(
        value,
        {
          "equalLength": {param: maxLengthTemp, msg: '输入字符限制为：' + length+ ''},
        })
      if (!vdt.result) {
        callback(new Error(vdt.msg))
      } else {
        callback();
      }
    },
    trigger: 'blur'
  }
};



/**
 * @Author: DKing
 * @Desc: 表单校验的公用方法
 * @Date: 2019-08-19
 */
// 长度校验
export const vdtNameMaxLength =(maxLength)=> {
  var maxLengthTemp;
  if(!maxLength){
    maxLengthTemp = 30
  } else {
    maxLengthTemp = maxLength
  }
  return {
    validator: (rule, value, callback) => {
      let vdt = VDATA(
        value,
        {
          "maxLength": {param: maxLengthTemp, msg: VDT.message.maxLength},
        })
      if (!vdt.result) {
        callback(new Error(vdt.msg))
      } else {
        callback();
      }
    },
    trigger: 'blur'
  }
};

// 校验手机号是否合规
export const vdtPhoneNum = (message) => {
  var messageTemp;
  if(!message){
    messageTemp = VDT.message.phoneNum
  } else {
    messageTemp = message
  }
  return {
    validator: (rule, value, callback) => {
      let vdt = VDATA(
        value,
        {
          "phoneNum": {msg: messageTemp},
        })
      if (!vdt.result) {
        callback(new Error(vdt.msg))
      } else {
        callback();
      }
    },
    trigger: 'blur'
  }
};

// 校验邮箱是否合规
export const vdtEmailNum = (message) => {
  let messageTemp;
  if(message !== ' ' && !message){
    messageTemp = VDT.message.email
  } else {
    messageTemp = message
  }
  return {
    validator: (rule, value, callback) => {
      let vdt = VDATA(
        value,
        {
          "email": {msg: messageTemp},
        })
      if (!vdt.result) {
        callback(new Error(vdt.msg))
      } else {
        callback();
      }
    },
    trigger: 'blur'
  }
};

// 校验邮箱是否合规
export const vdtTaxCode = (message) => {
  let messageTemp;
  if(message !== ' ' && !message){
    messageTemp = VDT.message.taxCodeErrorMsg
  } else {
    messageTemp = message
  }
  return {
    validator: (rule, value, callback) => {
      let vdt = VDATA(
        value,
        {
          "taxCodeVdt": {msg: messageTemp},
        })
      if (!vdt.result) {
        callback(new Error(vdt.msg))
      } else {
        callback();
      }
    },
    trigger: 'blur'
  }
}

// 校验小数点后几位
export const vdtDotBehindNum = (number) => {
  return {
    validator: (rule, value, callback) => {
      let vdt = VDATA(
        value,
        {
          "dotBehindNum": {msg: VDATA.message.dotBehindNum + number + '位'},
        })

      if (Number(vdt.result) > number) {
        callback(new Error(vdt.msg))
      } else {
        callback();
      }
    },
    trigger: 'blur'
  }

};

// 校验是否有中文（登录账号）
export const vdtLoginNameNoChinese = (message) => {
  let messageTemp;
  if(message !== ' ' && !message){
    messageTemp = VDT.message.loginNameNoChineseErrorMsg
  } else {
    messageTemp = message
  }
  return {
    validator: (rule, value, callback) => {
      let vdt = VDATA(
        value,
        {
          "loginNameNoChinese": {msg: messageTemp},
        });

      if (!vdt.result) {
        callback(new Error(vdt.msg))
      } else {
        callback();
      }
    },
    trigger: 'change'
  }
}

// 校验是否有中文（登录账号）
export const vdtLoginPwd = (message) => {
  let messageTemp;
  if(message !== ' ' && !message){
    messageTemp = VDT.message.pwdErrorMsg
  } else {
    messageTemp = message
  }

  return {
    validator: (rule, value, callback) => {
      let vdt = VDATA(
        value,
        {
          "loginPwd": {msg: messageTemp},
        });

      if (!vdt.result) {
        callback(new Error(vdt.msg))
      } else {
        callback();
      }
    },
    trigger: 'blur'
  }
}

