import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home.vue'
import Topics from '@/components/Topics.vue'
import Topic from '@/components/Topic.vue'
import GetStart from '@/pages/GetStart.vue'
import API from '@/pages/API.vue'
import About from '@/pages/About.vue'
import Messages from '@/pages/Messages.vue'
import CreatePost from '@/pages/CreatePost.vue'
import Register from '@/pages/Register.vue'
import Login from '@/pages/Login.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [ 
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/topics',
      children: [
        {
          path: '/topics',
          component: Topics,
        },
        {
          name: 'CreatePost',
          path: 'topic/create',
          component: CreatePost,
        },
        { 
          name: 'Topic',
          path: 'topic/:id',
          component: Topic,
        },
        {
          name: 'Register',
          path: '/signup',
          component: Register,
        },
        {
          name: 'Login',
          path: '/login',
          component: Login,
        }
      ]
    },
    {
      path: '/search',
      beforeEnter() {
        window.location = "http://google.com/search?q=site:cnodejs.org"
      }
    },
    {
      path: '/api',
      name: 'API',
      component: API
    }, 
    {
      name: 'About',
      path: '/about',
      component: About
    },
  

    {
      name: 'GetStart',
      path: '/getStart',
      component: GetStart
    },
    {
      name: 'Messages',
      path: '/messages',
      component: Messages
    },
    ]

  })
export default router