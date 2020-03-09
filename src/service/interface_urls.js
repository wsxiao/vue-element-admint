/**
 * @Author: DKing
 * @Desc: 接口地址
 * @Date: 2019-12-16
 */
import axios from 'axios';
axios.defaults.baseURL = 'http://39.101.164.166:13149/'
console.log('接口地址：',axios.defaults.baseURL)
export const INTERFACEURL = {
  // 商品库存
  cardChangeBatch:'cards/changeBatch',       // 修改批次
  codesDownload:'cards/download',    // 采购模版下载
  cardOnSale:'cards/onSale',       // 一键上架
  cardSearch:'cards/cardSearch',    // 搜索卡商品
  codesList:'cards/cardsList',        // 卡列列表
  codesStorage:'cards/storage',      // 保存上传的数据
  codesCancel:'cards/cancel',        // 取消上传的数据
  codesUpload:axios.defaults.baseURL + 'cards/upload',        // 采购商品导入

  // 企业
  enterpriseCreate:'enterprise/create',        // 新建企业
  enterpriseReview:'enterprise/review',        // 查看执照
  enterpriseUpload:'enterprise/upload',        // 上传执照
  enterpriseList:'enterprise/enterpriseList',  // 企业列列表

  // 商城
  mallUserList:'mall/userList',     // 商城⽤户列列表
  mallGoodsList:'mall/goodsList',   // 商城⽤商品列列表
  mallOrderList:'mall/orderList',   // 兑换订单列列表

  // 平台
  platformUserList:'platform/userList',       // 平台⽤用户列列表
  platformConsignRecord:'platform/consignRecord',     // 寄售记录
  platformOrderList:'platform/orderList',     // 寄售订单列列表

  // 活动
  activeUploadOutList:'progress/upload',     //  上传出款清单
  activeDownloadOutList:'progress/download', //  下载出款清单
  activeDelete:'active/deleted',     //  删除活动
  activeProgress:'progress/now',     // 活动进度
  activeCreate:'active/create',      // 开始创建⼀个新的活动
  activeOptionsBatch:'active/batchOperation',         // 可选批次下拉列列表
  activeOptionsEnterprise:'active/enterpriseOperation',// 可选企业下拉列列表
  activeDataList:'active/dataList', // 营销数据
  activeUpload:'active/upload',      // 上传营销数据
  activeDownload:'active/download',  // 下载数据模版
  activeAlreadyPaid:'progress/alreadyPaid',   // 买家已付款
  activeList:'active/activeList',    // 活动列表
};
