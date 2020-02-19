<!--
  @Author: DKing
  @Desc: 元素标准,
  @Date: 2019-12-16
-->

<template>
    <div class="page-main">
      <h1>元素标准表</h1>
      <p>
        <span class="btnFullColor">常规</span>
        <span class="btnFullColorDisabled">禁用</span>
      </p>
      <p>
        <span class="btnLineFontColor">常规</span>
        <span class="btnLineFontColorDisabled">禁用</span>
      </p>
      <p>
        <span class="btnLineColor">常规</span>
        <span class="btnLineColorDisabled">禁用</span>
      </p>
      <p>
        <span class="btnNoBorderBlue">常规</span>
        <span class="btnNoBorderBlueDisabled">禁用</span>
      </p>
      <p>
        <span class="btnNoBorderRed">常规</span>
        <span class="btnNoBorderRedDisabled">禁用</span>
      </p>
      <p>
        <span class="btnNoBorderGreen">常规</span>
        <span class="btnNoBorderGreenDisabled">禁用</span>
      </p>
      <p>
        <span class="btnLargeFullColor">长按钮</span>
        <span class="btnLargeLineColor">批次提交</span>
        <span class="btnLargeLineColorIcon"><img src="../../../static/icons/ic_btn_download.png"/>模板下载</span>
        <span class="btnLargeLineColorIcon"><img src="../../../static/icons/ic_btn_add.png"/>导入数据</span>
      </p>

    </div>
</template>

<script>
    export default {
        name: "dom-standard",
        components: {},

        computed: {},

        data() {
            return {}
        },

        created() {

        },

        mounted() {

        },

        methods: {
            // xhr -- [http方法请加 xhr  前缀]
            xhrGoodsList() {
                // 这是ajax的函数，do things
            }
        }

    }
</script>
<style lang="scss" scoped>
    @import "../../styles/variable";

</style>
