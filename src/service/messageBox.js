/**
 * @Author: DKing
 * @Desc: 弹框的封装
 * @Date: 2019-12-16
 */

import {checkNull} from "../filters/filters";

/**
 * 需要再次确认的信息弹框
 * @param {object} _this [当前this指向]
 * @param {string} msg [提示信息]
 * @param {function} calb [回调函数]
 * */
export const BOX_AGAIN_CONFIRM  = (_this, msg, calb) => {
  if(checkNull(msg)){
    return;
  }

   _this.$confirm(msg, '提示', {
     confirmButtonText: '确定',
     cancelButtonText: '取消',
     cancelButtonClass:'btnLineColor',
     confirmButtonClass:'btnFullColor'
   }).then(() => {
     calb()

   }).catch(() => {

   })

  _this.$nextTick(function () {
    document.getElementsByClassName('el-message-box__btns')[0].style.display = 'block'
    document.getElementsByClassName('el-message-box__content')[0].style.marginTop = '0'
  })
};


/**
 * 信息弹框
 * @param {object} _this [当前this指向]
 * @param {string} msg [提示信息]
 * @param {function} calb [回调函数]
 * */
export const BOX_MESSAGE  = (_this, msg) => {
   _this.$confirm(msg, '提示', {
     confirmButtonText: '确定',
     confirmButtonClass:'btnFullColor'
   }).then(() => {

   }).catch(() => {

   })

  _this.$nextTick(function () {
    document.getElementsByClassName('el-message-box__btns')[0].style.display = 'block'
    document.getElementsByClassName('el-message-box__content')[0].style.marginTop = '0'
  })
};

export const TIP_BOX_MESSAGE = (_this, msg) => {
  _this.$alert(msg, '提示', {
    confirmButtonText: '确认',
    confirmButtonClass:'btnFullColor',
    callback: action => {}
  });
};

/**
 * 提示信息框，图片 + 文字
 * 用于成功 或 失败
 * @param {object} _this [当前this指向]
 * @param {string} type [类型，成功or失败]
 * @param {string} message [提示文案]
 * */
export const BOX_MESSAGE_HAS_IMG = (_this, type, message) => {
  console.log(type, message)
  let img = ''
  let textClassName = 'dk-message-box-text-' + type
  if(type === 'success'){
    img = '/static/icons/ic_pupop_成功.png'
  } else {
    img = '/static/icons/ic_pupop_失败.png'
  }
  _this.$msgbox({
    title: '提示',
    message: `
          <p class="dk-message-box">
            <img class="dk-message-img" id="dkImg" src="`+ img +`" />
            <span class="` + textClassName +`">`+ message +`</span>
          </p>
            
            
          `,
    showConfirmButton: false,
    dangerouslyUseHTMLString:true,
  })

  _this.$nextTick(function () {
    document.getElementsByClassName('el-message-box__btns')[0].style.display = 'none'
    document.getElementsByClassName('el-message-box__content')[0].style.marginTop = '30px'
  })
}

