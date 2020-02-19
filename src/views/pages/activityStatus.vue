<!--
  @Author: DKing
  @Desc: 活动状态,
  @Date: 2020-02-13
-->

<template>
  <div class="page-main">
    <div class="info-block">
      <p class="info-title marginBottom20">
        <span class="title">{{activityStatusName}}...</span>
        <!--当活动状态为8 数据校验中可以删除重建-->
        <span class="btnFullColor marginLeft32" v-if="statusInfo.status == 8">删除重建</span>
        <!--当活动状态为11 买家付款可以更新买家已付款-->
        <span class="btnLargeFullColor marginLeft32" v-if="statusInfo.status == 11">买家已付款</span>
        <!--当活动状态为12 代付出款可以下载出款清单-->
        <span class="btnLargeFullColor marginLeft32" v-if="statusInfo.status == 12">下载出款清单</span>
        <!--当活动状态为13 完成可以导入出款清单-->
        <span class="btnLargeFullColor marginLeft32" v-if="statusInfo.status == 13">导入出款清单</span>
      </p>
      <div class="info-body">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :hide-timestamp="true">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>

    </div>

    <div class="info-block">
      <p class="info-title">
        <span class="title">活动信息</span>
      </p>
      <div class="info-body">
        <el-row>
          <el-col :span="8">
            <p class="info-item">企业名称：{{statusInfo.qiyemingcheng}}</p>
            <p class="info-item">费率：{{statusInfo.feilv}}</p>
          </el-col>
          <el-col :span="8">
            <p class="info-item">总入款：{{statusInfo.zongchukuan}}</p>
            <p class="info-item">总出款：{{statusInfo.zongrukuan}}</p>
          </el-col>
          <el-col :span="8">
            <p class="info-item">经办人：{{statusInfo.jingbanren}}</p>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <p class="info-item">积分总数：{{statusInfo.jifenzongshu}}</p>
          </el-col>
          <el-col :span="8">
            <p class="info-item">兑换订单：{{statusInfo.duihuandingdan}}</p>
          </el-col>
          <el-col :span="8">
            <p class="info-item">寄售订单：{{statusInfo.jishoudingdan}}</p>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <p class="info-item">基础成本：{{statusInfo.jichuchengben}}</p>
          </el-col>
          <el-col :span="8">
            <p class="info-item">实际折损：{{statusInfo.shijizhesun}}</p>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <p class="info-item">售寄比例：{{statusInfo.jishoubili}}</p>
          </el-col>
          <el-col :span="8">
            <p class="info-item">前段利润：{{statusInfo.qianduanlirun}}</p>
          </el-col>
          <el-col :span="8">
            <p class="info-item">后段利润：{{statusInfo.houduanlirun}}</p>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <p class="info-item">营销短信：{{statusInfo.jishoubili}}</p>
          </el-col>
          <el-col :span="8">
            <p class="info-item">营销规模：{{statusInfo.qianduanlirun}}</p>
          </el-col>
          <el-col :span="8">
            <p class="info-item">实际反馈：{{statusInfo.houduanlirun}}</p>
          </el-col>
        </el-row>

      </div>
    </div>

  </div>

</template>

<script>

  import {CONSTS} from "../../service/businessConsts";

  export default {
    name: "activity-status",
    components: {
    },

    computed: {},

    data() {
      return {
        activities:[
          {statusCode:1, content:'新建活动', size: 'large',  color: '#0bbd87'},
          {statusCode:2, content:'数据校验', size: 'large', type: 'primary', icon: 'el-icon-more'},
          {statusCode:3, content:'短信发送', size: 'large'},
          {statusCode:4, content:'积分转赠', size: 'large'},
          {statusCode:5, content:'用户登录', size: 'large'},
          {statusCode:6, content:'商品兑换', size: 'large'},
          {statusCode:7, content:'平台登录', size: 'large'},
          {statusCode:8, content:'商品寄售', size: 'large'},
          {statusCode:9, content:'买家登录', size: 'large'},
          {statusCode:10, content:'寄售交易', size: 'large'},
          {statusCode:11, content:'买家付款', size: 'large'},
          {statusCode:12, content:'代付出款', size: 'large'},
          {statusCode:13, content:'完成', size: 'large'},
        ],      // 活动状态列表
        statusInfo:{},      // 活动详情
        activityStatusName:'',   // 活动状态名称
        currentIndex:0,
      }
    },

    created() {
      this.xhrGetActivityInfo()

    },

    mounted() {

    },

    methods: {
      xhrGetActivityInfo(){
        this.statusInfo = {
          status:8,
          qiyemingcheng:'DKing',
          zongrukuan:'12000',
          zongchukuan:'20000',
          feilv:'0.34',
          jingbanren:'Car',
          jifenzongshu:'200',
          duihuandingdan:'10',
          jishoudingdan:'12',
          jichuchengben:'200',
          shijizhesun:'10',
          jishoubili:'3:7',
          qianduanlirun:'0.4',
          houduanlirun:'0.3',
          yingxiaoguimo:'100/1000',
          shijifankui:'60/1000',
          yingxiaoduanxin:'大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，',
        }

        this.activities.forEach((item,index) => {
          if(this.statusInfo.status == item.statusCode){
            this.currentIndex = index;
            this.activityStatusName = item.content;
          }
        })

        this.activities.forEach((item, index) =>{
          if(index < this.currentIndex){
            item.color = '#0bbd87';
            delete item.type
            delete item.icon

          } else if(index == this.currentIndex){
            item.type ='primary';
            item.icon = 'el-icon-more';
          }
        });
      },

    }

  }
</script>
<style>
  .el-timeline-item{
    display: inline-block;
    padding: 0 20px 0 3px;
    margin-bottom: 10px;
    /*padding-right: 8px;*/
  }
  .el-timeline-item__tail{
    display: none;
    position: absolute;
    right: -29px;
    height: 0;
    border-top: 2px solid #E4E7ED;
    width: 54px;
    top: 5px;
  }
  .el-timeline-item__wrapper{
    padding-left:15px;
  }
  .block{
    padding:0 30px;
  }
</style>

<style lang="scss" scoped>
  @import "../../styles/variable";

</style>
