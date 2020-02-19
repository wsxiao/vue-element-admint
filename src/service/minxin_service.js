import {
  getFindDistCompanyAll, postBusinessLeadersList, postDistributesChannelAll, postDistributesCompanyAll, postIndustryAll,
  postRolesListAll
} from "./apis";
import {HTTP_CODE} from "./axios_constants";

/**
 * @Author: DKing
 * @Desc: 混入
 * @Date: 2019-12-16
 */

// 获取下发公司列表
export const LowerCompanyAllList = {
  data(){
    return {
      resLowerSendCompanyList: [],      // 下发公司列表
    }
  },

  created(){
    this.xhrGetLowerCompanyList()
  },

  methods:{
    xhrGetLowerCompanyList() {
      getFindDistCompanyAll().then(res => {
        if (res.statusCode === HTTP_CODE.suc) {
          this.resLowerSendCompanyList = res.data
          // console.log('请求下发公司列表成功')
        }
      })
    },
  }
};

// 获取业务负责人列表
export const BusinessLeadersList = {
  data(){
    return {
      resBusiLeadersList: [],      // 业务负责人列表
    }
  },

  created(){
    this.xhrGetBusinessLeaders()
  },

  methods:{
    // xhr -- 获取业务负责人列表
    xhrGetBusinessLeaders() {
      postBusinessLeadersList().then(res => {
        if(res.statusCode === HTTP_CODE.suc){
          this.resBusiLeadersList = res.data;
          console.log('请求业务负责人列表成功')
        }
      });
    },
  }
};

// 所属行业下拉框 id/industryName/createTime
export const IndustryAllList = {
  data(){
    return {
      resIndustryAllList: [],      // 所属行业列表
    }
  },

  created(){
    this.xhrIndustryAllList()
  },

  methods:{
    xhrIndustryAllList(){
      postIndustryAll().then(res => {
        if (res.statusCode === HTTP_CODE.suc) {
          this.resIndustryAllList = res.data
          // console.log('所属行业请求成功')
        }
      })
    }
  }
};

// 下发通道下拉框distributeChannelId、distributeChannelName
export const DistributeChannelAllList = {
  data(){
    return {
      resDistributeChannelAllList: [],      // 下发通道列表
    }
  },

  created(){
    this.xhrDistributeChannelList()
  },

  methods:{
    xhrDistributeChannelList(){
      postDistributesChannelAll().then(res => {
        if (res.statusCode === HTTP_CODE.suc) {
          this.resDistributeChannelAllList = res.data
          // console.log('下发通道请求成功')
        }
      })
    },
  }
};

// 账号角色下拉框
export const AccountRoleAllList = {
  data(){
    return {
      resAccountRoleAllList: [],      // 账号角色下拉列表
    }
  },

  created(){
    this.xhrAccountRoleAllList()
  },

  methods:{
    xhrAccountRoleAllList(){
      postRolesListAll().then(res => {
        if (res.statusCode === HTTP_CODE.suc) {
          this.resAccountRoleAllList = res.data
          // console.log('角色列表请求成功')
        }
      })
    },
  }
};
