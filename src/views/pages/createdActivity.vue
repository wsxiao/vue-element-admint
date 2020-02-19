<!--
  @Author: DKing
  @Desc: 创建活动,
  @Date: 2020-01-01
-->

<template>
  <div class="page-main">
    <!--基本信息-->
    <div class="info-block">
      <p class="info-title"><span class="title">填写信息</span></p>
      <div class="info-body">
        <el-form :model="paramCreated" ref="paramCreated" :rules="rulesCreated">

          <el-row>
            <!--选择企业 + 批次选择 + 联系人 + 联系方式-->
            <el-col class="info-item" :span="8">
              <el-form-item prop="qiyeid">
                <span class="small-label">选择企业：</span>
                <el-select v-model="paramCreated.qiyeid" clearable placeholder="请选择">
                  <el-option
                    v-for="item in resCompanyList"
                    :key="item.qiyeid"
                    :label="item.qiyeName"
                    :value="item.qiyeid">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item prop="piciid">
                <span class="small-label">选择批次：</span>
                <el-select v-model="paramCreated.piciid" clearable placeholder="请选择">
                  <el-option
                    v-for="item in resBatchList"
                    :key="item.piciid"
                    :label="item.piciName"
                    :value="item.piciid">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item prop="lianxiren">
                <span class="small-label">联系人：</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="paramCreated.lianxiren"
                  clearable>
                </el-input>
              </el-form-item>

              <el-form-item prop="lianxifangshi">
                <span class="small-label">联系方式：</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="paramCreated.lianxifangshi"
                  clearable>
                </el-input>
              </el-form-item>
            </el-col>

            <!--总入款 + 总出款 + 票成本 + 实际折损-->
            <el-col class="info-item" :span="8">
              <el-form-item prop="zongrukuan">
                <span class="small-label">总入款：</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="paramCreated.zongrukuan"
                  clearable>
                </el-input>
              </el-form-item>

              <el-form-item prop="zongchukuan">
                <span class="small-label">总出款：</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="paramCreated.zongchukuan"
                  clearable>
                </el-input>
              </el-form-item>

              <el-form-item prop="piaochengben">
                <span class="small-label">票成本：</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="paramCreated.piaochengben"
                  clearable>
                </el-input>
              </el-form-item>

              <el-form-item prop="shijizhesun">
                <span class="small-label">实际折损：</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="paramCreated.shijizhesun"
                  clearable>
                </el-input>
              </el-form-item>
            </el-col>

            <!--寄售比例 + 营销规模 + 营销短信-->
            <el-col class="info-item" :span="8">
              <el-form-item prop="jishoubili" class="add-pro">
                <span class="small-label">寄售比例：</span>
                <span class="el-icon-plus plus1" @click="changePro(1)"></span>
                <el-input
                  disabled
                  placeholder="请输入内容"
                  v-model="paramCreated.jishoubili"
                  clearable>
                </el-input>
                <span class="el-icon-plus plus2" @click="changePro(2)"></span>
              </el-form-item>

              <el-form-item prop="yingxiaoguimo">
                <span class="small-label">营销规模：</span>
                <el-input
                  placeholder="请输入内容"
                  v-model="paramCreated.yingxiaoguimo"
                  clearable>
                </el-input>
              </el-form-item>

              <el-form-item prop="yingxiaoduanxin">
                <span class="small-label">营销短信：</span>
                <el-input
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="paramCreated.yingxiaoduanxin"
                  clearable>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>

    <!--导入数据-->
    <div class="info-block">
      <p class="info-title"><span class="title">导入数据</span></p>
      <div class="info-body">
        <p class='margin-bottom-box'>
          <span class="btnLargeFullColor" @click="importStock">导入数据</span>
          <span class="btnLargeFullColor" @click="downloadExcel()">下载数据模板</span>
        </p>
        <div class="right marginBottom10">
          总计：117人，总出款: ￥20000.00元（大写人民币字符）

          <span class="btnFullColor" @click="xhrStartActivity">开始</span>
        </div>
        <el-table
          :empty-text=consts.tableEmptyText
          :data="resPreviewList"
          :max-height=consts.tableMaxHeight
        >
          <el-table-column
            fixed
            prop="shoujihao"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="xingming"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="yinhang"
            label="银行">
          </el-table-column>
          <el-table-column
            prop="kaihuhang"
            label="开户行">
          </el-table-column>
          <el-table-column
            prop="jine"
            label="金额">
          </el-table-column>
          <el-table-column
            prop="shenfenzhenghao"
            label="身份证号">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

</template>

<script>

  import {CONSTS} from "../../service/businessConsts";

  export default {
    name: "create-activity",
    components: {
    },

    computed: {},

    data() {
      return {
        consts: CONSTS,   // 常量

        // 新建活动参数
        paramCreated:{
          qiyeid:'',
          lianxiren:'',
          lianxifangshi:'',
          piciid:'',
          zongrukuan:'',
          zongchukuan:'',
          piaochengben:'',
          shijizhesun:'',
          jishoubili:'5 : 5',
          yingxiaoguimo:'',
          yingxiaoduanxin:'',
        },
        // 新建活动规则
        rulesCreated:{
          qiyeid:[
            {required: true, message: ' ', trigger: 'change'},
          ],
          lianxiren:[
            {required: true, message: '亲近你', trigger: 'blur'},
          ],
          lianxifangshi:[
            {required: true, message: ' ', trigger: 'blur'},
          ],
          piciid:[
            {required: true, message: ' ', trigger: 'change'},
          ],
          zongrukuan:[
            {required: true, message: ' ', trigger: 'blur'},
          ],
          zongchukuan:[
            {required: true, message: ' ', trigger: 'blur'},
          ],
          piaochengben:[
            {required: true, message: ' ', trigger: 'blur'},
          ],
          shijizhesun:[
            {required: true, message: ' ', trigger: 'blur'},
          ],
          yingxiaoguimo:[
            {required: true, message: ' ', trigger: 'blur'},
          ],
          yingxiaoduanxin:[
            {required: true, message: ' ', trigger: 'blur'},
          ],
        },
        resCompanyList:[],    // 企业列表
        resBatchList:[],      // 批次列表
        proMin:5,             // 寄售比例1
        proMax:5,             // 寄售比例2
        resPreviewList:[],    // 回显预览列表

      }
    },

    created() {
      this.xhrCompanyList()
      this.xhrBatchList()
      this.xhrPreviewList()
    },

    mounted() {

    },

    methods: {
      // xhr -- 创建企业
      xhrCompanyList(){
        this.resCompanyList = [
          {qiyeid:'123', qiyeName:'DKing'},
          {qiyeid:'456', qiyeName:'DKing2'},
          {qiyeid:'789', qiyeName:'DKing3'},
          {qiyeid:'856', qiyeName:'DKing4'},
        ]
      },

      // xhr -- 批次列表
      xhrBatchList(){
        this.resBatchList = [
          {piciid:'A1234', piciName:'批次1'},
          {piciid:'A567', piciName:'批次2'},
          {piciid:'A0987', piciName:'批次3'},
          {piciid:'A6789', piciName:'批次4'},
        ]
      },

      // 更改占比
      changePro(type){
        if(type === 1 && this.proMin < 9){
          this.proMin ++;
          this.proMax = 10 - this.proMin
        } else if(type === 2 && this.proMax < 9){
          this.proMax ++;
          this.proMin = 10 - this.proMax
        }

        this.paramCreated.jishoubili = this.proMin + ' : ' + this.proMax;
      },

      // xhr -- 回显
      xhrPreviewList(){
        this.resPreviewList = [
          {shoujihao:'13522703250', xingming:'DKing0', yinhang:'招商银行', kaihuhang:'北京立水桥分行', jine:2000, shenfenzhenghao:'131123199999999999'},
          {shoujihao:'13522703251', xingming:'DKing1', yinhang:'招商银行', kaihuhang:'北京立水桥分行', jine:2000, shenfenzhenghao:'131123199999999999'},
          {shoujihao:'13522703252', xingming:'DKing2', yinhang:'招商银行', kaihuhang:'北京立水桥分行', jine:2000, shenfenzhenghao:'131123199999999999'},
          {shoujihao:'13522703253', xingming:'DKing3', yinhang:'招商银行', kaihuhang:'北京立水桥分行', jine:2000, shenfenzhenghao:'131123199999999999'},
          {shoujihao:'13522703254', xingming:'DKing4', yinhang:'招商银行', kaihuhang:'北京立水桥分行', jine:2000, shenfenzhenghao:'131123199999999999'},
          {shoujihao:'13522703255', xingming:'DKing5', yinhang:'招商银行', kaihuhang:'北京立水桥分行', jine:2000, shenfenzhenghao:'131123199999999999'},
          {shoujihao:'13522703256', xingming:'DKing6', yinhang:'招商银行', kaihuhang:'北京立水桥分行', jine:2000, shenfenzhenghao:'131123199999999999'},
          {shoujihao:'13522703257', xingming:'DKing7', yinhang:'招商银行', kaihuhang:'北京立水桥分行', jine:2000, shenfenzhenghao:'131123199999999999'},
        ]
      },

      // 下载模板
      downloadExcel(){

      },

      // 开始活动
      xhrStartActivity(){
        console.log('开始活动')
      },


      // 导入数据
      importStock(){

      },
    }

  }
</script>
<style>
  .el-textarea.el-input--suffix{
    width:256px;
  }
  .info-block .info-body .add-pro .el-input{
    width:150px;
  }
  .add-pro .el-input--suffix .el-input__inner{
    padding:0 40px;
    text-align: center;
  }
</style>

<style lang="scss" scoped>
  @import "../../styles/variable";

  .small-label {
    margin: 0;
  }

  .add-pro{
    position: relative;
    .el-icon-plus{
      border:1px solid #efefef;
      background-color: #efefef;
      border-radius: 4px;
      height: 30px;
      line-height: 30px;
      width:32px;
      text-align: center;
      font-size: 18px;
      position: absolute;
      z-index: 100;
      top:4px;
      cursor: pointer;
    }
    .plus1{
      left:77px;
    }
    .plus2{
      left:193px;
    }

  }

</style>
