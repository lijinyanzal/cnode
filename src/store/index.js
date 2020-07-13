import Vue from 'vue'
import Vuex from 'vuex'
import { create } from 'axios'
Vue.use(Vuex)

const BASE_URL = 'https://cnodejs.org/api/v1'
const axios = create({
  baseURL: BASE_URL,
})
const store = new Vuex.Store({
  state: {
    data: [],
    detail: {},
    currentTab: 'all',
    tabList: {
      'all': {
        title: '全部',
        focus: true,
      },
      'good': {
        title: '精华',
        focus: false,
      },
      'share': {
        title: '分享',
        focus: false,
      },
      'ask': {
        title: '问答',
        focus: false,
      },
      'job': {
        title: '招聘',
        focus: false,
      }
    },
    limit: 10,
    nowPage: 1,
  },
  getters: {
    filterList(state) {
      if (state.currentTab === 'all') {
        return state.data
      } else {
        if (state.currentTab === 'good') {
          return state.data.filter(item => item.good === true)
        } else {
          return state.data.filter(item => item.tab === state.currentTab)
        }
      }
    }
  },
  mutations: {
    init(state, data) {
      state.data = data
    },
    getDetail(state, detail) {
      state.detail = detail
    },
    setCurrentTab(state, current) {
      state.currentTab = current
    },
    setTabList(state, current) {
      let tabs = state.tabList
      Object.values(tabs).forEach(item => item.focus = false)
      tabs[current].focus = true
      state.tabList = tabs
    },
    addReply(state, data) {
      state.detail.replies.push({
        id: Date.now(),
        content: data,
        create_at: Date.now()
      })
    },
    createPost(state, { selected, title, data }) {
      state.data.push({
        id: Date.now(),
        author_id: Date.now() + 'lijinyanzal',
        tab: selected,
        content: data,
        title: title,
        last_reply_at: '',
        good: false,
        top: false,
        reply_count: 0,
        visit_count: 0,
        create_at: new Date().toISOString(),
        author: {
          loginname: 'lijinyanzal',
          avatar_url: 'https://avatars2.githubusercontent.com/u/46549110?v=4&s=120'
        }
      })
    }
    // pageFilterList(state, page) {
    //   let limit = state.limit
    //   let start = (page - 1) * limit
    //   this.filterList = this.filterList.slice(start, start + limit)
    // }

  },
  actions: {
    async getList({commit}) {
      await axios.get(`/topics?limit=${this.limit}&page=${this.nowPage}`)
        .then(res =>  commit('init', res.data.data))
        .catch(err => console.log(err))
    },
    async getTopic({commit}, id) {
      await axios.get('/topic/' + id)
        .then(res => {
          commit('getDetail',res.data.data)
        })
        .catch(err => console.log(err))
    },
    addReply({commit}, data) {
      commit('addReply', data)
    },
    createPost({commit}, { selected, title, data }) {
      commit('createPost', { selected, title, data })
    }

  }
})

export default store