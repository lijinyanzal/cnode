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
              <h3>关于</h3>
              <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
              <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
              <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
              <p>社区目前由 <a href="http://cnodejs.org/user/alsotang" target="_blank">@alsotang</a> 在维护，有问题请联系：<a href="https://github.com/alsotang" target="_blank">https://github.com/alsotang</a></p>
              <p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs" target="_blank">http://weibo.com/cnodejs</a></p>
              <h3>移动客户端</h3>
              <p>客户端由 <a href="https://cnodejs.org/user/soliury" target="_blank">@soliury</a> 开发维护。</p>
              <p>源码地址： <a href="https://github.com/soliury/noder-react-native" target="_blank">https://github.com/soliury/noder-react-native</a> 。</p>
              <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
              <p>另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design" target="_blank">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>
            </div>
            <div class="about-friend-links">
              <h3>友情链接</h3>
              <a href="https://www.sxl.cn" target="_blank">
                <img src="//static.cnodejs.org/FvtwcYi5K6qoFAIsUeIgTKGeB6lQ">
              </a>
              <a href="https://www.huoban.com/" target="_blank">
                <img src="//static.cnodejs.org/Ftmw28ed0I_rir7YYz3c_jVPkCGx">
              </a>
              <a href="http://100offer.com/" target="_blank">
                <img src="//static.cnodejs.org/FmU1Ik57z6wrl9JDTNdcYBTDetFq">
              </a>
              <a href="https://www.teambition.com/" target="_blank">
                <img src="//static.cnodejs.org/FkMR_SqpCp4Q0eDIaWrQlALiXdmP">
              </a>
              <a href="http://segmentfault.com/" target="_blank">
                <img src="//static2.cnodejs.org/public/images/temp/sf.png">
              </a>
            </div>
            <div class="">
              <h3>LOGO</h3>
              <p>
                白底： <a href="/public/images/cnodejs.svg" target="_blank">/public/images/cnodejs.svg</a>
              </p>
              <p>
                黑底： <a href="/public/images/cnodejs_light.svg" target="_blank">/public/images/cnodejs_light.svg</a>
              </p>
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
      title: '关于'
    }
  },
  components: {
    BreadCrumb,
  }

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