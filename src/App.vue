<template>
  <div id="app">
    <Header></Header>
    <div id="main">
      <SideBar></SideBar>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/pages/Footer.vue'
import SideBar from '@/pages/SideBar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SideBar
  }
}
</script>

<style>
  #app {
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333;
    margin-top: 60px;
    margin: 0;
    background-color: #e1e1e1;
    font-size: 14px;
    word-break: break-word;
  }
  #main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
    position: relative;
    line-height: 20px;
  }

</style>
