import Vue from 'vue'
import VueRouter from 'vue-router'

import home from "./routers/home"
import category from "./routers/category"
import cart from "./routers/cart"
import details from "./routers/details"
import order from "./routers/order"
import my from './routers/my'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    home,           // 首页
    cart,           // 购物车
    category,       // 分类
    details,        // 详情
    order,          // 确认订单
    ...my,          //个人中心
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
