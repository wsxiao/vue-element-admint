<!--
  @Author: DKing
  @Desc: 兑换订单,
  @Date: 2020-02-19
-->

<template>
  <div class="page-main">
    <div class="list-body">
      <el-table
        :empty-text=consts.tableEmptyText
        :data="resDataList"
        :max-height=consts.tableMaxHeight
      >
        <el-table-column
          fixed
          prop="dingdanhao"
          label="订单号">
        </el-table-column>
        <el-table-column
          prop="shijian"
          label="时间">
        </el-table-column>
        <el-table-column
          prop="shangpin"
          label="订单商品">
        </el-table-column>
        <el-table-column
          prop="shuliang"
          label="数量">
        </el-table-column>
        <el-table-column
          prop="dingdanjifen"
          label="订单积分">
        </el-table-column>
        <el-table-column
          prop="duihuanzhanghao"
          label="兑换账号">
        </el-table-column>
        <el-table-column
          prop="dingdanzhuangtai"
          label="订单状态">
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

  export default {
    name: "exchange-order-list",
    components: {},

    computed: {},

    data() {
      return {
        consts: CONSTS,   // 常量
        pagination: PAGINATION,
        paramQuery: {
          kahao:'',
          pageNum: 1,
          pageSize: PAGINATION.pageSize,
        },
        resData:{},
        resDataList:[]
      }
    },

    created() {
      this.xhrQueryList()
    },

    methods: {
      // 列表查询
      xhrQueryList() {
        let list = [
          {dingdanhao:'DH12345', shijian:'2019-12-12 12:12:12', shangpin:'久久鸭', shuliang:20, dingdanjifen:3000, duihuanzhanghao:'DK123456', dingdanzhuangtai:'成功'},
          {dingdanhao:'DH12345', shijian:'2019-12-12 12:12:12', shangpin:'久久鸭', shuliang:20, dingdanjifen:3000, duihuanzhanghao:'DK123456', dingdanzhuangtai:'成功'},
          {dingdanhao:'DH12345', shijian:'2019-12-12 12:12:12', shangpin:'久久鸭', shuliang:20, dingdanjifen:3000, duihuanzhanghao:'DK123456', dingdanzhuangtai:'成功'},
          {dingdanhao:'DH12345', shijian:'2019-12-12 12:12:12', shangpin:'久久鸭', shuliang:20, dingdanjifen:3000, duihuanzhanghao:'DK123456', dingdanzhuangtai:'成功'},
          {dingdanhao:'DH12345', shijian:'2019-12-12 12:12:12', shangpin:'久久鸭', shuliang:20, dingdanjifen:3000, duihuanzhanghao:'DK123456', dingdanzhuangtai:'成功'},
          {dingdanhao:'DH12345', shijian:'2019-12-12 12:12:12', shangpin:'久久鸭', shuliang:20, dingdanjifen:3000, duihuanzhanghao:'DK123456', dingdanzhuangtai:'成功'},
          {dingdanhao:'DH12345', shijian:'2019-12-12 12:12:12', shangpin:'久久鸭', shuliang:20, dingdanjifen:3000, duihuanzhanghao:'DK123456', dingdanzhuangtai:'成功'},
          {dingdanhao:'DH12345', shijian:'2019-12-12 12:12:12', shangpin:'久久鸭', shuliang:20, dingdanjifen:3000, duihuanzhanghao:'DK123456', dingdanzhuangtai:'成功'},
          {dingdanhao:'DH12345', shijian:'2019-12-12 12:12:12', shangpin:'久久鸭', shuliang:20, dingdanjifen:3000, duihuanzhanghao:'DK123456', dingdanzhuangtai:'成功'},
        ]

        this.resData = {
          totalCount: 100
        };
        this.resDataList = list
      },


      // 切换页数
      handleCurrentChange(val) {
        this.paramQuery.pageNum = val;
        this.xhrQueryList()
      },
    }

  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variable";
</style>
