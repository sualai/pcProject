import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 使用elementt ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/reset.css"
import "swiper/css/swiper.min.css"
import "./assets/font/iconfont.css"

import axios from "axios"
Vue.prototype.$axios = axios 
// axios.defaults.baseURL = 'http://127.0.0.1:300/';

Vue.use(ElementUI);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
