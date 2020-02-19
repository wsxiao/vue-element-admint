<!--
  @Author: DKing
  @Desc: 商品列表,
  @Date: 2020-01-01
-->

<template>
  <div class="page-main">
    <!--查询-->
    <div class="search-header">
      <div class="block-form-item padding32">
        <el-input placeholder="输入卡号/预售码/寄售码"  v-model="paramQuery.kahao" clearable></el-input>
        <span class="btnFullColor" @click="xhrQueryList()">查询</span>
      </div>
    </div>
    <div class="search-footer"></div>

    <!--列表-->
    <div class="list-body">
      <span class="btnLargeFullColor" @click="upperGood(null)">未上架商品上架</span>
      <el-table
        :empty-text=consts.tableEmptyText
        :data="resRolesList"
        :max-height=consts.tableMaxHeight
      >
        <el-table-column
          fixed
          prop="xuhao"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="pici"
          label="批次">
        </el-table-column>
        <el-table-column
          prop="kahao"
          label="卡号">
        </el-table-column>
        <el-table-column
          prop="mianzhi"
          label="面值">
        </el-table-column>
        <el-table-column
          prop="yanshengma"
          label="衍生码">
        </el-table-column>
        <el-table-column
          prop="yewuzhuangtai"
          label="业务状态">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <div>
              <span class="btnNoBorderBlue"  @click="outStock(scope.row)">出库</span>
              <span class="btnNoBorderBlue"  @click="upperGood(scope.row.kahao)">上架</span>
            </div>
          </template>

        </el-table-column>
      </el-table>
    </div>

    <!--出库单号-->
    <el-dialog title="出库订单号" :visible.sync="outStockVisible">
      <el-form :model="paramOutStock" :rules="rulesOutStock"  ref="paramOutStock">
        <el-form-item label="输入要出库的订单号：" prop="chukudingdanhao">
          <el-input v-model="paramOutStock.chukudingdanhao" placeholder="输入要出库的订单号" clearable>
          </el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outStockVisible = false">取 消</el-button>
        <el-button type="primary" @click="xhrConfirmOutStock()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {CONSTS, PAGINATION} from "../../service/businessConsts";
  import {vdtEqualLength} from "../../utils/validataFun";
  import {MessageBox} from 'element-ui';
  import {BOX_AGAIN_CONFIRM} from "../../service/messageBox";

  export default {
    name: "goods-list",
    components: {},

    computed: {},

    data() {
      return {
        consts: CONSTS,   // 常量
        // pagination: PAGINATION,

        outStockVisible: false,       // 出库订单填写是否展示
        // 出库参数
        paramOutStock:{
          kahao:'',
          chukudingdanhao:''
        },
        // 校验出库参数
        rulesOutStock:{
          chukudingdanhao:[
            {required: true, message: '请输入要出库的订单号', trigger: 'blur'},
          ]
        },
        paramUpperGood:{
          kahao:''
        },

        resRoles: {
          totalCount: 10
        },
        resRolesList: [],     // 前5条
        resRolesList2:[],     // 后5条
        paramQuery: {
          kahao:'',
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

        this.resRolesList = list.splice(0,5);
        this.resRolesList2 = list
      },

      // 出库
      outStock(obj){
        this.paramOutStock.kahao = obj.kahao;
        this.outStockVisible = true;
      },

      // xhr -- 确认出库
      xhrConfirmOutStock(){
        this.$refs['paramOutStock'].validate((valid) => {
          if (valid) {
            MessageBox('出库成功！', '提示', {
              confirmButtonText: '确定',
              confirmButtonClass: 'btnFullColor'
            })
            this.outStockVisible = false;
          }
        })
      },

      // 商品上架
      upperGood(kahao){
        this.paramUpperGood.kahao = kahao;
        BOX_AGAIN_CONFIRM(this, '确认上架商品吗？', () => {
          this.$message({
            type: 'success',
            message: '上架成功!'
          });
        });

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
