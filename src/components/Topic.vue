<template>
  <div id="content" v-if="detail && detail.author">
    <div class="panel">
      <div class="header topic_header">
        <span class="topic_full_title">
          <span >
            <span class="put_top" v-if="detail.top">{{detail.top ? "置顶" : ""}}</span>
            <span class="put_good" v-if="detail.good && !detail.top">{{detail.good ? "精华" : ""}}</span>
          </span>    
          {{ detail.title }}
        </span>
        <div class="changes">
          <span>
            发布于 {{ moment(detail.create_at) }}
          </span>
          <span>
            作者 <a >{{ detail.author.loginname}}</a>
          </span>
          <span>
            {{ detail.visit_count }} 次浏览
          </span>
          <span>
            最后一次编辑是
          </span>
          <span> 来自 分享</span>
          <input class="span-common span-success pull-right collect_btn" type="submit" value="收藏" action="collect">
        </div>
        <div id="manage_topic">
        </div>
      </div>
      <div class="inner topic">
        <div class="topic_content">
          <div class="markdown-text" v-html="detail.content">
            {{ detail.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="header reply_header">
        <span class="col_fade">{{ detail.reply_count }} 回复</span>
      </div>

      <Comment></Comment>
    </div>
    <div class="panel">
      <div class="header reply_header">
        <span class="col_fade">添加回复</span>
      </div>
      <div class="inner reply">
          <div class="markdown_editor in_editor">
          <div class="markdown_in_editor">
            <tinymce id="d1" v-model="data" ref="tm"></tinymce>
            <div class="editor_buttons">
              <button class="span-primary submit_btn" 
                type="submit"
                @click="addComment"
              >
                回复
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import moment from 'moment'
import Vue from 'vue'
import tinymce from 'vue-tinymce-editor'
import Comment from '@/components/Comment.vue'

Vue.component('tinymce', tinymce)

export default {
  name: 'Topic',
  data() {
    return {
      mdrender: true,
      data: '',
    }
  },
  components: {
    Comment,
  },
  created() {

  },
  mounted() {
    this.$store.dispatch('getTopic', this.$route.params.id)
  },
  computed: {
    detail() {
      return this.$store.state.detail
    },
    currentTab() {
      return this.$store.state.currentTab
    },
  },
  methods: {
    moment(time) {
      moment.locale('zh-cn')
      return moment(time, 'YYYYMMDD').fromNow()
    },
    topicClickHandler(id) {
      this.$store.dispatch('getTopic', id)
      this.$router.push('/topic/' + id)
    },
    addComment() {
      this.$store.dispatch('addReply', this.data)
      this.data = ''
    }
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
    background: #fff;
    border-radius: 3px;
  }
  .panel .header {
    color: #51585c;
    border-radius: 3px 3px 0 0;
    padding: 10px;
  }
  .panel .reply_header {
    background-color: #f6f6f6;
  }
  .header .col_fade {
    color: #444;
    font-size: 14px;
    line-height: 20px;
  }
   /*
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
  }*/  

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  .topic_full_title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }
  .changes {
    font-size: 12px;
    color: #838383;
    overflow: hidden;
  }   
  .changes span:before {
    content: "•";
  }
  .changes a {
    color: #838383;
  }
  .changes a:hover {
    text-decoration: underline;
  }
  .pull-right {
    float: right;
  }
  /* .span-common {
    display: inline-block;
    float: none;
    padding: 3px 10px;
    border: none;
    margin: 0;
    transition: all .2s ease-in-out;
    cursor: pointer;
    letter-spacing: 2px;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: middle;
    background-color: #e5e5e5;
  } */
  .span-success {
    border-radius: 3px;
    background-color: #80bd01;
    padding: 3px 10px;
    border: none;
    font-size: 14px;
    transition: all .2s ease-in-out;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    cursor: pointer;
  }
  .user_avatar img,
  .user_big_avatar img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
  }
  .author_content .user_avatar {
    float: left;
  }
  a {
    color: #08c;
    text-decoration: none;
  } 
  a.dark {
    color: #666;
    text-decoration: none;
    overflow: hidden;
  }
  .reply_author {
    font-size: 12px;
    font-weight: 700;
  }
  .reply_time {
    font-size: 11px;
    padding: 0 3px;
  }
  .reply_by_author {
    color: #fff;
    background-color: #6ba44e;
    padding: 2px;
    font-size: 12px;
  }
  .cell {
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    border-top: 1px solid #f0f0f0;
  }
  .user_info {
    margin-left: 10px;
    display: inline-block;
  } 
  .user_action {
    float: right;
    margin-left: 20px;
    font-size: 15px;
  }
  .reply_content {
    padding-left: 50px;
    color: #333;
  }

  .fa {
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    color: #000;
  }
  .reply2_at_btn, .reply2_btn {
    opacity: .4;
    cursor: pointer;
  }

</style>

<style>
  .topic_content {
    margin: 0 10px;
    text-align: left;
  }
  .inner.topic {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    border-radius: 0 0 3px 3px;
  }
  strong {
    font-weight: 700;
  }
  .topic_content h2 {
    font-size: 26px;
    margin: 30px 0 15px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    font-weight: 700;
  }
  .topic_content h3 {
    font-size: 24.5px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    font-weight: 700;
  }
  .topic_content h3:first-of-type {
    margin: 0 0 15px;
  }
  .topic_content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
    margin: 1em 0
  }
  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }
  .markdown-text a {
    color: #08c;
  }
  .markdown-text a:hover {
    text-decoration: underline;
  }
  .markdown-text >:first-child{
    margin-top: 0;
  }
  .topic_content p {
    white-space: pre-wrap;
    margin: 1em 0;
  }
  ol, ul {
    padding: 0;
    margin: 0 0 10px 25px;
  }
  ul {
    list-style-type: disc;
  }
  pre.prettyprint {
    font-size: 14px;
    border-radius: 0;
    padding: 0 15px;
    border: none;
    margin: 20px -10px;
    border-width: 1px 0;
    background: #f7f7f7;
    tab-size: 4;
    line-height: 22px;
    tab-size: 4;
  } 
  pre code {
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
  }
  code, pre {
    font-family: Monaco,Menlo,Consolas,"Courier New",monospace;
    font-size: 12px;
  }
  .inner.reply {
    padding: 10px;
  }
  .mce-tinymce {
    box-shadow: none;
    border-radius: 4px;
  }
  #mceu_17 {
    opacity: .6;
  }
  .mce-top-part::before {
    content: '';
    position: absolute;
    box-shadow: none;
  }
  .mce-panel {
    border: none;
  }
  #mceu_36 {
    display: none;
  }
  .editor_buttons {
    margin-top: 10px;
  }
  .span-primary {
    width: 50px;
    height: 30px;
    border-radius: 3px;
    background-color: #08c;
    border: none;
    display: inline-block;
    float: none;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    letter-spacing: 2px;
    box-shadow: none;
    line-height: 2em;
    color: #fff
  }
</style>