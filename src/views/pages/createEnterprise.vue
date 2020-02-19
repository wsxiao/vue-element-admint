<!--
  @Author: DKing
  @Desc: 企业开户,
  @Date: 2020-02-18
-->

<template>
  <div class="page-main">
    <div class="search-header">
      <div class="block-form-item">
          <span class="small-label">企业名称：</span>
          <el-input
            placeholder="企业名称"
            v-model="paramCreated.qiyemingcheng"
            clearable>
          </el-input>

          <span class="small-label">联系人：</span>
          <el-input
            placeholder="企业联系人"
            v-model="paramCreated.qiyelianxiren"
            clearable>
          </el-input>

          <span class="small-label">联系方式：</span>
          <el-input
            placeholder="企业联系人联系方式"
            v-model="paramCreated.lianxifangshi"
            clearable>
          </el-input>
        </div>
      <div class="block-form-item">
        <span class="small-label">电子合同：</span>
        <el-upload
          :with-credentials=true
          class="upload-demo"
          :action=uploadUrl
          :on-success="xhrEDocSuccess"
        >
          <span class="btnLargeLineColor">选取文件</span>
        </el-upload>
        <el-tooltip class="item" effect="dark" :content="eDocFileName">
        <span class="file-name">{{eDocFileName}}</span>
        </el-tooltip>
        <span class="btnFullColor" @click="xhrCreated()">确定</span>
      </div>
    </div>
    <div class="search-footer"></div>

    <div class="list-body">
      <el-table
        :empty-text=consts.tableEmptyText
        :data="resDataList"
        :max-height=consts.tableMaxHeight
      >
        <el-table-column
          fixed
          prop="xuhao"
          label="企业名称">
        </el-table-column>
        <el-table-column
          prop="pici"
          label="联系人">
        </el-table-column>
        <el-table-column
          prop="kahao"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="mianzhi"
          label="营业执照">
          <template slot-scope="scope">
            <span class="btnNoBorderBlue">查看</span>
            <el-upload
              :with-credentials=true
              class="upload-demo"
              :action=uploadUrl
              :on-success="xhrEDocSuccess"
            >
              <span class="btnNoBorderBlue" style="vertical-align: middle;">更新</span>
            </el-upload>
          </template>
        </el-table-column>
        <el-table-column
          prop="yanshengma"
          label="审核状态">
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
    name: "create-enterprise",
    components: {},

    computed: {},

    data() {
      return {
        consts: CONSTS,   // 常量
        pagination: PAGINATION,
        uploadUrl:'',
        paramQuery: {
          kahao:'',
          pageNum: 1,
          pageSize: PAGINATION.pageSize,
        },
        resData:{},
        resDataList:[],
        paramCreated:{
          qiyemingcheng:'',
          qiyelianxiren:'',
          lianxifangshi:'',
          yingyezhizhao:'',
        },
        eDocFileName:'',
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

      xhrEDocSuccess(){
        // console.log(this.paramCreated)
      },

      xhrCreated(){
        console.log(this.paramCreated)
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
