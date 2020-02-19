<!--
  @Author: DKing
  @Desc: 采购入库,
  @Date: 2020-01-01
-->

<template>
  <div class="page-main page-main-padding">
    <span class="btnLargeFullColor" @click="importStock">导入采购的商品</span>
    <span class="btnLargeFullColor" @click="downloadExcel()">下载导入模板</span>

    <el-card class="box-card" v-if="importVisible">
      <div slot="header" class="card-header">
        <el-form :model="paramInStock" :rules="rulesInStock" ref="paramInStock" class="instock-form">
          <el-form-item label="自定义批次号" prop="picihao">
            <el-input v-model="paramInStock.picihao" maxLength="5" placeholder="输入自定义5位批次号"></el-input>
          </el-form-item>
        </el-form>

        <span class="between-text marginLeft32">共 220 个</span>

        <div class="btn-box marginLeft32">
          <span class="btnFullColor" @click="confirmSubmit()">确认</span>
          <span class="btnLineColor" @click="cancelSubmit()">取消</span>
        </div>

      </div>

      <!--前五个-->
      <el-table
        :empty-text=consts.tableEmptyText
        :data="resRolesList"
        :max-height=consts.tableMaxHeight
      >
        <el-table-column
          fixed
          prop="id"
          label="卡号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="面值">
        </el-table-column>
        <el-table-column
          prop="name"
          label="有效期">
        </el-table-column>
      </el-table>

      <span class="el-icon-more"></span>

      <!--后五个-->
      <el-table
        header-cell-class-name="afterTable"
        :empty-text=consts.tableEmptyText
        :data="resRolesList2"
        :max-height=consts.tableMaxHeight
      >
        <el-table-column
          fixed
          prop="id"
          label="">
        </el-table-column>
        <el-table-column
          prop="name"
          label="">
        </el-table-column>
        <el-table-column
          prop="name"
          label="">
        </el-table-column>
      </el-table>

    </el-card>
  </div>
</template>

<script>
  import {CONSTS, PAGINATION} from "../../service/businessConsts";
  import {MessageBox} from 'element-ui';
  import {vdtEqualLength} from "../../utils/validataFun";

  export default {
    name: "in-stock",
    components: {},

    computed: {},

    data() {
      return {
        consts: CONSTS,   // 常量
        // pagination: PAGINATION,

        resRoles: {
          totalCount: 10
        },
        resRolesList: [],     // 前5条
        resRolesList2:[],     // 后5条
        paramQuery: {
          pageNum: 1,
          pageSize: PAGINATION.pageSize,
        },
        paramInStock:{
          picihao:'',
        },                    // 入库参数
        rulesInStock:{
          picihao:[
            {required: true, message: '请输入自定义五位批次号', trigger: 'blur'},
            vdtEqualLength(5)
          ]
        },                    // 入库校验
        importVisible: false, // 导入信息回显
      }
    },

    created() {
      this.xhrQueryList()
    },

    methods: {
      // 导入商品
      importStock(){
        this.importVisible = true;

      },

      // 下载模板
      downloadExcel(){

      },

      // 确认提交
      confirmSubmit(){
        this.$refs['paramInStock'].validate((valid) => {
          if (valid) {
            MessageBox('入库成功！', '提示', {
              confirmButtonText: '确定',
              confirmButtonClass: 'btnFullColor'
            })
          }
        })
      },

      // 取消提交
      cancelSubmit(){

      },

      xhrQueryList() {
        let list = [
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

        this.resRolesList = list.splice(0,5);
        this.resRolesList2 = list
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

<style>
  .el-table__header tr th.afterTable{
    background-color: #fff;
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

  .box-card {
    margin-top: 18px;
    .card-header{
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
</style>
