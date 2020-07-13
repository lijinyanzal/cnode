<template>
  <div>
    <TabBar></TabBar>
    <div class="topics">
      <div class="inner no-padding">
        <ul v-if="filterList">
          <li class="cell" v-for="item in filterList" :key="item.id">
            <a class="user_avatar pull-left" :href="userHref(item.author.loginname)">
              <img :src="item.author.avatar_url">
            </a>
            <span class="reply_count pull-left">
              <span class="count_of_replies" title="回复数">
                {{ item.reply_count }} 
              </span>
              <span class="count_seperator">/</span>
              <span class="count_of_visits" title="点击数">
                {{ item.visit_count }}
              </span>
            </span>
            <span class="topic_title_wrapper">
              <span class="put_top" v-if="item.top">{{item.top ? "置顶" : ""}}</span>
              <span class="put_good" v-if="currentTab === 'good' && !item.top">{{item.good ? "精华" : ""}}</span>
              <span class="topiclist-tab" v-if="!item.top && !item.good">{{ tabList[item.tab] ? tabList[item.tab].title : '' }}</span>
              <a class="topic_title" 
                :href="topicHref(item.id)" 
                title="item.title"
                @click.prevent="topicClickHandler(item.id)"
              >
                {{ item.title }}
              </a>
            </span>
            <a class="last_time pull-right" >
              <img class="user_small_avatar" :src="item.author.avatar_url">
              <span class="last_active_time">{{ moment(item.last_reply_at) }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Pagination></Pagination>
  </div>
</template>

<script>
import moment from 'moment'
import TabBar from '@/components/TabBar.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'Topics',
  data() {
    return {
      topics: [],
      mdrender: true,
    }
  },
  components: {
    TabBar,
    Pagination,
  },
  mounted() {
    if (!this.list.length) {
      this.$store.dispatch('getList')
    }
  },
  computed: {
    list () {
      return this.$store.state.data
    },
    tabList() {
      return this.$store.state.tabList
    },
    currentTab() {
      return this.$store.state.currentTab
    },
    filterList() {
      return this.$store.getters.filterList
    },
    detail() {
      return this.$store.state.detail
    },
    limit() {
      return this.$store.state.limit
    }
  },
  methods: {
    moment(time) {
      moment.locale('zh-cn')
      return moment(time, 'YYYYMMDD').fromNow()
    },
    topicHref(item) {
      return '/topic/' + item
    },
    userHref(item) {
      return '/user/' + item
    },

    topicClickHandler(id) {
      this.$store.dispatch('getTopic', id)
      this.$router.push('/topic/' + id)
    },
    // lastReplyHref(item) {
    //   let lastReply = this.lastReply(item)
    //   return '/topic/' + item.id + '#' + lastReply.id
    // },
    // lastReplyAvatar(item) {
    //   if (item) {
    //     let reply = 
    //     if (!reply) return 
    //     return reply[reply.length - 1].author.avatar_url
    //   }
      
    // },
    // addReplyToList() {
    //   this.list.forEach(item => {
    //     this.$nextTick(() => {
    //       this.$store.dispatch('getTopic', item.id)
    //     })
    //     this.$set(item, 'replies', this.$store.state.detail[item.id].replies)
    //   })
    // },

  },


}
</script>

<style scoped>

  .topics {
    text-align: left;
    margin-right: 305px;
  } 
  .cell {
    font-size: 14px;
    border-top: 1px solid #f0f0f0;
    padding-right: 10px;
    padding: 10px 0 10px 10px;
    background: #fff;
    position: relative;
    overflow: hidden;
    line-height: 2em;
  }
  .cell:nth-child(1) {
    border-top: none;
  }
  a {
    color: #778087;
 
    cursor: pointer;
  }
  .topic_title {
    max-width: 70%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    color: #333;
    vertical-align: middle;
  }
  #sidebar .topic_title {
    max-width: 270px;
    font-size: 14px;
  }
  /* .topic_title:visited {
    color: #888;
  } */
  .topic_title_wrapper {
    vertical-align: middle;
  }
  .pull-right {
    float: right;
  }
  .pull-left {
    float: left;
    vertical-align: center;
  }
  img {
    max-width: 100%;
    vertical-align: center;
  }
  .user_avatar img,
  .user_big_avatar {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }
  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
  }
  .user_small_avatar {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin-right: 0.5em;
  }
  .last_active_time {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
  }
  .last_time {
    font-size: 11px;
    display: inline-block;
    margin-left: 20px;
    margin-right: 10px;
  }
  .reply_count {
    width: 70px;
    display: inline-block;
    text-align: center;
    /* white-space: nowrap; */
  }
  .count_of_visits {
    font-size: 10px;
    color: #b4b4b4;
  }
  .count_seperator {
    margin: 0 -3px;
    font-size: 10px;
  }
  .count_of_replies {
    color: #9e78c0;
  }
  


  #sidebar {
    width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
    margin-top: -40px;
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
  .inner ul {
    padding: 0;
    margin: 0;
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
  .panel .inner, .panel .inner li {
    line-height: 2em;
  }
  a.topic_title {
    line-height: 30px;
  }
  .top_score {
    color: gray;
    padding: 2px;
    margin-right: 10px;
  }
</style>