/**
 * @Author: DKing
 * @Desc: 过滤器合集
 * @Date: 2019-12-16
 */


import {MessageBox} from 'element-ui';
/**
 * 表单验证开启开关
 * 开启之后，表单验证不通过则不发起接口请求
 * 关闭之后，表单验证不通过则发起接口请求
 * @param {Boolean} valid [页面表单验证是否通过]
 * */
export const validSwitch =(valid)=> {
  return valid;
  // return true;
};

/**
 * Price
 * 精度 分转元，三位以逗号，小数点后两位
 * @param {Number,String} fen 需要被转换的分
 * */
export const fenToYuan = (fen) =>{
  var num = fen;
  num=fen*0.01;
  num+='';
  var reg = num.indexOf('.') >-1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
  num = priceToThousands(toDecimal2(num.replace(reg,'$1')));
  return num
};


/**
 * Price
 * 精度 元转分
 * @param {Number,String} yuan 需要被转换的元
 * */
export const yuanToFen = (yuan) =>{
  if(checkNull(yuan)){
    return yuan
  }
  var m=0,
    s1=yuan.toString(),
    s2='100';
  try{m+=s1.split(".")[1].length}catch(e){}
  try{m+=s2.split(".")[1].length}catch(e){}
  return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
};

/**
 * Price
 * 精度 分转元，小数点后两位,没有三位一逗号
 * @param {Number,String} fen 需要被转换的分
 * */

export const fenToYuanNomal = (fen) =>{
  var num = fen;
  num=fen*0.01;
  num+='';
  var reg = num.indexOf('.') >-1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
  num = toDecimal2(num.replace(reg,'$1'));
  return num
};


/**
 * Price
 * 强制保留2位小数，如：2，会在2后面补上00.即2.00
 * @param {Number,String} x 需要被转换的金钱
 * */
export const toDecimal2 = (x) => {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  var f = Math.round(x * 100) / 100;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
};

/**
 * Price
 * 格式化金钱，三位加一个逗号
 * @param {Number,String} num 需要被转换的金钱
 * */
export const priceToThousands = (num) =>{
  if(num)
  {
    num = toDecimal2(num)
    let numTemp = num;

    if(numTemp.indexOf('-') > -1){
      num = num.replace('-','')
    }

    //将num中的$,去掉，将num变成一个纯粹的数据格式字符串
    num = num.toString().replace(/\$|\,/g,'');
    //如果num不是数字，则将num置0，并返回
    if(''==num || isNaN(num)){return 'Not a Number ! ';}
    //如果num是负数，则获取她的符号
    var sign = num.indexOf("-")> 0 ? '-' : '';
    //如果存在小数点，则获取数字的小数部分
    var cents = num.indexOf(".")> 0 ? num.substr(num.indexOf(".")) : '';
    cents = cents.length>1 ? cents : '' ;//注意：这里如果是使用change方法不断的调用，小数是输入不了的
    //获取数字的整数数部分
    num = num.indexOf(".")>0 ? num.substring(0,(num.indexOf("."))) : num ;
    //如果没有小数点，整数部分不能以0开头
    if('' == cents){ if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
    //如果有小数点，且整数的部分的长度大于1，则整数部分不能以0开头
    else{if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
    //针对整数部分进行格式化处理，这是此方法的核心，也是稍难理解的一个地方，逆向的来思考或者采用简单的事例来实现就容易多了
    /*
      也可以这样想象，现在有一串数字字符串在你面前，如果让你给他家千分位的逗号的话，你是怎么来思考和操作的?
      字符串长度为0/1/2/3时都不用添加
      字符串长度大于3的时候，从右往左数，有三位字符就加一个逗号，然后继续往前数，直到不到往前数少于三位字符为止
     */
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
    {
      num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
    }

    if(numTemp.indexOf('-') > -1){
      return ('-' + sign + num + cents);
    } else {
      return (sign + num + cents);
    }
    //将数据（符号、整数部分、小数部分）整体组合返回

  }
}

/**
 * Price
 * 转换金额为分单位
 * @param {String} num [万元]
 * */
export const wanToFen = (num) => {
  if(!checkNull(num)){
    var reg = new RegExp("万","g");
    var str = num.toString().replace(reg,"");
    return Number(str) * 1000000

  } else {
    return num
  }


}

/**
 * Price
 * 转换金额为万元单位
 * 分 - 万
 * @param  {Number|| String} num [分]
 * */
export const fenToWan = (num) => {
  // num = JSON.stringify(num).slice(0, JSON.stringify(num).length - 4) / 100
  let numTemp = num
  if(numTemp.toString().indexOf('万') < 0){
    num = Number(num) / 1000000
    return num + '万'
  } else{
    return num
  }


  // function strNumSize(tempNum){
  //   var stringNum = tempNum.toString()
  //   var index = stringNum.indexOf(".")
  //   var newNum = stringNum;
  //   if(index!=-1){
  //     newNum = stringNum.substring(0,index)
  //   }
  //   return newNum.length
  // }
  //
  // var moneyUnits = ["元", "万元", "亿元", "万亿"]
  // var dividend = 10000;
  // var curentNum = num;
  // //转换数字
  // var curentUnit = moneyUnits[0];
  // //转换单位
  // for (var i = 0; i <4; i++) {
  //   curentUnit = moneyUnits[i]
  //   if(strNumSize(curentNum)<5){
  //     break;
  //   }
  //   curentNum = curentNum / dividend
  // }
  // return curentNum + curentUnit;
}

/**
 * Price
 * 判断小数点后的位数
 * @param {String} num [要判断的数]
 * true 通过 false 未通过
 * */
export const checkDotBehindNum = (num, dotNum) => {
  let arr = num.toString().split(".")
  if(arr.length > 1){
    return arr[1].length <= dotNum
  } else {
    return true;
  }

}


/**
 * Form
 * 判断输入是否为合法的手机号码 true为符合
 * @param {Number,String} phoneNum
 * */
export const checkPhoneNumber = (phoneNum) => {
  if(!checkNull(phoneNum)){
    var reg_mobile = /^1([358][0-9]|4[579]|66|7[01235678]|9[189])[0-9]{8}$/;

    let res = reg_mobile.test(phoneNum)
    // if(!res){
    //   that.$message.warning('手机号不正确')
    // }

    return res;
  }

};

/**
 * Form
 * 判断输入是否为合法的邮箱规则 true为符合
 * @param {String} email
 * */
export const checkEmail = (email) => {
  if(!checkNull(email)){
    // var reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
    var reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;

    let res = reg.test(email)
    // if(!res){
    //   that.$message.warning('邮箱不正确')
    // }
    return res;
  }
};


/**
 * Form
 * 判空
 * @param {any} args
 * true为空，false为非空
 */
export const checkNull = (args) => {
  if (args === null || args === 'null' || args === undefined || args === 'undefined' || args === '' || args.length === 0 || args === {}) {
    return true;
  } else {
    return false;
  }
};

/**
 * Form
 * 是否最多两位小数
 * @parma {number}number
 * */
export const checkTwoPoint = (number) => {
  if(checkNull(number)){
    return false;
  }

  var partten = /^\d+(\.\d{1,2})?$/
  return partten.test(number)
};
/**
 * Form
 * 是否最多四位小数
 * @parma {number}number
 * */
export const checkForePoint = (number) => {
  if(checkNull(number)){
    return false;
  }

  var partten = /^\d+(\.\d{0,4})?$/
  return partten.test(number)
};


/**
 * Form
 * 数字校验
 * @param {number} number*/
export const formatNumber = (number) => {
  if(checkNull(number)){
    return false;
  }

  var partten = /^\d/
  return partten.test(number)
};

export const pwdFilter = (pwd) => {
  var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
  return reg.test(pwd)
}

/**
 * Form
 * 税务号校验
 * @param {code} string*/
export const taxCode = (code) => {
  if(checkNull(code)){
    return false;
  };

  var partten = /^[0-9a-zA-z_]{18}$/;
  return partten.test(code);
};

/**
 * Form
 *  判空、正整数
 *  @param {number, String} number
 * */
export const checkInteger = (number) => {
  if(checkNull(number)){
    return false;
  }

  var partten = /^[0-9]*$/;
  return partten.test(number);
}
/**
 * Form
 *  中文字符
 *  @param {String} str
 * */
export const checkChinese = (str) => {
  if(checkNull(str)){
    return false;
  }

  var partten = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
  return partten.test(str);
}




/**
 * Form
 * 身份证验证
 * 大陆身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
 * 香港身份证
 * 澳门身份证
 * 台湾身份证
 * @param {String} cardNo
 * true 为通过
 * */
export const checkIdCard = (cardNo) => {
  var regLu = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  var regGang = /^((\s?[A-Za-z])|([A-Za-z]{2}))\d{6}(\([0−9aA]\)|[0-9aA])$/;
  var regAo = /^[1|5|7][0-9]{6}\([0-9Aa]\)/;
  var regTai = /^[a-zA-Z][0-9]{9}$/;

  let res = regLu.test(cardNo) && regGang.test(cardNo) && regAo.test(cardNo)  && regTai.test(cardNo);
  if (!res) {
    alert('身份证号不正确')
  }

  return res;
};


/**
 * Form
 * 去掉空格
 * @param {String} str [待去空格的文本]
 * */
export const trim = (str) => {
  var result;
  result = str.replace(/(^\s+)|(\s+$)/g, '');
  result = result.replace(/\s/g, '');
  return result;
};


/**
 * Form
 * 去左右两边空格
 * @param {String} str [待去空格的文本]
 * */
export const sideTrim = (str) =>{
  if (str === null || str === 'null' || str === undefined || str === 'undefined' || str === '' || str.length === 0 || str === {}) {
    return ''
  } else {
    return str.replace(/^\s+|\s+$/g,"");
  }
}

/**
 * Form
 * 密码校验
 * @param {string} str [待校验的密码]
 * */
export const checkPwd = (str) =>{
  let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
  return reg.test(str)
};

/**
 * Date
 * 日期格式化为 - 连接
 * @param {String} date
 * */
export const formatDate = (date) => {
  var newDate = new Date(date)
  var Year = 0;
  var Month = 0;
  var Day = 0;
  var CurrentDate = '';
  //初始化时间
  Year = newDate.getFullYear();
  Month = newDate.getMonth() + 1;
  Day = newDate.getDate();
  CurrentDate += Year + '-';
  if (Month >= 10) {
    CurrentDate += Month + '-';
  }
  else {
    CurrentDate += '0' + Month + '-';
  }
  if (Day >= 10) {
    CurrentDate += Day;
  }
  else {
    CurrentDate += '0' + Day;
  }

  return CurrentDate;
};

/**
 * Date
 * 日期格式化将从开始-结束时间内得到时间
 * @param {Array} dateList
 * */
export const getDateFromArr = (dateList) => {
  let dateObj = {
    b:'', // begin 开始时间
    e:'', // end 结束时间
  };

  if(dateList.length < 1){
    return dateObj
  } else if (dateList.length > 1) {
    dateObj = {
      b: formatDate(dateList[0]),
      e: formatDate(dateList[1]),
    }
    return dateObj
  }
}


/**
 * Date
 * 获取当月第一天
 * */
export const getCurrentMonthFirst = () => {
  var date = new Date();

  date.setDate(1);
  var month = parseInt(date.getMonth()+1);
  var day = date.getDate();
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return date.getFullYear() + '-' + month + '-' + day;
}

/**
 * Date
 * 获取当月最后一天
 * */
export const getCurrentMonthLast = () => {
  var date = new Date();
  var currentMonth = date.getMonth();
  var nextMonth = ++currentMonth;
  var nextMonthFirstDay= new Date(date.getFullYear(),nextMonth,1);
  var oneDay = 1000*60*60*24;
  var lastTime = new Date(nextMonthFirstDay-oneDay);
  var month= parseInt(lastTime.getMonth()+1);
  var day = lastTime.getDate();
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return date.getFullYear() + '-' + month + '-' + day;
}

/**
 * Date
 * 获取当月第一天和当天时间，
 * 此工程所有时间选框默认开始为当月第一天，结束时间为当月的当天
 * */
export const  getFirstAndCurrentDay = () => {
  var now = new Date();
  var strLink = "-";
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (day >= 1 && day <= 9) {
    day = "0" + day;
  }
  var firstDate = year + strLink + month + strLink + '01';
  var sysDate = year + strLink + month + strLink + day;

  return [firstDate, sysDate];//以数组形式返回  ;
}


/**
 * 参数判空，并提示不合法字段名
 * 例：
 * params = {
 *  name: 'DKing',
 *  id:'3',
 *  age:18
 * }
 * checkedParamsArr = [
 *  {name:'名字'},
 *  {id:'id'},
 *  {age:'年龄'}
 * ]
 * 返回值
 * true：所有必填项均以填
 * false：有必填项为空
 */
export const checkParamsIsNullTipValue = (_this, params, checkedParamsArr) => {
  let list = [];
  for(let par of checkedParamsArr){
    for(let k in par){
      let obj = {
        key: k,
        value:par[k]
      }
      list.push(obj)
    }
  }

  for(let item in params){
    if(checkNull(params[item])){
      for(let obj of list){
        if(item === obj['key']){
          _this.$message.warning(obj['value'] + '不能为空');
          return false
        }
      }
    }
  }

  return true;
};


/**
 * 参数判空
 * @param {Object} params [待校验的参数]
 * @param {Array} noCheckedParamsArr [无需校验的参数]
 * */
export const checkParamsIsNull = (params, noCheckedParamsArr) => {
  var arr = [];
  for (let item in params) {
    let listItem = {
      key: item,
      value: params[item]
    };
    if(noCheckedParamsArr.indexOf(listItem.key) < 0){
      arr.push(listItem);
    }
  }

  var resStrList = []
  for(let obj of arr){
    if (obj.value === null || obj.value === 'null' || obj.value === undefined || obj.value === 'undefined' || obj.value === '' || obj.value.length === 0) {
      //  开发时将参数的值打印出来，以便定位哪个参数为空
      // alert('必填参数不能为空')
      // alert(obj.key, true)

      return false
    } else {
      resStrList.push(true)
    }
  }

  if(resStrList.indexOf(false) < 0){
    return true
  }
};


/**
 * Array
 * 从数组中删除指定的对象
 * @param {Array<object>} list [列表]
 * @param {Any} child [待删除的对象]
 * */
export const arrayRemoveChild = (list, child) => {
  var newData = list.filter(function(item) {
    return item != child;
  });
  return newData
}

/**
 * Array
 * 根据index索引删除数组对象
 * @param {Array<object>} list [列表]
 * @param {string || Number} index [待删除的下标]
 * */
export const arrayRemoveByIndex = (list, index) => {
  let indexTemp = Number(index)
  if(indexTemp <= (list.length - 1)) {
    for (var i = indexTemp; i < list.length; i++) {
      list[i] = list[i + 1];
      break;
    }
    list.length = list.length - 1;
  }
  return list;
};


/**
 * transform
 *  去掉字符串中的连续(超过一个)的逗号
 *  @param {string} str [待处理的字符串]
 * */
export const delComma = (str) =>{
  str = str.replace(new RegExp('，','g'),',')

  var arry = str.split(",");

  var  arry2 =[]
  arry.map((item)=>{
    if (item !== "" && item != undefined) {
      arry2.push(item);
    }
  })
  arry2 = arry2.join(',')
  return arry2
}

/**
 * transform
 *  将所有中文逗号 转换成 英文逗号
 *  @param {string} str [待处理的字符串]
 * */
export const transformComma =(str)=>{
  console.log(str)
  return str.replace(new RegExp('，','g'),',')
}

/**
 * transform
 * Desc:不识别标签转换
 * @param {String} str 需要被转换的字符
 * */
export const transformDom = (str) =>{
  var strTem = "";
  if (str.length === 0) return;
  strTem = str.replace(/&/g, "&gt;");
  strTem = strTem.replace(/</g, "&lt;");
  strTem = strTem.replace(/>/g, "&gt;");
  strTem = strTem.replace(/ /g, "&nbsp;");
  strTem = strTem.replace(/\'/g, "&#39;");
  strTem = strTem.replace(/\"/g, "&quot;");
  strTem = strTem.replace(/\n/g, "");

  return strTem
};

/**
 * transform
 * Desc:补全路径
 * @param {String} str 需要被转换的字符
 * */
export const changeUrl = (url) => {
  if(!checkNull(url)){
    let isChange = url.indexOf('http');
    let urlPrefix = 'http://oss-cn-beijing.aliyuncs.com/';
    if (isChange > -1) {
      return url;
    } else if (isChange < 0) {
      return urlPrefix + url;
    }
  } else {
    return ''
  }

};

// 存储sessionStorage
export const setSession = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

// 得到sessionStorage
export const getSession = (key) => {
  return JSON.parse(sessionStorage.getItem(key))
};

// 存储localStorage
export const setLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// 得到localStorage
export const getLocal = (key) => {
  return JSON.parse(localStorage.getItem(key))
};

// 删除localStorage
export const delLocal = (key) => {
  localStorage.removeItem(key);
};

// 清空localStorage
export const clearLocal = () => {
  localStorage.clear();
};

// 写入cookie
export const setCookie = (key, value) => {
  document.cookie = key + "=" + JSON.stringify(value)
};

// 写入cookie
export const setCookieHasDomain = (key, value) => {
  document.cookie = key + "=" + JSON.stringify(value) + ";path=/;domain=hvyogo.com"
};

// 从cookie中获取值
export const getCookie = (sName) => {
  var aCookie = document.cookie.split('; ');
  for (var i = 0; i < aCookie.length; i++) {
    var aCrumb = aCookie[i].split('=');
    if (sName == aCrumb[0])
      return JSON.parse(aCrumb[1]);
  }
  return null;
}

// 删除指定cookie
export function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
  }
}

// 删除所有cookie
export const delAllCookie = () => {
  var myDate = new Date();
  myDate.setTime(-1000);//设置时间
  var data = document.cookie;
  var dataArray = data.split('; ');
  for (var i = 0; i < dataArray.length; i++) {
    var varName = dataArray[i].split('=');
    document.cookie = varName[0] + '=\'\'; expires=' + myDate.toGMTString();
  }
};

/**
 * Price
 * 保留小数点后四位
 * @param {Number,String} fen 需要被转换的钱
 * */
export const fenToYuanToDecimal4 = (fen) => {
  var num = fen;
  num = fen * 0.01;
  num += '';
  var reg = num.indexOf('.') > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
  var number = num
  number = Math.round(number * Math.pow(10, 4)) / Math.pow(10, 4); //四舍五入
  number = Number(number).toFixed(4); //补足位数
  // console.log(number)
  return number;
};

/**
 * Price
 * 格式化金钱，三位加一个逗号且保留小数点后四位
 * @param {Number,String} num 需要被转换的金钱
 * */
export const priceToThousandYuan = (num) => {
  if (num === 0) {
    return 0.00
  }
  if (isNaN(Number(num))) {
    return num
  }
  if (num) {

    let numTemp = num;
    if (numTemp.indexOf('-') > -1) {
      num = num.replace('-', '')
    }
    //将num中的$,去掉，将num变成一个纯粹的数据格式字符串
    num = num.toString().replace(/\$|\,/g, '');
    //如果num不是数字，则将num置0，并返回
    if ('' == num || isNaN(num)) { return 'Not a Number ! '; }
    //如果num是负数，则获取她的符号
    var sign = num.indexOf("-") > 0 ? '-' : '';
    //如果存在小数点，则获取数字的小数部分
    var cents = num.indexOf(".") > 0 ? num.substr(num.indexOf(".")) : '';
    cents = cents.length > 1 ? cents : '';//注意：这里如果是使用change方法不断的调用，小数是输入不了的
    //获取数字的整数数部分
    num = num.indexOf(".") > 0 ? num.substring(0, (num.indexOf("."))) : num;
    //如果没有小数点，整数部分不能以0开头
    if ('' == cents) { if (num.length > 1 && '0' == num.substr(0, 1)) { return 'Not a Number ! '; } }
    //如果有小数点，且整数的部分的长度大于1，则整数部分不能以0开头
    else { if (num.length > 1 && '0' == num.substr(0, 1)) { return 'Not a Number ! '; } }
    //针对整数部分进行格式化处理，这是此方法的核心，也是稍难理解的一个地方，逆向的来思考或者采用简单的事例来实现就容易多了
    /*
      也可以这样想象，现在有一串数字字符串在你面前，如果让你给他家千分位的逗号的话，你是怎么来思考和操作的?
      字符串长度为0/1/2/3时都不用添加
      字符串长度大于3的时候，从右往左数，有三位字符就加一个逗号，然后继续往前数，直到不到往前数少于三位字符为止
     */
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
      num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }

    if (numTemp.indexOf('-') > -1) {
      return ('-' + sign + num + cents);
    } else {
      return (sign + num + cents);
    }
    //将数据（符号、整数部分、小数部分）整体组合返回
  }
}

// 补全图片路径
export const changeImgUrl = (newUrl) => {
  let isChange = newUrl.indexOf('http');
  let urlPrefix = 'http://hvyogo-open.oss-cn-beijing.aliyuncs.com/';
  if (isChange > -1) {
    return newUrl;
  } else if (isChange < 0) {
    return urlPrefix + newUrl;
  }
};
// 判断是否输入中文
export const isChineseChar = (str) => {
  var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/
  return reg.test(str)
};

/**
 * File
 * 上传图片添加宽高限制
 * */
export const astrictStyle =(widthSmall,widthMax,heightNum,file) => {
  const isJPG = file.type === 'image/png';
  if (!isJPG) {
    MessageBox('上传头像图片只能是png格式', '提示', {
      confirmButtonText: '确定',
      showCancelButton:false,
      confirmButtonClass: 'btnFullColor'
    })
  }
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function(event) {
      var image = new Image();
      image.onload = function () {
        // console.log('上传图片限制', widthMax)
        var width = this.width;
        var height = this.height;
        if (width < widthSmall || width > widthMax){
          MessageBox('图片宽度必须在' + widthSmall + '～' + widthMax +'px之间！','提示', {
            confirmButtonText: '确定',
            showCancelButton:false,
            confirmButtonClass: 'btnFullColor'
          })
          reject();
          return false
        }
        if (height >heightNum||height< heightNum) {
          MessageBox('图片高度需为' + heightNum + ' px！','提示', {
            confirmButtonText: '确定',
            showCancelButton:false,
            confirmButtonClass: 'btnFullColor'
          })
          reject();
          return false
        }
        resolve();
      };
      image.src = event.target.result;
    }
    reader.readAsDataURL(file);
  });
  return isJPG
};

/**
 * File
 * 上传文件类型校验 >-1 为符合条件返回true 反之则不符合条件 返回false
 * @param {File} file 待检验的文件
 * @param {Array} typeList 要求的文件类型集合
 * */
export const checkFileType =(file, typeList)=>{
  let splitList = file.name.split('.');
  let l = splitList.length -1;
  let currentType = splitList[l];

  return typeList.indexOf(currentType) > -1
};

/**
 * File
 * 上传文件内存大小校验 符合条件返回true 反之则不符合条件 返回false
 * @param {File} file 待检验的文件
 * @param {Number} size 要求的文件大小
 * */
export const checkFileSize =(file, size)=>{
  let fileSize = file.size / 1024 / 1024;
  return Number(fileSize) < Number(size);
};

/** Business
 * 转换费率内外扣方式
 * @param {String} origin 原始方式 'out':外扣 ，'in'：内扣
 * @param {Array} list 待转换的数组
 * */
export const transformRate =(origin, list) => {
  if (origin === 'out') {
    let listTemp = [];
    for (let item of list) {
      item.costRate = Number(item.costRate);
      let obj = {...item};
      obj.costRate = Math.round(item.costRate / (1 + item.costRate) * 10000) / 10000;
      listTemp.push(obj);
    }
    return listTemp;

  } else if (origin === 'in') {
    let listTemp = [];
    for (let item of list) {
      item.costRate = Number(item.costRate);
      let obj = {...item};
      obj.costRate = Math.round(item.costRate / (1 - item.costRate) * 10000) / 10000;
      listTemp.push(obj);
    }
    return listTemp;
  }
};

/**
 * Business
 * 费率转换的id保留，转换时，只转换费率，id不变
 * @param {Array} originList [被转换的费率表，保留此费率表的费率]
 * @param {Array} copyList [参照费率表，保留此列表的id]
 * */
export const transformRateRetainId =(originList, copyList)=>{
  let resList = JSON.parse(JSON.stringify(copyList));
  resList.forEach(function (item, itemIndex) {
    let itemTemp = {...item};
    itemTemp.cooperatorRules.forEach(function (obj, objIndex) {
      if(!checkNull(originList[itemIndex])){
        obj.distributeRuleId = !checkNull(originList[itemIndex].cooperatorRules[objIndex]) ?  originList[itemIndex].cooperatorRules[objIndex].distributeRuleId : '';
      }
    });
  });
  return resList;
};

/**
 * Business
 * 处理费率表的金额 分-元
 * @param {Array} originList [被转换的费率表]
 * */
export const handleRateRulesListToYuan =(originList)=>{
  let resList = JSON.parse(JSON.stringify(originList));
  for(let item of resList){
    // 将月下发额分转元
    // item.upperLimitAmount = item.upperLimitAmount === 0?9999999999:fenToYuanNomal(item.upperLimitAmount);
    item.upperLimitAmount = checkNull(item.upperLimitAmount)?'':fenToYuanNomal(item.upperLimitAmount);
    for(let obj of item.cooperatorRules){
      // 将单人下发额分转元
      obj.monthLimitAmount = !checkNull(obj.monthLimitAmount)?fenToWan(obj.monthLimitAmount) : 0;
      // 是否启用字段无值默认为true
      obj.restrictFlag = !checkNull(obj.restrictFlag)?obj.restrictFlag:true;
    }
  }

  return resList;
};

/**
 * Business
 * 处理费率表的金额 元-分
 * @param {Array} originList [被转换的费率表]
 * */
export const handelRateRulesListToFen =(originList)=>{
  if(checkNull(originList)){
    return [];
  }

  let resList = JSON.parse(JSON.stringify(originList));
  for(let item of resList){
    // 将月下发额元转分
    item.upperLimitAmount = yuanToFen(item.upperLimitAmount);

    for(let obj of item.cooperatorRules){
      // 将单人下发额元转分
      obj.monthLimitAmount = wanToFen(obj.monthLimitAmount)
    }
  }

  return resList
};

// 判空
export const isNull = (args) => {
  if (args === null || args === 'null' || args === undefined || args === 'undefined' || args === '' || args.length === 0 || args === {}) {
    return true
  } else {
    false
  }
};

