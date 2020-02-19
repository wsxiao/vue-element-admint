<!--
  @Author: DKing
  @Desc: 新建活动,
  @Date: 2020-01-01
-->

<template>
  <div class="page-main">
    <div class="list-body">
      <span class="btnLargeFullColor" @click="createdActivity">新建活动</span>

      <el-table
        :empty-text=consts.tableEmptyText
        :data="resRolesList"
        :max-height=consts.tableMaxHeight
      >
        <el-table-column
          fixed
          prop="duiyingpicihao"
          label="活动对应批次">
          <template slot-scope="scope">
            <span class="btnNoBorderBlue" @click="jumpPage(scope.row)">
              {{scope.row.duiyingpicihao}}
            </span>

          </template>
        </el-table-column>
        <el-table-column
          prop="weituofang"
          label="委托方">
        </el-table-column>
        <el-table-column
          prop="mianzhi"
          label="商品面值">
        </el-table-column>
        <el-table-column
          prop="zongrukuan"
          label="总入款">
        </el-table-column>
        <el-table-column
          prop="zongchukuan"
          label="总出款">
        </el-table-column>
        <el-table-column
          prop="feilv"
          label="费率">
        </el-table-column>
        <el-table-column
          prop="huodongzhuangtai"
          label="活动状态">
          <template slot-scope="scope">
            <span class="btnNoBorderBlue" v-if="scope.row.huodongzhuangtai === '买家已付款'" @click="xhrNoticePaid(scope.row)">买家已付款</span>
            <span v-else-if="scope.row.huodongzhuangtai !== '买家已付款'">{{scope.row.huodongzhuangtai}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="jingbanren"
          label="经办人">
        </el-table-column>
      </el-table>

      <el-pagination
        :background="pagination.background"
        @current-change="handleCurrentChange"
        :page-size="pagination.pageSize"
        :current-page="paramQuery.pageNum"
        :layout="pagination.layout"
        :total="resData.totalCount">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import {CONSTS, PAGINATION} from "../../service/businessConsts";
  import {BOX_AGAIN_CONFIRM} from "../../service/messageBox";

  export default {
    name: "activities-list",
    components: {},

    computed: {},

    data() {
      return {
        consts: CONSTS,   // 常量
        pagination: PAGINATION,

        resData:{},
        resRolesList: [],     // 前5条
        paramQuery: {
          pageNum: 1,
          pageSize: PAGINATION.pageSize,
        },
      }
    },

    created() {
      this.xhrQueryList()
    },

    methods: {
      // xhr -- 列表查询
      xhrQueryList() {
        console.log('请求参数：', this.paramQuery);
        let list = [
          {duiyingpicihao: '0', weituofang: '前端0', zongrukuan:'12345634567', mianzhi:'50', zongchukuan:'GH567890232', feilv:'10', huodongzhuangtai:'10', jingbanren:'DKing'},
          {duiyingpicihao: '1', weituofang: '前端1', zongrukuan:'12345634567', mianzhi:'50', zongchukuan:'GH567890232', feilv:'10', huodongzhuangtai:'10', jingbanren:'DKing'},
          {duiyingpicihao: '2', weituofang: '前端2', zongrukuan:'12345634567', mianzhi:'50', zongchukuan:'GH567890232', feilv:'10', huodongzhuangtai:'买家已付款', jingbanren:'DKing'},
          {duiyingpicihao: '3', weituofang: '前端3', zongrukuan:'12345634567', mianzhi:'50', zongchukuan:'GH567890232', feilv:'10', huodongzhuangtai:'10', jingbanren:'DKing'},
          {duiyingpicihao: '4', weituofang: '前端4', zongrukuan:'12345634567', mianzhi:'50', zongchukuan:'GH567890232', feilv:'10', huodongzhuangtai:'10', jingbanren:'DKing'},
          {duiyingpicihao: '5', weituofang: '前端5', zongrukuan:'12345634567', mianzhi:'50', zongchukuan:'GH567890232', feilv:'10', huodongzhuangtai:'10', jingbanren:'DKing'},
          {duiyingpicihao: '6', weituofang: '前端6', zongrukuan:'12345634567', mianzhi:'50', zongchukuan:'GH567890232', feilv:'10', huodongzhuangtai:'10', jingbanren:'DKing'},
          {duiyingpicihao: '7', weituofang: '前端7', zongrukuan:'12345634567', mianzhi:'50', zongchukuan:'GH567890232', feilv:'10', huodongzhuangtai:'10', jingbanren:'DKing'},
          {duiyingpicihao: '8', weituofang: '前端8', zongrukuan:'12345634567', mianzhi:'50', zongchukuan:'GH567890232', feilv:'10', huodongzhuangtai:'10', jingbanren:'DKing'},
          {duiyingpicihao: '9', weituofang: '前端9', zongrukuan:'12345634567', mianzhi:'50', zongchukuan:'GH567890232', feilv:'10', huodongzhuangtai:'10', jingbanren:'DKing'},
        ];

        this.resData.totalCount = 20;
        this.resRolesList = list;
      },

      // xhr -- 同步买家已付款完成
      xhrNoticePaid(obj){
        BOX_AGAIN_CONFIRM(this, '确认买家已付款完成？', () => {
          this.$message({
            type: 'success',
            message: '确认完成!'
          });
        });
      },

      // 新建活动
      createdActivity(){
        this.$router.push({name: 'create-activity'})
      },

      // 切换页数
      handleCurrentChange(val) {
        this.paramQuery.pageNum = val;
        this.xhrQueryList()
      },

      // 跳转页面
      jumpPage(obj){
        console.log(obj.duiyingpicihao)
        this.$router.push({name: 'activity-status',query:{id: obj.duiyingpicihao}})
      }
    }

  }
</script>

<style>
  .el-table__header tr th.afterTable{
    background-color: #fff;
  }
  .el-form-item__content{
    display: inline-block;
  }
  .el-form-item{
    margin:0;
  }
</style>
<style lang="scss" scoped>
  @import "../../styles/variable";
  .btnLargeFullColor {
    margin-bottom: 16px;
  }

  .el-icon-more{
    font-size: 30px;
    position: relative;
    top: 24px;
    z-index: 100;
    left: 50%;
  }
  .box-card .card-header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  /*.between-text,.btn-box{*/
    /*height: 62px;*/
    /*line-height: 62px;*/
    /*border:1px solid red;*/
  /*}*/

</style>
