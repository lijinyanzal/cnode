<template>
  <div id="wrapper">
    <div id="content">
      <div class="panel">
        <div class="header">
          <ul class="breadcrumb">
            <li><a href="/">主页</a><span class="divider">/</span></li>
            <li class="active">新消息</li>
          </ul>
        </div>
        <div class="inner">
          <p>无消息</p>
        </div>
      </div>
      <div class="panel">
        <div class="header">
          <span class="col_fade">过往信息</span>
        </div>
        <div class="inner">
          <p>无消息</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    
  }
</script>

<style scoped>
  .panel {
    font-size: 13px;
    margin-bottom: 13px;
    line-height: 2em;
    text-align: left;
  }
  .panel .header {
    color: #51585c;
    background: #f6f6f6;
    border-radius: 3px 3px 0 0;
    padding: 10px;
  }
  .header .col_fade {
    color: #444;
  }
  .panel .inner {
    background: #fff;
    padding: 10px
  }
  .panel .inner a {
    color: #778087;
  }
  .board {
    margin-top: 10px;
    width: 80%;
  }
  .signature {
    font-style: italic;
  }
  .user_card .user_avatar img {
    width: 48px;
    height: 48px;
  }
  .span-success {
    border-radius: 3px;
    background-color: #80bd01;
    border: none;
    display: inline-block;
    float: none;
    padding: 3px 10px;
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    transition: all .2s ease-in-out;
    letter-spacing: 2px;
    box-shadow: none;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    cursor: pointer;
  }
  .friendship-community img {
    width: 150px;
  } 
  #content {
    padding: 0;
    margin-right: 305px;
  }
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
  .inner.topic {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
  }
  .topic_content {
    margin: 0 10px;
    text-align: left;
  }
  .topic_content h2,
  .topic_content h3 {
    line-height: 40px;
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
    font-weight: 700;
  }
  .topic_content h3:first-of-type {
    margin: 0 0 15px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 24.5px;
  }
  .topic_content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
    margin: 1em 0
   }
   .panel .markdown-text a {
    color: #08c;
  }
  .about-friend-links img {
    width: 250px;
    height: 60px;
  }
</style>