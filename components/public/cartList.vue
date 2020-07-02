<template>
    <div>
        <ul class="recomment_flex_box">
            <li v-for="(item,index) in list" :key="index" @click="$router.push('/details')">
                <div class="pic_box">
                    <img :src="item.img" alt="">
                </div>
                <p class="title">{{item.title}}</p>
                <p class="price">{{item.newPrice}}元</p>
                <p class="pj">2677人好评</p>
                <div class="btn_box">加入购物车</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list: [
                    {
                        img:require("../../assets/images/component_right1.webp"),
                        title:'Redmi红米电视70英寸 ',
                        desc :"70英寸震撼巨屏，4K画质，细腻如真",
                        newPrice:'2999',
                        oldPrice:'3799'
                    },
                    {
                        img:require("../../assets/images/list_21.webp"),
                        title:'Redmi红米电视70英寸 ',
                        desc :"70英寸震撼巨屏，4K画质，细腻如真",
                        newPrice:'2999',
                        oldPrice:'3799'
                    },
                    {
                        img:require("../../assets/images/list_22.webp"),
                        title:'Redmi红米电视70英寸 ',
                        desc :"70英寸震撼巨屏，4K画质，细腻如真",
                        newPrice:'2999',
                        oldPrice:'3799'
                    },
                    {
                        img:require("../../assets/images/list_23.webp"),
                        title:'Redmi红米电视70英寸 ',
                        desc :"70英寸震撼巨屏，4K画质，细腻如真",
                        newPrice:'2999',
                        oldPrice:'3799'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.recomment_flex_box{
    display: flex;
    width: 1226px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content:space-between;
    padding-bottom:30px ;
    li{
        width: 234px;
        position: relative;
        height: 300px;
        background-color: #fff;
        text-align: center;
        padding-top: 20px;
        box-sizing: border-box;
        font-size: 14px;
        overflow: hidden;
        &:hover{
            transition:  all 1s linear 0s;
            .btn_box{
                animation:totop 1s alternate ;
                animation-fill-mode:forwards
            }
        }
        .pic_box{
            height: 140px;
            line-height: 222px;
        }
        img{
            width: 140px;
        }
        .title{
            margin-top: 20px;
            color: #666;
        }
        .price{
            color: #FF6700;
            margin: 10px 0;
        }
        .pj{
            color: #888;
            font-size: 12px;
        }
        .btn_box{
            width: 120px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            transform: translateX(-50%);
            left: 50%;
            border: 1px solid #FF6700;
            position: absolute;
            font-size: 12px;
            color: #FF6700;
            bottom: -60px;
            background-color: #fff;
            cursor: pointer;
            &:hover{
                background-color: #FF6700;
                color: #fff;
            }
        }
    }
}

@keyframes totop{
    0%{
        bottom:-40px
    }
    50%{
        bottom: 32px;
    }
    100%{
        bottom: 32px;
    }
} 
</style>