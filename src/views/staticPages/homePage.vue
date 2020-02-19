<!--
  @Author: DKing
  @Desc: 首页
  @Date: 2019-12-16
-->
<template>
  <div class="page-main" id="homePage">

    <img class="img-title" src="../../../static/staticPages/pic_home_title.png"/>
    <p class="home-text">欢 迎 登 录 后 台 管 理 系 统</p>
    <img src="../../../static/staticPages/pic_home_welcome.png"/></div>
</template>

<script>
export default {
  name: "index",
  components: {

  },

  data(){
    return {

    }
  },

  computed: {

  },

  created() {

  },

  mounted(){

  },

  methods: {

  }

}
</script>
<style>

</style>
<style lang="scss" scoped>
  @import "../../styles/variable";
  #homePage{
    padding-top:160px;
    @include align-center;
    .img-title{
      width:400px;
      margin-bottom:24px;
    }
    .home-text{
      font-size: 24px;
      color: #272727;
      letter-spacing:20px;
      margin-bottom:72px;
    }
  }
</style>
