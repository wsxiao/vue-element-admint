import Vue from 'vue'
import Router from 'vue-router'

/**
 * 数据管理模块
 * BSendStatistics： 商户下发统计
 * CSendStatistics： 用户下发统计
 * AgentSendStatistics：代理下发统计
 * */


/**
 * 静态页面
 * */
// 元素表
import DomStandard from '@/views/staticPages/domStandard'
// 导航页
import Home from '@/views/layout/layout'
// 首页
import IndexPage from '@/views/staticPages/homePage'
// 登录页
import Login from '@/views/login/login'
// 出错页
import ErrorPage from '@/views/staticPages/errorPage'
// 升级页
import UpgradePage from '@/views/staticPages/upgradePage'


import TableList from '@/views/Table/table'
import FormList from '@/views/Form/form'

// 出错页
import InStock from '@/views/pages/inStock.vue'
import GoodsList from '@/views/pages/goodsList.vue'
import OutStockRecord from '@/views/pages/outStockRecord.vue'
import CreateEnterprise from '@/views/pages/createEnterprise.vue'
import SendSMS from '@/views/pages/sendSMS.vue'
import GiveRecord from '@/views/pages/giveRecord.vue'
import UserList from '@/views/pages/userList.vue'
import IntegralGoods from '@/views/pages/integralGoods.vue'
import ExchangeOrder from '@/views/pages/exchangeOrderList.vue'
import PlatformUserList from '@/views/pages/platformUserList.vue'
import ConsignmentRecord from '@/views/pages/consignmentRecord.vue'
import ConsignmentOrder from '@/views/pages/consignmentOrder.vue'

import ActivitiesList from '@/views/pages/activitiesList.vue'
import CreatedActivity from '@/views/pages/createdActivity.vue'
import ActivityStatus from '@/views/pages/activityStatus.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        title: "慧用工智能结算系统"
      }
    },
    {
      path: '/domStandard',
      name: 'dom-standard',
      component: DomStandard,
      meta: {
        title: "元素标准"
      }
    },
    {
      path: '/home',
      name: 'homePage',
      component: Home,
      children: [
        {
          path: '/inStock',
          name: 'in-stock',
          component: InStock,
          meta: {
            title: "采购入库"
          }
        },
        {
          path: '/goodsList',
          name: 'goods-list',
          component: GoodsList,
          meta: {
            title: "商品列表"
          }
        },
        {
          path: '/outStockRecord',
          name: 'out-stock-record',
          component: OutStockRecord,
          meta: {
            title: "出库记录"
          }
        },
        {
          path: '/createEnterprise',
          name: 'create-enterprise',
          component: CreateEnterprise,
          meta: {
            title: "企业开户"
          }
        },
        {
          path: '/senSMS',
          name: 'send-sms',
          component: SendSMS,
          meta: {
            title: "营销短信"
          }
        },
        {
          path: '/giveRecord',
          name: 'give-record',
          component: GiveRecord,
          meta: {
            title: "积分转赠记录"
          }
        },
        {
          path: '/userList',
          name: 'user-list',
          component: UserList,
          meta: {
            title: "商城用户列表"
          }
        },
        {
          path: '/integralGoods',
          name: 'integral-goods',
          component: IntegralGoods,
          meta: {
            title: "积分商品"
          }
        },
        {
          path: '/exchangeOrder',
          name: 'exchange-order-list',
          component: ExchangeOrder,
          meta: {
            title: "兑换订单"
          }
        },
        {
          path: '/platformUserList',
          name: 'platform-user-list',
          component: PlatformUserList,
          meta: {
            title: "平台用户列表"
          }
        },
        {
          path: '/consignmentRecord',
          name: 'consignment-record',
          component: ConsignmentRecord,
          meta: {
            title: "寄售记录"
          }
        },
        {
          path: '/consignmentOrder',
          name: 'consignment-order',
          component: ConsignmentOrder,
          meta: {
            title: "寄售订单"
          }
        },


        {
          path: '/activitiesList',
          name: 'activities-list',
          component: ActivitiesList,
          meta: {
            title: "活动列表"
          }
        },
        {
          path: '/createdActivity',
          name: 'create-activity',
          component: CreatedActivity,
          // meta: {
          //   title: "新建活动"
          // }
          meta: {
            title: "新建活动",
            breadcrumb: [
              {
                name: '活动列表',
                path: ''
              },
            ]
          }
        },
        {
          path: '/activityStatus',
          name: 'activity-status',
          component: ActivityStatus,
          meta: {
            title: "活动状态",
            breadcrumb: [
              {
                name: '活动列表',
                path: ''
              },
            ]
          }
        },





        {
          path: '/index',
          name: 'index',
          component: IndexPage,
          meta: {
            title: "首页"
          }
        },
        {
          path: '/errorPage',
          name: 'error-page',
          component: ErrorPage,
          meta: {
            title: "页面出错"
          }
        },
        {
          path: '/upgradePage',
          name: 'upgrade-page',
          component: UpgradePage,
          meta: {
            title: "系统升级"
          }
        },

        {
          path: '/table',
          name: 'table-list',
          component: TableList,
          meta: {
            title: "Table",
            keepAlive: true,
            breadcrumb: [
              {
                name: '表格',
                path: ''
              }
            ]
          }
        },{
          path: '/form',
          name: 'form-list',
          component: FormList,
          meta: {
            title: "Form",
            keepAlive: true,
            breadcrumb: [
              {
                name: '表单',
                path: ''
              }
            ]
          }
        },
      ]
    },
  ]
})
