<!--
  @Author: DKing
  @Desc: 积分转赠记录,
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
          prop="zhuanzengshijian"
          label="转赠时间">
        </el-table-column>
        <el-table-column
          prop="qiyezhanghao"
          label="企业账号">
        </el-table-column>
        <el-table-column
          prop="zhuanzengjifenshu"
          label="转赠积分数">
        </el-table-column>
        <el-table-column
          prop="jieshoujifenzhanghao"
          label="接收积分账号">
        </el-table-column>
        <el-table-column
          prop="huodongpici"
          label="活动批次">
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
    name: "give-record",
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
          {zhuanzengshijian:'2019-12-12 12:12:12', qiyezhanghao:'DK1234567', zhuanzengjifenshu:'200', jieshoujifenzhanghao:'DK0987654', huodongpici:'H1234567'},
          {zhuanzengshijian:'2019-12-12 12:12:12', qiyezhanghao:'DK1234567', zhuanzengjifenshu:'200', jieshoujifenzhanghao:'DK0987654', huodongpici:'H1234567'},
          {zhuanzengshijian:'2019-12-12 12:12:12', qiyezhanghao:'DK1234567', zhuanzengjifenshu:'200', jieshoujifenzhanghao:'DK0987654', huodongpici:'H1234567'},
          {zhuanzengshijian:'2019-12-12 12:12:12', qiyezhanghao:'DK1234567', zhuanzengjifenshu:'200', jieshoujifenzhanghao:'DK0987654', huodongpici:'H1234567'},
          {zhuanzengshijian:'2019-12-12 12:12:12', qiyezhanghao:'DK1234567', zhuanzengjifenshu:'200', jieshoujifenzhanghao:'DK0987654', huodongpici:'H1234567'},
          {zhuanzengshijian:'2019-12-12 12:12:12', qiyezhanghao:'DK1234567', zhuanzengjifenshu:'200', jieshoujifenzhanghao:'DK0987654', huodongpici:'H1234567'},
          {zhuanzengshijian:'2019-12-12 12:12:12', qiyezhanghao:'DK1234567', zhuanzengjifenshu:'200', jieshoujifenzhanghao:'DK0987654', huodongpici:'H1234567'},
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
