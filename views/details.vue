<template>
    <div>
        <top-nav></top-nav>
        <div class="sticky">
            <p class="sticky_title clearfix">
                <span class="name fl">{{goods.name}}</span>
                <span class="recom fr">用户评价</span>
            </p>
        </div>
        <div class="detail_box clearfix">
            <div class="left fl">
                 <div class="swiper-container gallery-top">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide" >
                        <img :src="goods.img" alt="">
                    </div>
                    <div class="swiper-slide" >
                        <img src="../assets/images/details2.jpg" alt="">
                    </div>
                    <div class="swiper-slide" >
                        <img src="../assets/images/details3.jpg" alt="">
                    </div>
                    <div class="swiper-slide" >
                        <img src="../assets/images/details4.jpg" alt="">
                    </div>
                    </div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next swiper-button-white"></div>
                    <div class="swiper-button-prev swiper-button-white"></div>
                </div>
                <div class="swiper-container gallery-thumbs">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" >
                        <img src="../assets/images/details.jpg" alt="">
                    </div>
                    <div class="swiper-slide" >
                        <img src="../assets/images/details2.jpg" alt="">
                    </div>
                    <div class="swiper-slide" >
                        <img src="../assets/images/details3.jpg" alt="">
                    </div>
                    <div class="swiper-slide" >
                        <img src="../assets/images/details4.jpg" alt="">
                    </div>
                    </div>
                </div>

            </div>
            <div class="right fl">
                <h2>{{goods.name}}</h2>
                <p class="describe">
                    1亿像素主摄 / 全场景五摄像头 / 四闪光灯 / 3200万自拍 / 10 倍混合光学变焦，
                    50倍数字变焦 / 5260mAh ⼤电量 / 标配 30W疾速快充 / ⼩米⾸款超薄屏下指纹 
                    / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216超线性扬声器
                </p>
                <p class="brand_tag">小米自营</p>
                <p class="price">
                    <span class="newPrice">{{ goods.newPrice}}元</span>
                    <span class="oldPrice">{{ goods.oldPrice }}元</span>
                </p>
                <el-divider></el-divider>
                <div class="address_box">
                    <p>
                        <i class="el-icon-location-outline"></i>
                        <span>北京</span>
                        <span>北京市</span>
                        <span>海定区</span>
                        <span>清河街道</span>
                        <span class="option">修改</span>
                    </p>
                    <p class="good_tag">现有货</p>
                </div>
                <div class="select_color">
                    <h3>选择颜色</h3>
                     <div class="select_box">
                         <el-button 
                         :class="{'active':index==colorId}" 
                         v-for="(item,index) in  selectColor" 
                         :key="index"
                         @click="colorId=index"
                         >{{item}}</el-button>
                     </div>
                     <h3>选择容器</h3>
                     <div class="select_box">
                         <el-button 
                         :class="{'active':containerId == index}" 
                         v-for="(item,index) in containerList" 
                         :key="index"
                         @click="containerId=index"
                         >{{item}}</el-button>
                     </div>
                </div>
                <div class="safety_box">
                    <h3> 选择小米提供的意外保护  <span class="fr know_btn"> 了解意外保护></span></h3>
                    <div class="save_box">
                        
                        <span :class="['style',{'check1':value1}]">
                            <i v-show="value1" class="el-icon-check"></i>
                        </span>
                        <input type="checkbox"  class="check" v-model="value1">
                        <img class="save_img" src="../assets/images/save.png" alt="">
                        <div class="right_box">
                            <h3>意外保险  <el-button size="medium" round>349元</el-button></h3>
                            <p class="right_detile">手机意外碎屏/进水/碾压等损坏</p>
                            <p class="save_bottom">
                                
                            <span  :class="['style1' ,{'check1':value1}]">
                                <i  v-show="value1" class="el-icon-check"></i>
                            </span>
                            <input type="checkbox" class="checkbox" v-model="value1">
                                
                                我已阅读<span>服务条款|常见问题</span>
                                <span class="fr price">349元</span>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="safety_box">
                    <h3> 选择小米提供的延长保修  <span class="fr know_btn"> 了解延长保修></span></h3>
                    <div class="save_box">
                        <span :class="['style',{'check1':value2}]">
                            <i v-show="value2" class="el-icon-check"></i>
                        </span>
                        <input type="checkbox"  class="check" v-model="value2">
                        
                        <img class="save_img" src="../assets/images/save.png" alt="">
                        <div class="right_box">
                            <h3>延保服务  <el-button size="medium" round>159元</el-button></h3>
                            <p class="right_detile">手机意外碎屏/进水/碾压等损坏</p>
                            <p class="save_bottom">
                            <span  :class="['style1' ,{'check1':value2}]">
                                <i  v-show="value2" class="el-icon-check"></i>
                            </span>
                            <input type="checkbox" class="checkbox" v-model="value2">
                                
                                我已阅读<span>服务条款|常见问题</span>
                                <span class="fr price">159元</span>
                            </p>
                        </div>
                    </div>
                </div>


                <div class="safety_box">
                    <h3> 选择小米提供的云空间服务  <span class="fr know_btn"> 了解云空间服务></span></h3>
                    <div class="save_box">
                        <span :class="['style',{'check1':value3}]">
                            <i v-show="value3" class="el-icon-check"></i>
                        </span>
                        <input type="checkbox"  class="check" v-model="value3">
                        
                        <img class="save_img" src="../assets/images/yun.jpg" alt="">
                        <div class="right_box">
                            <h3>云空间年卡500G  <el-button size="medium" round>239元</el-button></h3>
                            <p class="right_detile">主商品签收后，自动激活至下单站号</p>
                            <p class="save_bottom">
                            <span  :class="['style1' ,{'check1':value3}]">
                                <i  v-show="value3" class="el-icon-check"></i>
                            </span>
                            <input type="checkbox" class="checkbox" v-model="value3">
                                
                                我已阅读<span>服务条款|常见问题</span>
                                <span class="fr price">239元</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="right_price_box">
                    <p>小米CC9 Pro 8GB+128GB <span class="fr">2799元</span></p>
                    <p v-show="value1">意外保障服务 <span class="fr">349元</span></p>
                    <p v-show="value2">延长保修服务 <span class="fr">159元</span></p>
                    <p v-show="value3">云空间年卡500G <span class="fr">239元</span></p>
                    <h2>总计：{{totalPrice}}元</h2>
                </div>

                <div class="right_get_cart">
                    <el-button class="addcart" @click="addCart" >加入购物车</el-button>
                      <el-button  :class="['like',{'islike':isLike}]" @click="addLike" > <i class="iconfont icon-like-alt"></i> 喜欢</el-button>
                </div>
                <div class="detail_right_tag">
                    <span>
                        <i class="el-icon-circle-check"></i>
                        小米自营
                    </span>
                    <span>
                        <i class="el-icon-circle-check"></i>
                        小米发货
                    </span>
                    <span>
                        <i class="el-icon-circle-check"></i>
                        7天无理由退货
                    </span>
                    <span>
                        <i class="el-icon-circle-check"></i>
                        运费说明
                    </span>
                    <span>
                        <i class="el-icon-circle-check"></i>
                        企业信息
                    </span>
                    <span>
                        <i class="el-icon-circle-check"></i>
                        7天价格保护
                    </span>
                </div>
            </div>
        </div>
        <div class="price_detail">
            <div class="price_detail_box">
                <h2>价格说明</h2>
                <img src="../assets/images/detail.jpeg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import topNav from "../components/public/topNav.vue"
    export default {
        data(){
            return{
                goods:{
                    id:1,
                    name:'小米CC9 Pro 8GB+128GB',
                    newPrice:'2799',
                    oldPrice:'3099',
                    img:require('../assets/images/details.jpg')
                },
                colorId:0,
                selectColor:["魔法绿境","冰雪极光","暗夜魅影"],
                containerList:["128GB"],
                containerId:0,
                otherGoods:["意外保险","延长保修","云空间"],
                value1:false,
                value2:false,
                value3:false,
                isLike:false
            }
        },
        methods:{
            addCart(){
                this.goods.num = 1
                this.goods.isSelect = true
                this.goods.colorStyle = this.selectColor[this.colorId]
                this.goods.containerStyle = this.containerList[this.containerId]
                this.goods.save = false
                 this.goods.longer = false
                 this.goods.cound = false
                if(this.value1){
                    this.goods.save = true
                }
                if(this.value2) {
                    this.goods.longer = true
                }
                if(this.value3){
                    this.goods.cound = true
                }
                this.$store.commit("cart/add",this.goods)
                this.$router.push('/cart')
            },
            addLike(){
                this.isLike = true
                this.goods.colorStyle = this.selectColor[this.colorId]
                this.goods.containerStyle = this.containerList[this.containerId]
                this.$store.commit('like/add',this.goods)
            }
        },
        components:{
            topNav
        },
        computed:{
            totalPrice(){
                let total = parseFloat(this.goods.newPrice) 
                if(this.value1) {
                    total += 349
                } 
                if(this.value2) {
                    total += 159
                }
                if(this.value3) {
                    total += 239
                }
                return  total
            }
        },
        created(){
            this.$store.state.iscategory=true
            this.$store.state.showTop = true
            this.$store.state.showAside = true
            this.$store.state.footer = true 
        },
        mounted(){
            this.$nextTick(()=>{
                this.swiper = new Swiper('.gallery-thumbs', {
                    spaceBetween: 10,
                    slidesPerView: 4,
                    loop: true,
                    freeMode: true,
                    loopedSlides: 5, //looped slides should be the same
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    });
                  this.swiper2 =  new Swiper('.gallery-top', {
                    spaceBetween: 10,
                    loop:true,
                    loopedSlides: 5, //looped slides should be the same
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    thumbs: {
                        swiper: this.swiper,
                    },
                });
            })
        }
    }
</script>

<style lang="scss" scoped>
    .sticky{
        border-top: 1px solid #f0f0f0;    
        border-bottom: 1px solid #f0f0f0;
        // box-shadow: 10px 50 10px 2px #c0c0c0,
        //             10px 50 10px 2px #ff0,
        //             10px 50 10px 2px #f00,
        //             10px 50 10px 2px #00f;
        .sticky_title{
            width: 1226px;
            margin: 0 auto;
            padding: 15px 0;
            box-sizing: border-box;
        }
    }
    .detail_box{
        width: 1226px;
        margin: 0 auto;
        padding: 30px 0;
        .left{
            width: 50%;
            padding-right: 20px;
            box-sizing: border-box;
            text-align: center;
            img{
                width: 80%;
                
            }
            .swiper-button-white{
                color: #ccc;
            }
        }
        .right{
            width: 50%;
            padding-left: 20px;
            box-sizing: border-box;
            h2{
                color: #333;
                margin-bottom: 10px;
            }
            .describe{
                color: #999;
                font-size: 14px;
                margin-bottom: 10px;
            }
            .brand_tag{
                color: #ff6700;
                margin-bottom: 10px;
            }
            .newPrice{
                color: #ff6700;
                margin-right: 5px;
                font-size: 16px;
            }
            .oldPrice{
                color: #999;
                text-decoration: line-through;
                font-size: 14px;
            }
            .address_box{
                width: 100%;
                height: 100px;
                padding:30px 20px;
                border: 1px solid #f0f0f0;
                box-sizing: border-box;
                background-color: #f5f5f5;
                font-size: 14px;
                color: #333;
                i{
                    margin-right: 10px;
                    font-size: 20px;
                }
                span{
                    margin-right: 20px;
                }
                .option{
                    color: #ff6700;
                    cursor: pointer;
                }
                .good_tag{
                    margin-left: 30px;
                    color: #ff6700;
                    margin-top: 5px;
                }
                
            }
            .select_color{
                h3{
                    margin-top: 20px;
                }
                .select_box{
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    .el-button{
                        margin-top: 10px;
                        width: 49%;
                    }
                    .el-button+.el-button{
                        margin-left: 0;
                    }
                }
                .active{
                    color: #ff6700;
                    border-color: #ff6700;
                }
            }
            .safety_box{
                margin-top: 20px;
               
                h3{
                    .know_btn{
                        font-size: 14px;
                        color: #ff6700;
                    }
                }
                .save_img{
                    width: 50px;
                    height: 50px;
                    
                }
                .save_box{
                    position: relative;
                    border: 1px  solid #ddd;
                    margin-top: 20px;
                    padding-top: 30px;
                    padding-bottom: 20px;
                    padding-left: 50px;
                    .style,
                    .check{
                        position: absolute;
                        top: 50px;
                        left: 20px;
                        border-radius: 50%;
                        width: 15px;
                        height: 15px;
                        background-color:#fff;
                    }
                    .check{
                        opacity: 0;
                    }
                    .style{
                        width: 20px;
                        height: 20px;
                        line-height: 20px;
                        border: 1px solid #ccc;
                        box-sizing: border-box;
                        .el-icon-check{
                            font-size: 16px;
                            position: absolute;
                            margin-top: 1px;
                            font-weight: bold;
                            color: #fff;
                        }
                        &.check1{
                            background-color: #ff6700;
                        }
                    }
                    .style1{
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        line-height: 18px;
                        text-align: center;
                        border-radius: 5px;
                        background-color: #fff;
                        border: 1px solid #ccc;
                        top: 100px;
                        left: 10px;
                        vertical-align: middle;
                        i{
                            font-size: 16px;
                            font-weight: bold;
                            color: #ff6700;
                        }
                         &.check1{
                            border-color: #ff6700;
                        }
                        
                    }
                    .checkbox{
                        position: absolute;
                        left: 120px;
                        height: 20px;
                        opacity: 0;
                    }
                    
                    .right_box{
                        display: inline-block;
                        vertical-align: top;
                        padding-left: 20px;
                        box-sizing: border-box;
                        .el-button{
                            background-color: #ff6700;
                            color: #f0f0f0;
                            height:30px;
                            width:52px;
                            padding: 0;
                            font-size: 14px;
                            font-weight: bold;
                        }
                        .right_detile{
                            font-size: 14px;
                            margin: 10px 0;
                            color: #999;
                        }
                        .el-checkbox{
                            border-radius: 15px;
                        }
                        .save_bottom{
                            color: #333;
                            width: 100%;
                            span{
                                color: #ff6700;
                            }
                            // .el-checkbox{
                            //     width: 30px;
                            //     height: 30px;
                            // }
                            
                            .price{
                                position: absolute;
                                right: 20px;
                                color: #999;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
            .right_price_box{
                margin-top: 30px;
                padding: 30px 20px;
                width: 100%;
                box-sizing: border-box;
                background-color: #F9F9FA;
                p{
                    width: 100%;
                    margin-bottom: 10px;
                    color: #999;
                    font-size: 14px;
                }
                h2{
                    color: #ff6700;
                    margin-top: 20px;
                }
            }
            .right_get_cart{
                margin-top: 20px;
                font-size: 18px;
                .addcart{
                    width: 300px;
                    height: 50px;
                    background-color: #ff6700;
                    color: #fff;
                }
                .islike{
                    i{
                        color: #f00;
                    }
                }
                .like{
                    width: 150px;
                    background-color: #B0B0B0;
                    height: 50px;
                    color: #fff;
                    i{
                        font-size: 18px;
                        font-weight: bold;
                    }
                }
                
            }
            .detail_right_tag{
                margin-top: 10px;
                width: 520px;
                font-size: 16px;
                line-height: 30px;
                span{
                    margin-right: 3px;
                    color: #888;
                    
                    i{
                        font-size: 20px;
                    }
                }
            }
        }
    }
    .price_detail{
        background-color: #F5F5F5;
        padding: 30px 0;
        h2{
            padding-bottom: 10px;
            color: #333;
        }
        .price_detail_box{
            width: 1226px;
            margin: 0 auto;
        }
        
    }
</style>