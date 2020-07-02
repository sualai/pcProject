<template>
    <div>
        <top-nav></top-nav>
        <div class="order_box">
            <div class="content">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }" class="home">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
                </el-breadcrumb>
                <el-container>
                <el-aside width="200px">
                    <ul >
                        <li v-for="(item,index) in left"  :class="{'active':selectId==index}"  :key="index" @click="selectUrl(index)">{{ item.title }} </li>
                    </ul>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
                </el-container>
            </div>
        </div>
    </div>
</template>

<script>
import topNav from "../components/public/topNav.vue"
    export default {
        data(){
            return {
                orderList:[],
                selectId:3,
                currrent:'个人中心',
                left:[
                    {
                        title:"我的订单",
                        url:'/my/order/all',
                    },
                    {
                        title:"评价晒单",
                        url:'/my/order/end',
                    },
                    {
                        title:"个人中心",
                        url:'/my/myMsg',
                    },
                    {
                        title:"喜欢的商品",
                        url:'/my/like',
                    },
                    {
                        title:"收货地址",
                        url:'/my/address',
                    },
                    // {
                    //     title:"个人信息",
                    //     url:'/my/setMsg',
                    // },
                    // {
                    //     title:"修改密码",
                    //     url:'/my/setLoginMsg',
                    // },
                    {
                        title:"退出登录",

                    }
                ],
            }
        },
        components:{
            topNav
        },
        methods:{
            
            selectUrl(index){
                if(index!=5){
                    this.$router.push(this.left[index].url)
                    this.currrent = this.left.title
                } else {
                    this.$store.state.username = ""
                    this.$router.push("/login")
                }
                
            }
        },
        watch:{
            "$route"(newname){
                this.left.forEach((item,index)=>{
                    if(item.url == newname.path) {
                        this.selectId = index
                    }
                })
            }
        },
        created(){
            if(this.$store.state.username == "") {
                this.$router.push("/login")
            }

            this.$store.state.showAside = true
            this.$store.state.iscategory = true
            this.$store.state.showTop = true
            this.$store.state.showAside = false
            this.$store.state.footer = true 
            this.orderList = JSON.parse(JSON.stringify(this.$store.state.order.orderList))
            
        }
    }
</script>

<style lang="scss" scoped>
    .order_box{
        background-color: #f5f5f5;
        overflow: hidden;
        padding-bottom: 50px;
        .content{
            width: 1226px;
            margin: 0 auto;
            .el-breadcrumb{
                font-size: 12px;
                padding: 15px 0;
            }
            .el-aside{
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
            .el-main{
                background-color: #fff;
                margin-left:10px ;
               
              
            }
        }
    }
    .home .el-breadcrumb__inner.is-link{
        color: #333;
    }
</style>