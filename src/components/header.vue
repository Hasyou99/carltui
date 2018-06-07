<style lang="scss">
  .page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    // position: fixed;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container{
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      // justify-content: space-between;
      &>span{
        color: #1d37cc;
        margin-left: 10px;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
</style>
<template>
  <div class="page-header" style=" 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'">
    <div class="header-container">
      <img src="../assets/img/banner.png" width="100">
      <span>CARLT.UI</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>
