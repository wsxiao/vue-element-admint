/**
 * @Author: DKing
 * @Desc: 表单校验
 * @Date: 2019-08-19
 */

// import {VDATA, VDT} from "../../utils/validate.service";
// import {checkMaxLength} from "../../utils/validataFun";
//
//
// // 新增运营账号
// export const perCreateAndInfo = {
//   userName: [
//     {required: true, message: '请输入姓名', trigger: 'blur'},
//     checkMaxLength
//   ],
//   sex: [
//     {required: true, message: '请选择性别', trigger: 'blur'},
//   ],
//   phoneNo: [
//     {required: true, message: '请输入手机号码', trigger: 'blur'},
//     {
//       validator: (rule, value, callback) => {
//         let vdt = VDATA(
//           value,
//           {
//             "phoneNum": {msg: VDT.message.phoneNum},
//           })
//         if (!vdt.result) {
//           callback(new Error(vdt.msg))
//         } else {
//           callback();
//         }
//       },
//       trigger: 'blur'
//     }
//   ],
//   email: [
//     {required: true, message: '请输入绑定邮箱', trigger: 'blur'},
//     {
//       validator: (rule, value, callback) => {
//         let vdt = VDATA(
//           value,
//           {
//             "email": {msg: VDT.message.email},
//           })
//         if (!vdt.result) {
//           callback(new Error(vdt.msg))
//         } else {
//           callback();
//         }
//       },
//       trigger: 'blur'
//     }
//   ],
//   loginName: [
//     {required: true, message: '请输入登录账号', trigger: 'blur'},
//   ],
//   // roleName: [
//   //   {required: true, message: '请选择角色', trigger: 'blur'},
//   // ],
//   ipWhite: [
//     {required: true, message: '请输入IP白名单', trigger: 'blur'},
//   ],
// }
