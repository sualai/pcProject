<template>
    <div>
        <ul >
            <li v-for="(item,index) in left" :key="index">{{ item }} </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                left:[
                    {
                        title:"我的订单",
                        url:'/order/all'
                    },
                    {
                        title:"评价晒单",
                        url:'/order/end'
                    },
                    {
                        title:"个人中心",
                        url:'/order/my'
                    },
                    "喜欢的商品","收货地址","个人信息","修改密码","退出登录"]
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul{
        background-color: #fff;
        li{
            padding: 20px;
            width: 160px;
            height: 20px;
            cursor: pointer;
        }
        .active{
            color: #ff6700;
        }
    }
</style>






                     