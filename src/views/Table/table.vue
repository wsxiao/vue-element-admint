<!--
  @Author: DKing
  @Desc: 表格,
  @Date: 2019-12-16
-->

<template>
  <div class="page-main">
    <div class="list-body">
      <span class="btnLargeFullColor" @click="addRole()">新增角色</span>

      <el-table
        :empty-text=consts.tableEmptyText
        :data="resRolesList"
        :max-height=consts.tableMaxHeight
      >
        <el-table-column
          fixed
          prop="id"
          label="id">
        </el-table-column>
        <el-table-column
          prop="name"
          label="技术工种">
        </el-table-column>
        <el-table-column
          prop="name"
          label="技术工种">
        </el-table-column>
        <el-table-column
          prop="name"
          label="技术工种">
        </el-table-column>
        <el-table-column
          prop="name"
          label="技术工种">
        </el-table-column>
        <el-table-column
          prop="name"
          label="技术工种">
        </el-table-column>
        <el-table-column
          prop="name"
          label="技术工种">
        </el-table-column>
        <el-table-column
          prop="name"
          label="技术工种">
        </el-table-column>
        <el-table-column
          prop="name"
          label="技术工种">
        </el-table-column>
        <el-table-column
          prop="name"
          label="技术工种">
        </el-table-column>
        <el-table-column
          prop="name"
          label="技术工种">
        </el-table-column>
        <el-table-column
          prop="name"
          label="技术工种">
        </el-table-column>
        <el-table-column
          width="230"
          label="角色描述">
          <template slot-scope="scope">
            <el-popover
              placement="top-start"
              width="230"
              trigger="hover"
              :content="scope.row.desc">
              <span slot="reference">{{scope.row.desc}}</span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <span class="btnNoBorderRed" @click="xhrDelete(scope.$index)">
              删除
            </span>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        :background="pagination.background"
        @current-change="handleCurrentChange"
        :page-size="pagination.pageSize"
        :current-page="paramQuery.pageNum"
        :layout="pagination.layout"
        :total="resRoles.totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {CONSTS, PAGINATION} from "../../service/businessConsts";

  export default {
    roleType: "table-list",
    components: {},

    computed: {},

    data() {
      return {
        consts: CONSTS,   // 常量
        pagination: PAGINATION,

        resRoles: {
          totalCount: 10
        },
        resRolesList: [],
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
      xhrQueryList() {
        this.resRolesList = [
          {id: '0', name: '前端0', desc: '北京我看个买了我居然你看你后面是睡觉吧呕吐看给你表面上看撕碎举动饿哦那你his大怒饿哦也难怪呢'},
          {id: '1', name: '前端1', desc: '北京我看个买了我居然你看你后面是睡觉吧呕吐看给你表面上看撕碎举动饿哦那你his大怒饿哦也难怪呢'},
          {id: '2', name: '前端2', desc: '北京我看个买了我居然你看你后面是睡觉吧呕吐看给你表面上看撕碎举动饿哦那你his大怒饿哦也难怪呢'},
          {id: '3', name: '前端3', desc: '北京我看个买了我居然你看你后面是睡觉吧呕吐看给你表面上看撕碎举动饿哦那你his大怒饿哦也难怪呢'},
          {id: '4', name: '前端4', desc: '北京我看个买了我居然你看你后面是睡觉吧呕吐看给你表面上看撕碎举动饿哦那你his大怒饿哦也难怪呢'},
          {id: '5', name: '前端5', desc: '北京我看个买了我居然你看你后面是睡觉吧呕吐看给你表面上看撕碎举动饿哦那你his大怒饿哦也难怪呢'},
          {id: '6', name: '前端6', desc: '北京我看个买了我居然你看你后面是睡觉吧呕吐看给你表面上看撕碎举动饿哦那你his大怒饿哦也难怪呢'},
          {id: '7', name: '前端7', desc: '北京我看个买了我居然你看你后面是睡觉吧呕吐看给你表面上看撕碎举动饿哦那你his大怒饿哦也难怪呢'},
          {id: '8', name: '前端8', desc: '北京我看个买了我居然你看你后面是睡觉吧呕吐看给你表面上看撕碎举动饿哦那你his大怒饿哦也难怪呢'},
          {id: '9', name: '前端9', desc: '北京我看个买了我居然你看你后面是睡觉吧呕吐看给你表面上看撕碎举动饿哦那你his大怒饿哦也难怪呢'},
        ]
      },

      // 切换页数
      handleCurrentChange(val) {
        this.paramQuery.pageNum = val;
        this.xhrQueryList()
      },

      xhrDelete(index){
        this.resRolesList.splice(index, 1)
      }
    }

  }
</script>
<style lang="scss" scoped>
  @import "../../styles/variable";

  .btnLargeFullColor {
    margin-bottom: 16px;
  }

</style>
