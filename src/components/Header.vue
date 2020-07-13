<template>
  <div class="navbar">
    <div class="navbar-inner">
      <a href="/" class="brand">
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="Node">
      </a>
      <form id="search-form" class="navbar-search" action="/search">
        <input type="text" class="search-query"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
          :class = "{ active: hover }"
        >
      </form>
      <ul class="nav pull-right">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/messages">未读消息</router-link></li>
        <li><router-link to="/getstart">新手入门</router-link></li>
        <li><router-link to="/api">API</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
        <li><router-link to="/signup">注册</router-link></li>
        <li><router-link to="/signin">登录</router-link></li>
        <!-- <li><a href="/setting">设置</a></li>
        <li><a href="/signout">退出</a></li> -->
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.navbar {
  margin-bottom: 0;
  z-index: 9;
  width: 100%;
  position: relative;
  background: #444;
  font-size: 13px;
  overflow: visible;
}
.navbar-inner {
  min-height: 40px;
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 0 auto;
  padding: 5px;
}
.brand {
  float: left;
  width: 120px;
  height: 34px;
  padding: 3px 20px;
  margin-left: -20px;
  line-height: 34px;
  color: #ccc;
  font-weight: 700;
  text-shadow: none;
}
.navbar-search {
  float: left;
  position: relative;
  padding: 4px 14px;
}
.search-query {
  background: url('https://static2.cnodejs.org/public/images/search.e53b380a.hashed.png') 4px 4px no-repeat #888;
  padding: 3px 5px 3px 22px;
  margin-top: 4px;
  margin-bottom: 0;
  margin-left: -15px;
  border: 0;
  color: #666;
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  border-radius: 15px;
  width: 206px;
  height: 20px;
}
input:focus {
  outline: none;
  background: url('https://static2.cnodejs.org/public/images/search.e53b380a.hashed.png') 4px 4px no-repeat #fff;
}
.active {
  background: url('https://static2.cnodejs.org/public/images/search.e53b380a.hashed.png') 4px 4px no-repeat #fff;
}

.pull-right {
  float: right;
}
.nav > li {
  float: left;
  line-height: 20px;
  vertical-align: middle;
}
.nav {
  position: relative;
  display: inline-block;
  /* left: 0; */
  margin: 10px 0 0 0;
}
.nav a {
  color: #ccc;
  padding: 10px 15px;
  text-shadow: none;
}
.nav a:hover {
  color: #fff;
}
</style>