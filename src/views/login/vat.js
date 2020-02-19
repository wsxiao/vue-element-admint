/**
 * @Author: DKing
 * @Desc: 表单校验
 * @Date: 2019-12-16
 */
import {vdtLoginPwd} from "../../utils/validataFun";

export const loginRules = {
  loginName: [
    {required: true, message: '请输入登录账号', trigger: 'blur'},
  ],
  password: [
    {required: true, message: '请输入登录密码', trigger: 'blur'},
    vdtLoginPwd()
  ],
}
