<template>
  <div class="comment" v-if="detail.replies">
    <div v-for="(reply, index) in detail.replies" :key="reply.id" >
      <div class="cell reply_area reply_item" 
        reply_id="reply.id"     
        reply_to_id="detail.id" 
        id="reply.id">
      <div class="author_content" v-if="reply.author">
        <a :href='`/user/${reply.author.loginname}`' class="user_avatar">
          <img :src="reply.author.avatar_url" >
        </a> 
        <div class="user_info">
          <a class="dark reply_author" :href='`/user/${reply.author.loginname}`'>
            {{ reply.author.loginname }}
          </a>
          <a class="reply_time" :href='`#${reply.id}`'>{{ index + 1 }}楼•{{ moment(reply.create_at) }}</a>
          <span class="reply_by_author" v-if="detail.author.loginname === reply.author.loginname">作者</span>
        </div>
        <div class="user_action">
          <span>
            <i class="fa up_btn
              fa-thumbs-o-up
              invisible" title="喜欢"></i>
            <span class="up-count">
            </span>
          </span>
          <span>
            <i class="fa fa-reply reply2_btn" title="回复"></i>
          </span>
        </div>
      </div>
      <div class="user_action">
        <span>
          <i class="fa up_btn fa-thumbs-up uped" title="喜欢"></i>
          <span class="up-count">
            1
          </span>
        </span>
        <span>
          <i class="fa fa-reply reply2_btn" title="回复"></i>
        </span>
      </div>
      <div class="reply_content from-hyj1991">
        <div class="markdown-text">
          <p v-html="reply.content"></p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Comment',
  computed: {
    detail() {
      return this.$store.state.detail
    },
    
  },
  methods: {
    moment(time) {
      moment.locale('zh-cn')
      return moment(time, 'YYYYMMDD').fromNow()
    },
  }
}
</script>

<style scoped>
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
  p .markdown-text  p {
    white-space: pre-wrap;
    margin: 1em 0;
  }
</style>