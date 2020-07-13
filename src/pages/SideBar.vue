<template>
  <div id="sidebar">
    <div class="panel">
      <div class="header">
        <span class="col_fade">个人信息</span>
      </div>
      <div class="inner">
        <div class="user_card">
          <div>
            <a class="user_avatar" href="/user/lijinyanzal">
              <img src="https://avatars2.githubusercontent.com/u/46549110?v=4&amp;s=120" title="lijinyanzal">
            </a>
            <span class="user_name">
              <a class="dark" href="/user/lijinyanzal">
                lijinyanzal
              </a>
            </span>
            <div class="board clearfix">
              <div class="floor">
                <span class="big">积分: 0 </span>
              </div>
            </div>
            <div class="space clearfix"></div>
            <span class="signature">
              “这家伙很懒，什么个性签名都没有留下。”
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="inner">
        <a href="/topic/create" id="create_topic_btn">
          <span class="span-success">发布话题</span>
        </a>
      </div>
    </div>
    <div class="panel">
      <div class="header">
        <span class="col_fade">友情社区</span>
      </div>
      <div class="inner">
        <ol class="friendship-community">
          <li>
            <a href="https://ruby-china.org/" target="_blank">
              <img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png">
            </a>
          </li>
          <li>
            <a href="http://phphub.org/" target="_blank">
              <img src="//static2.cnodejs.org/public/images/phphub-logo.png">
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div class="sep10"></div>
    <div class="panel">
      <div class="header">
        <span class="col_fade">客户端二维码</span>
      </div>
      <div class="inner cnode-app-download">
        <img width="200" src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
        <br>
        <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #sidebar {
    width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
  }
  .panel {
    font-size: 13px;
    margin-bottom: 13px;
    line-height: 20px;
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
</style>