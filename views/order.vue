<template>
    <div>
        <div class="main_head clearfix">
            <h2 class="title fl">我的订单</h2>
            <p class="fl tip">请谨防钓鱼链接或诈骗电话，了解更多></p>
        </div>
        <div class="router_box">
            <span :class="{'active':$route.name=='全部订单'}" @click="$router.push('/my/order/all')" >全部订单</span>
                <el-divider direction="vertical" ></el-divider>
                <span :class="{'active':$route.name=='待支付'}"  @click="$router.push('/my/order/unpay')" >待支付</span>
                <el-divider direction="vertical"></el-divider>
                <span :class="{'active':$route.name=='待收货'}"  @click="$router.push('/my/order/complete')">待收货</span>
                <el-divider direction="vertical"></el-divider>
                <span  :class="{'active':$route.name=='已完成'}" @click="$router.push('/my/order/end')">已完成</span>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        created(){
            this.$store.state.footer = true 
        }
    }
</script>

<style lang="scss" scoped>
.main_head{
    .tip{
        margin-top: 15px;
        color: #555;
        margin-left: 10px;
        font-size: 12px;
    }
}
.router_box{
    font-size: 14px;
    margin-top: 20px;
    color: #888;
    .active{
        color: #ff6700;
    }
    span{
        cursor: pointer;
    }
}
</style>