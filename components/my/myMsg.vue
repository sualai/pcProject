<template>
    <div>
        <el-row :gutter="20"  >
            <el-col :span="12"  class="clearfix">
                <div class="img fl">
                    <img src="../../assets/images/logoin.jpg"  alt="">
                </div>
                
                <div class="fl text">
                    <p class="name">{{$store.state.username}}</p>
                    <p class="edit">修改个人信息></p>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="text msg_text">
                    <p>账户安全：<span>普通</span></p>
                    <p>绑定手机：未绑定</p>
                    <p>绑定邮箱：未绑定</p>
                </div>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row :gutter="20"  >
            <el-col :span="12"  class="clearfix">
                <div class="img fl">
                    <img src="../../assets/images/pay.png"  alt="">
                </div>
                
                <div class="fl text">
                    <p class="name">待支付订单：<span>{{ unpaLlength }}</span></p>
                    <p class="look" @click="$router.push('/my/order/unpay')">查看待支付订单></p>
                </div>
            </el-col>
             <el-col :span="12"  class="clearfix">
                <div class="img fl">
                    <img src="../../assets/images/goods.png"  alt="">
                </div>
                
                <div class="fl text">
                    <p class="name">待收货的订单：<span> {{ completeLength }} </span></p>
                    <p class="look" @click="$router.push('/my/order/complete')">查看待收货订单></p>
                </div>
            </el-col>
            <el-col :span="12"  class="clearfix">
                <div class="img fl">
                    <img src="../../assets/images/msg.png"  alt="">
                </div>
                
                <div class="fl text">
                    <p class="name">待评价的商品数：<span>{{ endLength }}</span></p>
                    <p class="look" @click="$router.push('/my/order/end')" >查看待支付订单></p>
                </div>
            </el-col>
             <el-col :span="12"  class="clearfix">
                <div class="img fl">
                    <img src="../../assets/images/like.png"  alt="">
                </div>
                
                <div class="fl text">
                    <p class="name">喜欢的商品：<span>{{ $store.state.like.likeList.length }}</span></p>
                    <p class="look" @click="$router.push('/my/like')">查看喜欢的></p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                orderList:[],
                unpaLlength:0,
                completeLength:0,
                endLength:0
            }
        },
        created(){
            Object.assign(this.orderList,this.$store.state.order.orderList)
            this.orderList.forEach(item=>{
                if(item.orderType == 0) {
                    this.unpaLlength += 1
                } else if(item.orderType == 1) {
                    this.completeLength += 1
                } else if (item.orderType == 2) {
                    this.endLength += 1
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
.el-col{
    padding: 30px;
    .text{
        padding: 50px 0 0 30px;
        
        color:#444;
        .edit{
            font-size: 12px;
            color: #ff6700;
            margin-top: 20px;
        }
        .name{
            font-size: 18px;
            span{
                color: #ff6700;
            }
            
        }
        .look{
            cursor: pointer;
        }
        .look:hover{
            color: #ff6700;
        }
        
    }
    .msg_text{
        p{
            margin: 10px 0;
            span{
                color: #ff6700;
            }
        }
    }
}
    .img{
        width: 160px;
        height: 160px;
        border-radius:160px ;
        border:1px solid  #f0f0f0;
        overflow: hidden;
        img{
            border-radius: 50%;
            transform: scale(.89);
        }
    }
</style>