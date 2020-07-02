export default {
    namespaced: true,
    state: {
        addressList:[]
      },
      mutations: {
       add(state,obj){
          state.addressList.unshift(obj)
       },
       edit(state,obj){
            const index = state.addressList.findIndex(item=>item.id == obj.id)
            Object.assign(state.addressList[index],obj)
       },
       del(state,id){
          let index =  state.addressList.findIndex(item=>item.id == id)
          state.addressList.splice(index,1)
       }
      },
      actions: {
      },
      modules: {
      }
}