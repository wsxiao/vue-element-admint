<!--
  @Author: DKing
  @Desc: 出库记录,
  @Date: 2020-02-18
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
          prop="xuhao"
          label="出库时间">
        </el-table-column>
        <el-table-column
          prop="pici"
          label="出库商品">
        </el-table-column>
        <el-table-column
          prop="kahao"
          label="三方订单号">
        </el-table-column>
        <el-table-column
          prop="mianzhi"
          label="三方订单金额">
        </el-table-column>
        <el-table-column
          prop="yanshengma"
          label="出库数量">
        </el-table-column>
        <el-table-column
          prop="yewuzhuangtai"
          label="出库区间">
        </el-table-column>
        <el-table-column
          prop="yewuzhuangtai"
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

  export default {
    name: "out-stock-record",
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
        console.log('请求参数：', this.paramQuery);
        let list = [
          {xuhao: '0', pici: '前端0', kahao:'12345634567', mianzhi:'50', yanshengma:'GH567890232', yewuzhuangtai:'10'},
          {xuhao: '1', pici: '前端1', kahao:'12345634567', mianzhi:'50', yanshengma:'GH567890232', yewuzhuangtai:'10'},
          {xuhao: '2', pici: '前端2', kahao:'12345634567', mianzhi:'50', yanshengma:'GH567890232', yewuzhuangtai:'10'},
          {xuhao: '3', pici: '前端3', kahao:'12345634567', mianzhi:'50', yanshengma:'GH567890232', yewuzhuangtai:'10'},
          {xuhao: '4', pici: '前端4', kahao:'12345634567', mianzhi:'50', yanshengma:'GH567890232', yewuzhuangtai:'10'},
          {xuhao: '5', pici: '前端5', kahao:'12345634567', mianzhi:'50', yanshengma:'GH567890232', yewuzhuangtai:'10'},
          {xuhao: '6', pici: '前端6', kahao:'12345634567', mianzhi:'50', yanshengma:'GH567890232', yewuzhuangtai:'10'},
          {xuhao: '7', pici: '前端7', kahao:'12345634567', mianzhi:'50', yanshengma:'GH567890232', yewuzhuangtai:'10'},
          {xuhao: '8', pici: '前端8', kahao:'12345634567', mianzhi:'50', yanshengma:'GH567890232', yewuzhuangtai:'10'},
          {xuhao: '9', pici: '前端9', kahao:'12345634567', mianzhi:'50', yanshengma:'GH567890232', yewuzhuangtai:'10'},
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
