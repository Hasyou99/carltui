<template>
    <div class="c-home">
      <mainHeader></mainHeader>
      <div class="c-container">
        <sideNav class="c-nav"></sideNav>
        <div class="c-view">
            <router-view ></router-view>
        </div>
      </div>
    </div>

</template>

<script>
  import mainHeader from '../components/header.vue'
  import mainFooter from '../components/footer.vue'
  import sideNav from '../components/side-nav.vue'

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: {
      mainHeader,
      sideNav,
      mainFooter,
    },
  }
</script>

<style lang="scss">

html{
  height: 100%;
}
body{
  overflow: hidden;
  height: 100%;
}
#app{
  height: 100%;
}
  .c-home{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
  }
  .c-container {
    margin: 10px auto;
    height: calc(100% - 80px);
    width: 96%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    display: flex;
    overflow: hidden;
    .c-nav {
      width: 210px;
    }
    .c-view {
      flex: 1;
      padding: 32px 48px 48px;
      box-sizing: border-box;
      overflow: auto;
    }
  }

  .c-container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
