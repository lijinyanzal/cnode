import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/reset.css'
import router from '@/router/index.js'
import store from '@/store/index.js'

Vue.config.productionTip = false

const requireAll = requireContext => requireContext.keys().map(requireContext);
 

// import all svg
const req = require.context('@/assets/svg', true, /\.svg$/);
requireAll(req);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
