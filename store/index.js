import Vue from 'vue'
import Vuex from 'vuex'
import cart from "./cart"
import order from "./order"
import address from "./address"
import like from "./like"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowTop:false, // 回顶部 
    showAside:true, // 侧边栏
    showTop:true,  // 顶部导航
    iscategory:false, // 分类页头部
    footer:true,    // 底部
    username:'',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,   //购物车
    order,  // 订单
    address,//地址
    like,   // 收藏
  }
})
