<!--
  @Author: DKing
  @Desc: 主页
  @Date: 2019-12-16
-->
<template>
  <div class="nav-page-main">
    <!--导航头-->
    <div class="nav-header">
      <!--横向导航-->
      <div class="nav-col">
        <span class="nav-login-account">Hello - {{userName}}</span>

        <el-dropdown
          :show-timeout=10
          width="120"
          trigger="click"
          @command="chooseConfig"
        >
          <span class="el-dropdown-link">
             管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="exit">退出登录</el-dropdown-item>
            <el-dropdown-item command="setting">系统设置</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <!--面包屑导航-->
      <div class="nav-crumbs">
        <span class="title">{{$route.meta.title}}</span>

        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in $route.meta.breadcrumb" :key="item.index">
            <router-link class="father-page" v-show="item.path !== ''" :to="{ path: item.path }">{{item.name}}
            </router-link>
            <span class="father-page" v-show="item.path === ''">{{item.name}}</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item class="current-page">{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <!--侧导航-->
    <div class="slide-nav">
      <!--左侧logo-->
      <div class="nav-logo">
        <img class="logo" src="../../../static/nav/ic_nav_logo.png"/>

      </div>

      <!--左侧菜单组件-->
      <el-menu
        :default-active="activeNavIndex"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        background-color="#051A33"
        text-color="#fff"
        active-text-color="#fff">
        <!--遍历菜单变量，生成一级菜单，根据children的length判断是生成直接菜单还是含有子集菜单-->
        <span v-for="level1 of menuList">
          <!--如果length>0 证明有子集，生成含有子集的菜单-->
          <el-submenu :index="level1.index" v-show="level1.children.length > 0">
            <!--菜单信息-->
            <template slot="title">
              <img class="menu-icon" :src="level1.icon" alt="">
              <span>{{level1.name}}</span>
            </template>

            <!--遍历菜单，生成二级菜单，根据children的length判断是生成直接菜单还是含有子集菜单-->
            <span v-for="level2 of level1.children" :key="level2.index">
              <!--如果length>0 证明有子集，生成含有子集的菜单-->
              <el-submenu :index="level2.index" v-show="level2.children.length > 0">
                <template slot="title">{{level2.name}}</template>
                <el-menu-item v-for="level3 of level2.children" :index="level3.index" :key="level3.index"
                              @click="jumpRouter(level3.path)">{{level3.name}}</el-menu-item>
              </el-submenu>
              <!--如果length < 1 证明没有子集，生成直接菜单-->
              <el-menu-item :index="level2.index" v-show="level2.children.length < 1" @click="jumpRouter(level2.path)">{{level2.name}}</el-menu-item>
            </span>
          </el-submenu>

          <!--如果length < 1 证明没有子集，生成直接菜单-->
          <el-menu-item v-show="level1.children.length < 1" :index="level1.index" @click="jumpRouter(level1.path)">
              <img class="menu-icon" :src="level1.icon" alt="">
            <span slot="title">{{level1.name}}</span>
          </el-menu-item>
        </span>
      </el-menu>
    </div>

    <div id="pageRouter">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {
    checkNull,
    checkPwd,
    clearLocal,
    getLocal,
    setLocal
  } from "../../filters/filters";
  import {DIALOG_CONST, FORMS} from "../../service/businessConsts";

  export default {
    name: "home-page",
    components: {},

    computed: {},

    data() {

      return {
        menuList: [],
        activeNavIndex: '', // 当前导航页面
        userName:'Admin'   // 登录账号
      }
    },

    created() {
      this.getMenu()
    },

    methods: {
      getMenu() {
        this.menuList = [
          {index: '1', level: 1, name: '采购入库', icon: './static/nav/home/nor.png', path: 'in-stock', children: []},
          {index: '2', level: 1, name: '商品状态', icon: './static/nav/home/nor.png', path: 'goods-list', children: []},
          {index: '3', level: 1, name: '出库记录', icon: './static/nav/home/nor.png', path: 'out-stock-record', children: []},
          {index: '4', level: 1, name: '企业开户', icon: './static/nav/home/nor.png', path: 'create-enterprise', children: []},

          {index: '5', level: 1, name: '营销短信', icon: './static/nav/home/nor.png', path: 'send-sms', children: []},
          {index: '6', level: 1, name: '积分转赠记录', icon: './static/nav/home/nor.png', path: 'give-record', children: []},

          {index: '7', level: 1, name: '商城用户列表', icon: './static/nav/home/nor.png', path: 'user-list', children: []},
          {index: '8', level: 1, name: '积分商品', icon: './static/nav/home/nor.png', path: 'integral-goods', children: []},
          {index: '9', level: 1, name: '兑换订单', icon: './static/nav/home/nor.png', path: 'exchange-order-list', children: []},

          {index: '10', level: 1, name: '平台用户列表', icon: './static/nav/home/nor.png', path: 'platform-user-list', children: []},
          {index: '11', level: 1, name: '寄售记录', icon: './static/nav/home/nor.png', path: 'consignment-record', children: []},
          {index: '12', level: 1, name: '寄售订单', icon: './static/nav/home/nor.png', path: 'consignment-order', children: []},
          {
            index: '2', level: 1, name: '表格', icon: './static/nav/home/nor.png', path: '', children: [
              {index: '21', level: 2, name: 'table', path: 'table-list', children: []},
            ]
          },
          {
            index: '3', level: 1, name: '表单', icon: './static/nav/home/nor.png', path: '', children: [
              {index: '31', level: 2, name: 'form表单', path: 'form-list', children: []},
              // {index: '32', level: 2, name: '行业信息维护', path: 'industry-info', children: []}
            ]
          },
          {
            index: '5', level: 1, name: '静态页面', icon: './static/nav/home/nor.png', path: '', children: [
              {index: '51', level: 2, name: '自定义元素表', path: 'dom-standard', children: []},
            ]
          },
        ]

        if (checkNull(getLocal('activeNavIndex'))) {
          this.activeNavIndex = this.menuList[0].id;
          this.$router.push({name: this.menuList[0].path})

        } else {
          this.activeNavIndex = getLocal('activeNavIndex')

        }
      },

      // xhr -- 退登
      xhrExitLogin(){
        this.$router.push({path: '/'})
        clearLocal()
      },

      // 跳转路由
      jumpRouter(path) {
        this.$router.push({name: path})
      },

      // 选择右上角下拉
      chooseConfig(command) {
        console.log(command);
        if (command === 'setting') {
          this.$router.push({name: 'activities-list'})

        } else if(command === 'exit'){
          this.xhrExitLogin()
        }
      },

      handleSelect(key, keyPath) {
        setLocal('activeNavIndex', key)
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variable";

  .nav-page-main {
    height: 100%;
    overflow: auto;
    .nav-header {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      z-index: 1;
      .nav-col {
        /*width:calc(100% - 256px);*/
        width: 100%;
        height: 64px;
        background: #FFFFFF;
        box-shadow: 0 1px 4px 0 rgba(5, 26, 51, 0.08);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 24px;
      }

      .nav-crumbs {
        width: calc(100% - 256px);
        margin-left: 256px;
        padding-left: 32px;
        position: relative;
        top: 1px;
        display: flex;
        align-items: center;
        background-color: #fff;
        height: 60px;
        .father-page {
          font-size: 12px;
          color: $fontColorIgnore;
        }
        .title {
          color: #272727;
          font-size: 24px;
          font-weight: 500;
          margin-right: 24px;
        }
      }

    }

    .slide-nav {
      width: 256px;
      height: 100%;
      background: #051A33;
      position: absolute;
      top: 0;
      z-index: 1;
      .nav-logo {
        background-color: #08284D;
        padding: 12px 28px;
        height: 64px;
        width: 256px;
        .logo {
          width: 100%;
        }
      }
      .menu-icon {
        width: 16px;
        height: 16px;
        margin-right: 12px;
      }
    }

    #pageRouter {
      height: calc(100% - 176px);
      width: calc(100% - 304px);
      position: relative;
      top: 24px;
      left: 280px;
      text-align: left;
    }
  }

</style>
<style>
  .el-dropdown-menu.el-popper{
    width:120px;
  }
  .nav-login-account{
    margin-right:20px;
  }
  .el-input__icon{
    height: auto;
    line-height: 36px;
  }
  .el-breadcrumb {
    line-height: 64px;
  }

  .nav-col .el-input--suffix .el-input__inner {
    border: none;
    width: 121px;
    padding: 0;
    text-align: center;
  }

  .el-menu-item.is-active {
    background-image: linear-gradient(269deg, #24B5FF 0%, #0F53FF 100%);
    border-radius: 4px;
    width: calc(100% - 16px);
    height: 40px;
    margin: 12px 8px;
    line-height: 40px;
    opacity: 1;
    font-weight: 500;
  }

  .el-menu-item, .el-submenu__title {
    height: 64px;
    line-height: 64px;
    text-align: left;
    opacity: 0.6;
  }

  .el-menu-item-group__title {
    text-align: left;
  }

  .el-menu {
    border: none;
    overflow: auto;
    height: 100%;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: 800;
    color: #595959;
    font-size: 12px;
  }

  .el-input__inner {
    height: 32px;
  }

</style>
