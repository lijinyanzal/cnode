<template>
  <div>
    <ul class="breadcrumb">
      <li><a href="/">主页</a><span class="divider">/</span></li>
      <li class="new">{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['title']

}
</script>

<style scoped>
  .breadcrumb {
    padding: 0;
    margin: 0;
    border: none;
    background: 0 0;
    border-radius: 4px;
    text-align: left;
  }
  .breadcrumb > li {
    display: inline-block;
    list-style: none;
    line-height: 20px;
  }
  .breadcrumb a {
    color: #80bd01;
  }
  .breadcrumb>li>.divider {
    padding: 0 5px;
    color: #ccc;
  } 
  .breadcrumb>.new {
    color: #999;
  }
</style>