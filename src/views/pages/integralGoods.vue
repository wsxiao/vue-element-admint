<!--
  @Author: DKing
  @Desc: 积分商品,
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
          prop="shangpinbianhao"
          label="商品编号">
        </el-table-column>
        <el-table-column
          prop="shangpinmingcheng"
          label="商品名称">
        </el-table-column>
        <el-table-column
          prop="mianzhi"
          label="面值">
        </el-table-column>
        <el-table-column
          prop="kucun"
          label="库存">
        </el-table-column>
        <el-table-column
          prop="picishu"
          label="批次数">
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
    name: "integral-goods",
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
          {shangpinbianhao:'DH1234567', shangpinmingcheng:'久久鸭', mianzhi:'2000', kucun:20, picishu:100},
          {shangpinbianhao:'DH1234567', shangpinmingcheng:'久久鸭', mianzhi:'2000', kucun:20, picishu:100},
          {shangpinbianhao:'DH1234567', shangpinmingcheng:'久久鸭', mianzhi:'2000', kucun:20, picishu:100},
          {shangpinbianhao:'DH1234567', shangpinmingcheng:'久久鸭', mianzhi:'2000', kucun:20, picishu:100},
          {shangpinbianhao:'DH1234567', shangpinmingcheng:'久久鸭', mianzhi:'2000', kucun:20, picishu:100},
          {shangpinbianhao:'DH1234567', shangpinmingcheng:'久久鸭', mianzhi:'2000', kucun:20, picishu:100},
          {shangpinbianhao:'DH1234567', shangpinmingcheng:'久久鸭', mianzhi:'2000', kucun:20, picishu:100},
          {shangpinbianhao:'DH1234567', shangpinmingcheng:'久久鸭', mianzhi:'2000', kucun:20, picishu:100},
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
