<template>
  <div id="wrapper">
    <div id="content">
      <div class="panel">
        <div class="header">
          <BreadCrumb :title="title"></BreadCrumb>
        </div>
        <div class="inner topic">
          <div class="topic_content">
            <div class="markdown-text">
              <h2>Node.js 入门</h2>
              <p>《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
              <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" target="_blank">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
              <p>《<strong>Node.js 包教不包会</strong>》</p>
              <p><a href="https://github.com/alsotang/node-lessons" target="_blank">https://github.com/alsotang/node-lessons</a></p>
              <p>《<strong>ECMAScript 6入门</strong>》</p>
              <p><a href="http://es6.ruanyifeng.com/" target="_blank">http://es6.ruanyifeng.com/</a></p>
              <p>《<strong>七天学会NodeJS</strong>》</p>
              <p><a href="https://github.com/nqdeng/7-days-nodejs" target="_blank">https://github.com/nqdeng/7-days-nodejs</a></p>
              <h2>Node.js 资源</h2>
              <p>《<strong>前端资源教程</strong>》</p>
              <p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e" target="_blank">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
              <p>《<strong>国内的 npm 镜像源</strong>》</p>
              <p><a href="http://cnpmjs.org/" target="_blank">http://cnpmjs.org/</a></p>
              <p>《<strong>node weekly</strong>》</p>
              <p><a href="http://nodeweekly.com/issues" target="_blank">http://nodeweekly.com/issues</a></p>
              <p>《<strong>node123-<em>node.js中文资料导航</em></strong>》</p>
              <p><a href="https://github.com/youyudehexie/node123" target="_blank">https://github.com/youyudehexie/node123</a></p>
              <p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
              <p><a href="https://github.com/sindresorhus/awesome-nodejs" target="_blank">https://github.com/sindresorhus/awesome-nodejs</a></p>
              <p>《<strong>Node.js Books</strong>》</p>
              <p><a href="https://github.com/pana/node-books" target="_blank">https://github.com/pana/node-books</a></p>
              <h2>Node.js 名人</h2>
              <p>《<strong>名人堂</strong>》</p>
              <p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82" target="_blank">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
              <h2>Node.js 服务器</h2>
              <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a></p>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
  

</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue'

export default {
  data() {
    return {
      title: '新手入门'
    }
  },
  components: {
    BreadCrumb,
  }

}
</script>

<style scoped>
  #content {
    padding: 0;
    margin-right: 305px;
  }
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
</style>