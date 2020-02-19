<!--
  @Author: DKing
  @Desc: 营销短信,
  @Date: 2020-02-19
-->

<template>
  <div class="page-main">
    <div class="padding32">
      <el-upload
        :with-credentials=true
        class="upload-demo"
        :action=uploadUrl
        :on-success="xhrEDocSuccess"
      >
        <span class="btnLargeLineColor">导入电话号码</span>
      </el-upload>
      <!--<span class="btnLargeFullColor">导入电话号码</span>-->
      <span class="btnLargeFullColor marginLeft32">下载号码模板</span>
      <span class="text-tip marginLeft32">已导入 0 个要发送短信的号码</span>
    </div>
    <div class="search-footer"></div>
    <el-row class="padding32">
      <el-form :model="paramSendSMS" :rules="formRules" ref="paramSendSMS">
        <el-col :span="12">
          <el-form-item  prop="duanxinneirong">
            <el-input
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 4}"
              maxlength="70"
              show-word-limit
              placeholder="请输入 70 个字符以内的短信内容"
              v-model="paramSendSMS.duanxinneirong"
            >
            </el-input>
          </el-form-item>
          <el-form-item  prop="dianhuahaoma">
            <el-input
              type="textarea"
              placeholder="输入单次要发送的电话号码，如果输入则导入的数据将会失效"
              v-model="paramSendSMS.dianhuahaoma"
            >
            </el-input>
          </el-form-item>
          <span class="btnFullColor" @click="sendSMS()">发送</span>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>

  export default {
    name: "send-sms",
    components: {},

    computed: {},

    data() {
      return {
        uploadUrl:'',
        paramSendSMS:{
          duanxinneirong:'',
          dianhuahaoma:'',
        },
        formRules:{
          duanxinneirong:[
            {required: true, message: '请输入自定义五位批次号', trigger: 'blur'},
          ],
          dianhuahaoma:[
            {required: true, message: '请输入自定义五位批次号', trigger: 'blur'},
          ]
        }

      }
    },

    created() {
    },

    methods: {
      xhrEDocSuccess(){
        console.log('上传图片成功')
      },

      sendSMS(){
        this.$refs['paramSendSMS'].validate((valid) => {
          if (valid) {

          }
        })
      },

    }

  }
</script>

<style>
  .el-form-item__content{
    width:100%;
  }
</style>
<style lang="scss" scoped>
  @import "../../styles/variable";

</style>
