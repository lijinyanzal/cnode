<template>
  <div>
    <div id="content">
      <div class="panel">
        <div class="header">
          <ul class="breadcrumb">
            <li><a href="/">主页</a><span class="divider">/</span></li>
            <li class="new">发布话题</li>
          </ul>
        </div>
        <div class="inner post">
          <fieldset>
            <span class="tab-selector">选择版块：</span>
            <select name="tab" id="tab-value" v-model="selected">
              <option value="">请选择</option>
              <option value="share">分享</option>
              <option value="ask">问答</option>
              <option value="job">招聘</option>
              <option value="dev">客户端测试</option>
            </select>
            <br>
            <span id="topic_create_warn"></span>
            <textarea autofocus="" class="span9" id="title" name="title" rows="1"       placeholder="标题字数 10 字以上"
            v-model="title"
            >
            </textarea>
            <div class="markdown_editor in_editor">
              <div class="markdown_in_editor">
                <tinymce id="d1" v-model="data" ref="tm"></tinymce>
                <div class="editor_buttons">
                  <button class="span-primary submit_btn" 
                    type="submit"
                    @click="submitHandler"
                  >
                    提交
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import tinymce from 'vue-tinymce-editor'
  import Vue from 'vue'

  Vue.component('tinymce', tinymce)
  export default {
    data() {
      return {
        data: '',
        title: '',
        selected: '',
      }
    },
    mounted() {
      this.$store.dispatch('getList')
    },
    computed: {

    },
    methods: {
      submitHandler() {
        this.$store.dispatch('createPost', { selected: this.selected, title: this.title, data: this.data })
        console.log(this.$store.state.data[this.$store.state.data.length - 1])
        this.selected = ''
        this.title = ''
        this.data = ''
      },
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

  select {
    display: inline-block;
    width: 220px;
    border: 1px solid #ccc;
    height: 30px;
    line-height: 30px;
    padding: 4px 6px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #555;
    vertical-align: middle;
    border-radius: 4px;
    outline: none;
  }
  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }
  textarea#title {
    display: inline-block;
    width: 98%;
    height: 20px;
    border: 0;
    padding: 4px 6px;
    margin-bottom: 1em;
    box-shadow: 0 0 2px rgba(60,60,60,.5);
    outline: none;
    font-size: 14px;
    word-break: break-word;
    line-height: 20px;
    color: #555;
    vertical-align: middle;
    border-radius: 4px;
  }
</style>
<style>
  #d1_ifr {
    height: 400px!important;
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
    display: block;
    border-top: 1px solid #959694;
    padding-top: 30px;
    opacity: .4;
  }
  #mceu_39 {
    display: none;
  }
  .editor_buttons {
    margin-top: 10px;
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
</style>