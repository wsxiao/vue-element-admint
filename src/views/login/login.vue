<!--
  @Author: DKing
  @Desc: 登录页面
  @Date: 2019-12-16
-->
<template>
  <div class="login-main-body">
    <div class="main-content">
      <div class="login-box">
        <p class="login-text">S M S</p>
        <!--<img src="../../../static/login/pic_login_logo2.png" alt="" />-->

        <el-form :model="accountAndPwd" :rules="rules" ref="accountAndPwd" class="demo-ruleForm">
          <!--账号-->
          <el-form-item class="login-form-item" prop="loginName">
            <p class="login-form-icon">
              <img src="../../../static/login/ic_login_account.png" alt="">
            </p>
            <el-input
              placeholder="请输入账号"
              v-model="accountAndPwd.loginName"
            >
            </el-input>
          </el-form-item>

          <!--密码-->
          <el-form-item class="login-form-item" prop="password">
            <p class="login-form-icon">
              <img src="../../../static/login/ic_login_password.png" alt="">
            </p>
            <el-input
              placeholder="请输入密码"
              v-model="accountAndPwd.password"
              type="password"
            >
            </el-input>
          </el-form-item>
        </el-form>

        <span class="login-btn" @click="clickBtn()">登录</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {loginRules} from "./vat";
  import {setLocal} from "../../filters/filters";

  export default {
    name: "login",
    components: {},

    data() {
      return {
        accountAndPwd: {
          loginName: '',
          password: '',
        },
        rules: loginRules
      }
    },

    computed: {},

    created() {

    },

    mounted() {

    },

    methods: {
      // 点击登录 & 获取验证码 账号密码必填之后，滑块init后发送验证码
      clickBtn() {
        this.$refs['accountAndPwd'].validate((valid) => {
          if (valid) {
            console.log('校验通过')
            this.$router.push({path: '/index'})
            setLocal('activeNavIndex', '1')

          } else {
            console.log('校验不通过')
          }
        });
      },
    }

  }
</script>
<style>
  .login-main-body .el-input__inner{
    height: 40px;
    padding-left: 45px;
  }

  .login-code .el-input {
    width: 256px;
  }
</style>
<style lang="scss" scoped>
  @import "../../styles/variable";

  .login-main-body {
    /*background: url("../../../static/login/pic_login_bg.png") no-repeat 0 0;*/
    background-size: cover;
    background-color: #2c4247;
    padding: 90px 240px;
    position: relative;
    height: 100%;
    .bg-img {
      width: 100%;
    }

    .main-content {
      width: 960px;
      height: 500px;
      background-color: #fff;
      position: absolute;
      top: calc(50% - 250px);
      left: calc(50% - 480px);
      border-radius: 8px;
      display: flex;
      flex-direction: row;
      .login-box {
        display: flex;
        flex-direction: column;
        padding: 50px 60px;
        text-align: center;
        width: 100%;
        .login-text{
          margin-bottom:60px;
          font-size: 28px;
          font-weight: 600;
        }
        img {
          width: 280px;
          margin-left:calc(50% - 140px);
          margin-bottom: 48px;
        }

        .login-form-item {
          position: relative;
          margin-bottom: 24px;
          .login-form-icon {
            position: absolute;
            left: 1px;
            top: 1px;
            margin: 0;
            z-index: 100;
            height: 38px;
            width: 39px;
            background-color: #fafafa;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            img {
              width: 16px;
              height: 16px;
              margin: 12px;
            }
          }
        }
        .remember-account {
          @include align-left;
          margin-left: 2px;
          width: 100px;
        }
        .login-btn {
          width: 100%;
          height: 40px;
          line-height: 40px;
          margin-top: 50px;
          background: $button-confirm-color;
          border-radius: 4px;
          font-size: 14px;
          color: #fff;
          outline: none;
          margin-bottom:64px;
        }
        .copyright {
          color: $fontColorIgnore;
          font-size: 12px;
        }
      }
    }
  }

  .login-code .btnLargeLineColor {
    width: 96px;
    min-width: 90px;
    height: 40px;
    margin-left: 4px;
    line-height: 40px;
    vertical-align: top;
  }
</style>
