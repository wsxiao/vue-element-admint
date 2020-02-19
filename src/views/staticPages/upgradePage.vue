<!--
  @Author: DKing
  @Desc: 升级页面
  @Date: 2019-12-16
-->

<template>
  <div class="page-main">
    <img src="../../../static/staticPages/pic_系统升级.png"/>
    <p class="page-text">系统升级</p>
    <p class="page-content">我们的程序猿们正在努力升级中~</p>
  </div>
</template>

<script>
    export default {
        name: "upgrade-page",
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
    .page-main{
      height: calc(100% + 32px);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img{
        width: 300px;
      }
      .page-text{
        font-size: $fontSize24;
        color:$fontColorTitle;
        margin-bottom:10px;
        margin-top:24px;
      }
      .page-content{
        font-size: $fontSize14;
        color:$fontColorContent;
      }
    }
</style>
