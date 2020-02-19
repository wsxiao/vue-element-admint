<!--
  @Author: DKing
  @Desc: 寄售订单,
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
          prop="jishoudanhao"
          label="寄售单号">
        </el-table-column>
        <el-table-column
          prop="xiadanshijian"
          label="下单时间">
        </el-table-column>
        <el-table-column
          prop="dingdanjine"
          label="订单金额">
        </el-table-column>
        <el-table-column
          prop="shifujine"
          label="实付金额">
        </el-table-column>
        <el-table-column
          prop="fukuanzhanghao"
          label="付款账号">
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
    name: "consignment-order",
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
          {jishoudanhao:'12345', xiadanshijian:'2019-12-12 12;12:12', dingdanjine:20000, shifujine:2500, fukuanzhanghao:'12345', dingdanzhuangtai:'完成'},
          {jishoudanhao:'12345', xiadanshijian:'2019-12-12 12;12:12', dingdanjine:20000, shifujine:2500, fukuanzhanghao:'12345', dingdanzhuangtai:'完成'},
          {jishoudanhao:'12345', xiadanshijian:'2019-12-12 12;12:12', dingdanjine:20000, shifujine:2500, fukuanzhanghao:'12345', dingdanzhuangtai:'完成'},
          {jishoudanhao:'12345', xiadanshijian:'2019-12-12 12;12:12', dingdanjine:20000, shifujine:2500, fukuanzhanghao:'12345', dingdanzhuangtai:'完成'},
          {jishoudanhao:'12345', xiadanshijian:'2019-12-12 12;12:12', dingdanjine:20000, shifujine:2500, fukuanzhanghao:'12345', dingdanzhuangtai:'完成'},
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
