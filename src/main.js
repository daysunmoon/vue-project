import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.less'
import router from './router.js'
import http from '@/utils/http'
import store from './store/index.js'

Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
