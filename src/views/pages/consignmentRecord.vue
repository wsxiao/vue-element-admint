<!--
  @Author: DKing
  @Desc: 寄售记录,
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
          prop="jishoushijian"
          label="寄售时间">
        </el-table-column>
        <el-table-column
          prop="jishouzhanghao"
          label="寄售账号">
        </el-table-column>
        <el-table-column
          prop="jishoushangpin"
          label="寄售商品">
        </el-table-column>
        <el-table-column
          prop="shangpinshuliang"
          label="商品数量">
        </el-table-column>
        <el-table-column
          prop="jishoujiage"
          label="寄售价格">
        </el-table-column>
        <el-table-column
          prop="pingtaifuwufei"
          label="平台服务费">
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
    name: "consignment-record",
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
          {jishoudanhao:'123456', jishoushijian:'2019-12-12 12:12:12', jishoushangpin:'久久鸭', jishouzhanghao:'DF12345', shangpinshuliang:100, jishoujiage:200, pingtaifuwufei:200},
          {jishoudanhao:'123456', jishoushijian:'2019-12-12 12:12:12', jishoushangpin:'久久鸭', jishouzhanghao:'DF12345', shangpinshuliang:100, jishoujiage:200, pingtaifuwufei:200},
          {jishoudanhao:'123456', jishoushijian:'2019-12-12 12:12:12', jishoushangpin:'久久鸭', jishouzhanghao:'DF12345', shangpinshuliang:100, jishoujiage:200, pingtaifuwufei:200},
          {jishoudanhao:'123456', jishoushijian:'2019-12-12 12:12:12', jishoushangpin:'久久鸭', jishouzhanghao:'DF12345', shangpinshuliang:100, jishoujiage:200, pingtaifuwufei:200},
          {jishoudanhao:'123456', jishoushijian:'2019-12-12 12:12:12', jishoushangpin:'久久鸭', jishouzhanghao:'DF12345', shangpinshuliang:100, jishoujiage:200, pingtaifuwufei:200},
          {jishoudanhao:'123456', jishoushijian:'2019-12-12 12:12:12', jishoushangpin:'久久鸭', jishouzhanghao:'DF12345', shangpinshuliang:100, jishoujiage:200, pingtaifuwufei:200},
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
