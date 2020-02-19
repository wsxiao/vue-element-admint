<!--
  @Author: DKing
  @Desc: 平台用户列表,
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
          prop="yonghubianhao"
          label="用户编号">
        </el-table-column>
        <el-table-column
          prop="yonghuzhanghao"
          label="用户账号">
        </el-table-column>
        <el-table-column
          prop="yue"
          label="余额">
        </el-table-column>
        <el-table-column
          prop="yonghuzhuangtai"
          label="用户状态">
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
    name: "platform-user-list",
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
          {yonghubianhao:'001', yonghuzhanghao:'DK123456', yue:2000, yonghuzhuangtai:'正常'},
          {yonghubianhao:'001', yonghuzhanghao:'DK123456', yue:2000, yonghuzhuangtai:'正常'},
          {yonghubianhao:'001', yonghuzhanghao:'DK123456', yue:2000, yonghuzhuangtai:'正常'},
          {yonghubianhao:'001', yonghuzhanghao:'DK123456', yue:2000, yonghuzhuangtai:'正常'},
          {yonghubianhao:'001', yonghuzhanghao:'DK123456', yue:2000, yonghuzhuangtai:'正常'},
          {yonghubianhao:'001', yonghuzhanghao:'DK123456', yue:2000, yonghuzhuangtai:'正常'},
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
