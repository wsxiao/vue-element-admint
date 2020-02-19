/**
 * @Author: DKing
 * @Desc: 所有的api接口
 * @Date: 2019-012-16
 */
import {get, post} from './axios_service.js';
import {INTERFACE_URL} from "./interface_urls";

// 1.1 采购模版下载
export const getCodesDownload = params => get(INTERFACE_URL.codesDownload, params, 'form');
// 1.2 采购商品导⼊入
export const postCodesUpload = params => post(INTERFACE_URL.codesUpload, params, 'form');
// 1.3 取消上传的数据
export const postCodeCancel = params => post(INTERFACE_URL.codesCancel, params, 'form');
// 1.4 保存上传的数据
export const postCodeSave = params => post(INTERFACE_URL.codesStorage, params, 'form');

// 2.1 卡列列表
export const postCodeList = params => post(INTERFACE_URL.codesList, params, 'form');
// 2.2 搜索卡商品
export const postCodesSearch = params => post(INTERFACE_URL.codesSearch, params, 'form');
// 2.3 ⼀键上架
export const postCodesOnSale = params => post(INTERFACE_URL.codesOnSale, params, 'form');
// 2.4 修改批次
export const postCodesChangeBatch = params => post(INTERFACE_URL.codesChangeBatch, params, 'form');


// 4.1 企业列列表
export const postEnterpriseList = params => post(INTERFACE_URL.enterpriseList, params, 'form');
// 4.2 上传执照
export const postEnterpriseUpload = params => post(INTERFACE_URL.enterpriseUpload, params, 'form');
// 4.3 查看执照
export const postEnterpriseReview = params => post(INTERFACE_URL.enterpriseReview, params, 'form');
// 4.4 新建企业
export const postEnterpriseCreate = params => post(INTERFACE_URL.enterpriseCreate, params, 'form');


// 7.1 商城⽤用户列列表
export const postMallUserList = params => post(INTERFACE_URL.mallUserList, params, 'form');
// 8.1 商品列列表
export const postMallGoodsList = params => post(INTERFACE_URL.mallGoodsList, params, 'form');
// 9.1 兑换订单列列表
export const postMallOrderList = params => post(INTERFACE_URL.mallOrderList, params, 'form');
// 10.1 平台⽤用户列列表
export const postPlatformUserList = params => post(INTERFACE_URL.platformUserList, params, 'form');
// 11.1 寄售记录
export const postPlatformConsignRecord = params => post(INTERFACE_URL.platformConsignRecord, params, 'form');
// 12.1 寄售订单列列表
export const postPlatformOrderList = params => post(INTERFACE_URL.platformOrderList, params, 'form');


// 13.1 活动列列表
export const postActiveList = params => post(INTERFACE_URL.activeList, params, 'form');
// 13.2 买家已付款
export const postActiveAlreadyPaid = params => post(INTERFACE_URL.activeAlreadyPaid, params, 'form');
// 14.1 下载数据模版
export const getActiveDownload = params => get(INTERFACE_URL.activeDownload, params, 'form');
// 14.2 上传营销数据
export const getActiveUpload = params => post(INTERFACE_URL.activeUpload, params, 'form');
// 14.3 营销数据预览
export const getActiveDataList= params => post(INTERFACE_URL.activeDataList, params, 'form');
// 14.4 可选企业下拉列列表
export const getActiveOptionsEnterprise = params => post(INTERFACE_URL.activeOptionsEnterprise, params, 'form');
// 14.5 可选批次下拉列列表
export const getActiveOptionsBatch = params => post(INTERFACE_URL.activeOptionsBatch, params, 'form');
// 14.6 开始创建⼀一个新的活动
export const getActiveCreate = params => post(INTERFACE_URL.activeCreate, params, 'form');
// 15.1 活动进度
export const getActiveProgress = params => post(INTERFACE_URL.activeProgress, params, 'form');
// 15.2 删除活动
export const getActiveDelete = params => post(INTERFACE_URL.activeDelete, params, 'form');
// 15.4 下载出款清单
export const getActiveDownloadOutList = params => post(INTERFACE_URL.activeDownloadOutList, params, 'form');
// 15.5 上传出款清单
export const getActiveUploadOutList = params => post(INTERFACE_URL.activeUploadOutList, params, 'form');

