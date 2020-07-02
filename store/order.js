export default {
    namespaced: true,
    state: {
        orderList:[],
        ordering:{
          // id:'',         //订单id 唯一标识
          // orderId:"" ,   // 订单编号
          // orderGoods:[], //订单商品
          // orderType:0,   // 订单状态 
          // address:{} ,   // 收货地址信息
        },
        type:["待支付","待收货","已完成"]
      },
      mutations: {
       add(state,obj){
          state.orderList.push(obj)
       },
       changeType(state,id){

          const index = state.orderList.findIndex(item=>item.id==id)
          
          state.orderList[index].orderType += 1
       }
      },
      actions: {
      },
      modules: {
      }
}