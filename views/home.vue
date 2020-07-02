<template>
    <div>
        <!-- 头部 -->
     
      <!-- 头部end -->
    <div class="body clearfix ">
        <!-- 导航 -->
        <top-nav></top-nav>
        
        <!-- 导航end -->
        <!-- 轮播图 -->
        <div class="loop">
            <el-container>
                <tabel-change :loopleft = "loopleft" :loooleftlist = "loooleftlist" :bgc="'rgba(0, 0, 0, 0.6)'" :color="'#fff'" :border="'rgba(0, 0, 0, 0.6)'"></tabel-change>
                
                <el-main>
                    <div class="swiper-container topSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="../assets/images/loop1.jpg" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="../assets/images/loop2.webp" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="../assets/images/loop3.webp" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="../assets/images/loop4.webp" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="../assets/images/loop5.webp" alt="">
                            </div>
                    </div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next topSwipeButtonNext"></div>
                    <div class="swiper-button-prev topSwipeButtonPrev" ></div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination topSwiperPagination"></div>
                </div>
                </el-main>
            </el-container>
            
           
        </div>
        <!-- 轮播图end -->

        <div class="body_pic_box">
            <ul class="bodu_pic_ul">
                <li class="first">
                    <div>
                        <div class="scale_box">
                        <img src="../assets/images/miaosha.png" alt="">
                        <p>小米秒杀</p>
                        </div>
                    </div>
                    <div>
                        <div class="scale_box">
                        <img src="../assets/images/qiye.png" alt="">
                        <p>小米秒杀</p>
                        </div>
                    </div>
                    <div>
                        <div class="scale_box">
                        <img src="../assets/images/fm.png" alt="">
                        <p>企业团购</p>
                        </div>
                    </div>
                    <div>
                        <div class="scale_box">
                        <img src="../assets/images/fen.png" alt="">
                        <p>F码通道</p>
                        </div>
                    </div>
                    <div>
                        <div class="scale_box">
                        <img src="../assets/images/huan.png" alt="">
                        <p>以旧换新</p>
                        </div>
                    </div>
                    <div>
                        <div class="scale_box">
                            <img src="../assets/images/chong.png" alt="">
                            <p>花费充值</p>
                        </div>
                    </div>
                </li>
                <li class="pic_box" @click="$router.push('/details')">
                    <img src="../assets/images/bodylist1.jpg" alt="">
                </li >
                <li class="pic_box" @click="$router.push('/details')">
                    <img src='../assets/images/bodylist2.jpg' alt="">
                </li>
                 <li class="pic_box" @click="$router.push('/details')">
                    <img src='../assets/images/bodylist3.jpg' alt="">
                </li>
            </ul>
        </div>
        <!-- 闪购 -->
        <div class="flash_fpurchase_box">
            <div class="flash_box">
                <h2>小米闪购</h2>
                <div class="flash_btn ">
                     <div class=" mySwipeButtonNext" @click="prev" >
                        <i class="el-icon-arrow-right"></i>
                    </div>
                    <div class=" mySwipeButtonPrev" @click="next"  >
                        <i class="el-icon-arrow-left"></i>
                    </div>
                </div>
                <div class="flash_fpurchase">
                    <div class="flash_fpurchase_left">
                        <p class="title">14：00场</p>
                        <i class="iconfont icon-shandian"></i>
                        <p class="end_time">距离结束还有</p>
                        <div class="flash_time">
                            <span class="time_number">00</span>
                            <span class="time_point">:</span>
                            <span class="time_number">24</span>
                            <span class="time_point">:</span>
                            <span class="time_number">00</span>
                        </div>
                    </div>
                    <!-- 右侧轮播 -->
                    <div class="flash_fpurchase_right">
                        
                        <div class="swiper-container myContainer">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in navpiclist" :key="index" @click="$router.push('/details')">
                                    <img :src="item.img" alt="">
                                    <p class="swriper_title">{{ item.title}}</p>
                                    <p class="swriper_desc">{{item.desc}}</p>
                                    <p class="swiper_price">
                                        <span class="swiper_price_new">{{ item.price }}</span>
                                        <span class="swiper_price_old">39.9</span>
                                    </p>
                                </div>
                            </div>
                            <!-- Add Pagination -->
                            
                            <!-- <div class="swiper-pagination myPagination"></div> -->
                        </div>

                    </div>
                    <!-- 右侧轮播end -->
                </div>
                <div class="img_box">
                    <img src="../assets/images/ad1.webp" alt="">
                </div>
                <h2>手机   
                    <span class="fr span" @click="$router.push('/category')">
                        查看全部
                        <i class="iconfont icon-youbian "></i>
                    </span> 
                </h2>
                <div class="photo_box clearfix">
                    <div class="pic_left fl">
                       <el-card shadow="hover" :body-style="{padding:'0px',backgroundColor:'#F5F5F5'}">
                           <img src="../assets/images/xm1.webp" alt="">
                        </el-card>
                    </div>
                    <div class="photo_box_right fl">
                       <ul class="box_right">
                           <li v-for="num in 8" :key="num">
                               <el-card shadow="hover" :body-style="{padding:'20px 0 0 0px',border:'0'}">
                                    <img :src="require('../assets/images/' + (num+1) +'.webp')" alt="" class="img">
                                    <p class="xm_name">小米10青春版5G</p>
                                    <p class="xm_desc">50倍潜望式变焦/轻薄5G手机</p>
                                    <p class="xm_price">2099元起</p>
                                </el-card>
                           </li>
                           
                       </ul>
                    </div>
                </div>
                <div class="img_box">
                    <img src="../assets/images/ad2.webp" alt="">
                </div>
                <div class="box">
                    <h2>家电
                        <p class="jadian_select fr">
                            <span  class="active" @mouseenter="selectShow(0,$event,'list2Id')"  > 热门 </span>
                            <span @mouseenter="selectShow(1,$event,'list2Id')">电视影音</span>
                        </p>
                    </h2>
                    <list-component :list="list1" :selectId="list1Id"></list-component>
                </div>
                
                <div class="img_box">
                    <img src="../assets/images/ad3.webp" alt="">
                </div>

                            <!-- 序号  事件对象 修改的参数 -->
                <div class="box">
                    <h2>智能
                        <p class="jadian_select fr">
                            <span  class="active" @mouseenter="selectShow(0,$event ,'list2Id')"> 热门 </span>
                            <span @mouseenter="selectShow(1,$event,'list2Id')">安防</span>
                            <span @mouseenter="selectShow(2,$event,'list2Id')">出行</span>
                        </p>
                    </h2>
                    <list-component :list="list2" :selectId="list2Id"></list-component>
                </div>

                <div class="img_box">
                    <img src="../assets/images/ad4.webp" alt="">
                </div>
                <div class="box">
                    <h2>搭配
                        <p class="jadian_select fr">
                            <span  class="active" @mouseenter="selectShow(0,$event ,'list3Id')"> 热门 </span>
                            <span @mouseenter="selectShow(1,$event ,'list3Id')">耳机音箱</span>
                        </p>

                    </h2>
                    <list-component :list="list3" :selectId="list3Id"></list-component>
                </div>
                <div class="img_box">
                    <img src="../assets/images/ad5.webp" alt="">
                </div>
                 <div class="box">
                    <h2>配件

                        <p class="jadian_select fr">
                            <span  class="active" @mouseenter="selectShow(0,$event ,'list4Id')"> 热门 </span>
                            <span @mouseenter="selectShow(1,$event ,'list4Id')">保护套</span>
                            <span @mouseenter="selectShow(2,$event ,'list4Id')">充电器</span>
                        </p>
                    </h2>
                    <list-component :list="list4" :selectId="list4Id"></list-component>
                </div>
                <div class="img_box">
                    <img src="../assets/images/ad6.webp" alt="">
                </div>
                <div class="box">
                    <h2>周边

                        <p class="jadian_select fr">
                            <span  class="active" @mouseenter="selectShow(0,$event,'list5Id')"> 热门 </span>
                            <span @mouseenter="selectShow(1,$event,'list5Id')">出行</span>
                        </p>
                    </h2>
                    <list-component :list="list1" :selectId="list5Id"></list-component>
                </div>
                <div class="img_box">
                    <img src="../assets/images/ad7.webp" alt="">
                </div>
                
                <div class="box">
                    <h2>视频
                        <span class="fr span" @click="$router.push('/category')">
                        查看全部
                        <i class="iconfont icon-youbian "></i>
                    </span> 
                    </h2>
                    <div class="vido_box">
                        <ul class="flex_box">
                            <li v-for="(item) in 4" :key="item">
                                <el-card :body-style="{ padding: '0px' }">
                                <img src="../assets/images/ship1.webp" class="image">
                                <div style="padding: 30px;">
                                    <div class="icon_box">
                                        <i class="el-icon-caret-right"></i>
                                    </div>
                                    
                                    <span>小米10青春版发布会</span>
                                </div>
                                </el-card>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- 闪购end -->
        <!-- 底部 -->
        
        <!-- 底部 -->
    </div>

    </div>
</template>

<script>
import listComponent from "../components/public/list.vue"
import topNav from "../components/public/topNav.vue"
import tabelChange from  "../components/public/tabelChange.vue"
import Swiper from "swiper" 
import looplist from "../assets/js/data"
    export default {
          data() {
            return {
                
                scroll:'',
                Swiper1:'',
               
                navList:["小米手机","Redmi红米","电视笔记本","家电","路由器","智能硬件"],
                topList:[
                    {
                        img:require("../assets/images/list_01.webp"),
                        name:'小米青春版5G',
                        price:999
                    },
                    {
                        img:require("../assets/images/list_01.webp"),
                        name:'小米青春版5G',
                        price:999
                    },
                    {
                        img:require("../assets/images/list_01.webp"),
                        name:'小米青春版5G',
                        price:999
                    },
                    {
                        img:require("../assets/images/list_01.webp"),
                        name:'小米青春版5G',
                        price:999
                    },
                    {
                        img:require("../assets/images/list_01.webp"),
                        name:'小米青春版5G',
                        price:999
                    },
                    {
                        img:require("../assets/images/list_01.webp"),
                        name:'小米青春版5G',
                        price:999
                    }
                ],
                loopleft:["手机电话卡","电视盒子","笔记本显示器平板","家电插线板","出行穿戴","智能路由器","电源配件","健康儿童","耳机音箱","生活箱包"],
                loooleftlist:looplist,
                navpiclist:[
                    {
                        img:require("../assets/images/nav1.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9',
                    },
                    {
                        img:require("../assets/images/nav2.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav3.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav4.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav5.webp"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav6.png"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav7.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav8.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    }
                ],
                list1Id:0,
                list2Id:0,
                list3Id:0, 
                list4Id:0, 
                list5Id:0,
                list1:{
                    left:[
                        require("../assets/images/conpent_left1.webp"),
                        require("../assets/images/conpent_left2.webp")
                    ],
                    right:[
                        [
                            {
                                img:require("../assets/images/component_right1.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_21.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_22.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_23.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_24.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_25.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_26.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/list_31.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_32.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_33.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_34.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_35.png"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_36.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav10.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ]
                    ],
                    endObj: {
                            img:require("../assets/images/component_right8.webp"),
                            title:'Redmi红米',
                            desc :"70英寸震撼巨屏，4K画质，细腻如真",
                            newPrice:'2999',
                            oldPrice:'3799'
                        }
                },
                 list2:{
                    left:[
                        require("../assets/images/leftlist3.webp"),
                        require("../assets/images/leftlist4.webp")
                    ],
                     right:[
                        [
                            {
                                img:require("../assets/images/list_41.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_33.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_42.png"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_51.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_61.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_63.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_65.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/list_62.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_55.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/listend82.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_66.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_56.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav11.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_64.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/detail.jpeg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav12.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav5.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav9.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_26.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_13.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_14.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ]
                    ],
                    endObj: {
                            img:require("../assets/images/listend82.jpg"),
                            title:'9号平衡车',
                            desc :"70英寸震撼巨屏，4K画质，细腻如真",
                            newPrice:'2999',
                            oldPrice:'3799'
                        }
                },
                list3:{
                    left:[
                        require("../assets/images/list_left_1.webp"),
                        require("../assets/images/list_left_2.webp")
                    ],
                    right:[
                        [
                            {
                                img:require("../assets/images/list_41.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_42.png"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_43.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_44.png"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_45.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_46.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_51.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/list_52.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_53.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_54.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_55.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_56.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_61.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_63.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ]
                    ],
                    endObj: {
                            img:require("../assets/images/component_right8.webp"),
                            title:'Redmi红米',
                            desc :"70英寸震撼巨屏，4K画质，细腻如真",
                            newPrice:'2999',
                            oldPrice:'3799'
                        }
                },
                list4:{
                    left:[
                        require("../assets/images/leftlist3.webp"),
                        require("../assets/images/leftlist4.webp")
                    ],
                     right:[
                        [
                            {
                                img:require("../assets/images/list_41.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_33.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_42.png"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_51.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_61.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_63.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_65.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/list_62.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_55.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/listend82.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_66.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_56.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav11.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_64.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/details.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav12.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav5.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav9.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_26.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_13.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_14.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ]
                    ],
                    endObj: {
                            img:require("../assets/images/listend82.jpg"),
                            title:'9号平衡车',
                            desc :"70英寸震撼巨屏，4K画质，细腻如真",
                            newPrice:'2999',
                            oldPrice:'3799'
                        }
                },
                topListId :0,
                
                showLoopList:false
            };
        },
        methods:{
            next(){
                this.Swiper.slidePrev();
            },
            prev(){
                this.Swiper.slideNext();
            },
            selectShow(index,event,option){
                if(event.target.getAttribute("class") == "active") {
                    return 
                }
                this[option] = index
                event.target.parentElement.getElementsByClassName("active")[0].classList.remove("active")
                event.target.classList.add("active")
            },
            
            handleScroll(){
                this.scroll = parseInt(document.documentElement.scrollTop||document.body.scrollTop)
               
                if(this.scroll > 800) {
                    this.$store.state.isShowTop = true
                }else {
                    this.$store.state.isShowTop = false
                }
            }
        },
        components:{
            listComponent,
            topNav,
            tabelChange
        },
        created(){
            this.$store.state.showAside = true
             this.$store.state.showTop = true
             this.$store.state.footer = true
             this.$store.state.iscategory = false
        },
        mounted(){
            this.$nextTick(()=>{
                
               this.Swiper1 =  new Swiper('.topSwiper', {
                    spaceBetween: 30,
                    autoplay:true,
                    effect: 'fade',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                });

                this.Swiper =   new Swiper('.myContainer', {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    autoplay:true
                   
                });
            })
             window.addEventListener('scroll',this.handleScroll)
        },
        beforeDestroy(){
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style lang="scss" scoped>
  
    .body{
        width: 100%;
        
        .nav_box{
            width: 100%;
            .nav_list{
                position: absolute;
                width: 100%;
                border-top: 1px solid #ddd;
                background-color: #fff;
                box-shadow: 0px 0px 1px 1px  #f0f0f0,
                            0 0 0 0  #f0f0f0,
                            0 -1px 1px 1px #f0f0f0,
                            0 0 0 0 #f0f0f0;
                            z-index: 10000;
                .list_box{
                    width: 1226px;
                    margin: 0 auto;
                    padding: 15px 0 ;
                    display: flex;
                    .list_box_content{
                        text-align: center;
                        font-size: 12px;
                        color: #333333;
                        .img_box{
                            border-right: 1px solid #d0d0d0;
                            box-shadow:  1px 0 10 1px #f0f0f0;
                        }
                        .price{
                            color:#FF6700 ;
                        }
                    }
                    .list_box_content:nth-last-child(1){
                        .img_box{
                            border-right:0;
                        }
                    }
                }
            }
        }
        .top_nav{
            width: 1226px;
            margin: 0 auto;
            padding: 20px 0 0 0;
            
        }
       
        .loop{
            position: relative;
            width: 1226px;
            padding-top: 20px;
            margin: 0 auto;
            
        }
       
        .swiper-slide{
            img{
                width: 1226px;
            }
        }
        .swiper-button-next{
           color: #B0B0B0;
        }
        .swiper-button-prev{
            left: 270px;
            z-index: 10;
            color: #B0B0B0;
        }
        .swiper-pagination{
            text-align: right;
            margin-right:20px ;
        }
        .el-main{
            padding: 0;
        }
    }
    .body_pic_box{
        width: 1226px;
        margin: 10px auto;
        .bodu_pic_ul{
            display: flex;
            justify-content: space-between;
            .first{
                display: flex;
                flex-wrap: wrap;
                justify-content:space-around;
                width: 260px;
                height: 170px;
                background-color: #5F5750;
                &>div{
                    width: 85px;
                    height: 85px;
                    text-align: center;
                    color: #B0B0B0;
                    box-sizing: border-box;
                    border-right: 1px solid  #706c69;
                    border-bottom: 1px solid #706c69;
                    &>.scale_box{
                        margin-top: 15px;
                        img{
                            width: 40px;
                        }
                        // transform: scale(.5);
                        p{
                            font-size: 14px;
                        }
                    }
                }
            }
            .pic_box{
                width: 316px;
            }
        }

    }
    .flash_fpurchase_box{
        
        .flash_box{
            width: 1226px;
            margin: 0 auto;
            position: relative;
        }
        width: 100%;
        margin-top: 15px;
        background-color: #F5F5F5;
        padding-bottom: 20px;
        h2{
            width: 1226px;
            margin:0 auto;
            font-size: 18px;
            padding-top: 20px;
            padding-bottom: 20px;

        }
        
        .jadian_select{
            font-size: 16px;
            font-weight: normal;
            span{
                margin-left:10px;
                color: #333;
                border-bottom: 2px solid transparent;
                text-align: center;
                cursor: pointer;
                &.active{
                    color: #FB7D1F;
                    border-bottom: 2px solid #FF6700;
                }
            }
        }
        .span{
            font-size: 14px;
            color:#333 ;
            cursor: pointer;
            &:hover{
                color: #FB7D1F;
                i{
                    color: #FB7D1F;
                }
            }
            i{
                font-size: 25px;
                vertical-align: middle;
                color: #B0B0B0;
                margin-left: 5px;
            }
        }
        .flash_btn{
            text-align: center;
            line-height: 30px;
            &>div:hover{
                i{
                    color: #E53935;
                }
            }
            i{
                font-size: 20px;
                color: #9A9A9A;
                font-weight: bold;
            }
             .mySwipeButtonNext{
                position: absolute;
                top: 20px;
                right: 0;
                width: 30px;
                height: 30px;
                border: 1px solid #cccccc;
            }
            .mySwipeButtonPrev{
                position: absolute;
                top: 20px;
                right: 30px;
                width: 30px;
                height: 30px;
                border: 1px solid #cccccc;
            }
        }
       
        .img_box{
            width: 1226px;
            margin: 20px auto;
            img{
                width: 100%;
            }
        }
    }
    .flash_fpurchase{
        display: flex;
        width: 1226px;
        margin:0 auto;
        justify-content: space-between;
        .flash_fpurchase_left{
            width: 230px;
            height: 330px;
            background-color: #F1EDED;
            border-top: 1px solid #E53935;
            text-align: center;
            .title{
                color:#E53935 ;
                font-size: 18px;
                padding-top: 60px ;
                padding-bottom:35px ;
            }
            .icon-shandian{
                font-size: 70px;
                color: #E53935;
            }
            .end_time{
                margin: 20px 0;
                font-size: 16px;
                color: #6F6D6D;
            }
            .flash_time{
                span{
                    display: inline-block;
                    font-size: 20px;
                    color:#605751 ;

                }
                .time_number{
                    width: 40px;
                    height: 40px;
                    color: #f0f0f0;
                    text-align: center;
                    line-height: 40px;
                    background-color: #605751;
                }

            }
        }
        .flash_fpurchase_right{
            width:980px ;
            height: 330px;
            position: relative;
            // border: 1px solid #ccc;
            
           .swiper-slide{
               height: 330px;
               background-color: #fff;
               
               .swriper_title{
                   font-size: 14px;
                   color: #333;
               }
               .swriper_desc{
                   font-size: 12px;
                   color: #B8B8B8;
                   margin-bottom: 20px;
               }
               .swiper_price_new{
                   color: #FF6700;
                   font-size: 14px;
               }
               .swiper_price_old{
                   color: #B8B8B8;
                   text-decoration: line-through;
                   font-size: 14px;
               }
           }
           .swiper-slide:nth-child(5n),
           .swiper-slide:nth-child(1){
               border-top: 1px solid #00C0A5;
           }
           .swiper-slide:nth-child(6n),
           .swiper-slide:nth-child(2){
               border-top: 1px solid #FFAC13;
           }
           .swiper-slide:nth-child(7),
           .swiper-slide:nth-child(3n){
               border-top: 1px solid #83C44E;
           }
            .swiper-slide:nth-child(4n){
               border-top: 1px solid #2196F3;
           }
            text-align: center;
            img{
                width: 100%;
            }
        }
        
    }
    .photo_box{
        .pic_left{
            width: 230px;
            margin-right: 20px;
        }
        .photo_box_right{
            width: 976px;
            .box_right{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li{
                    width:230px;
                    height: 300px;
                    .el-card{
                        height: 280px;
                    }

                    text-align: center;
                    box-sizing: border-box;
                    // background-color: #fff;
                    .img{
                        width: 150px;
                        height: auto;
                    }
                    .xm_name{
                        margin-top: 10px;
                        font-size: 14px;
                        color: #333;
                    }
                    .xm_desc{
                        font-size: 12px;
                        color: #5F5750;
                        margin-top: 10px;
                    }
                    .xm_price{
                        margin-top: 15px;
                        color: #E53935;
                    }
                }
            }

        }
    }
    .vido_box{
        
        .flex_box{
            display: flex;
            justify-content: space-between;
            text-align: center;
            li{
                width: 296px;
                height: 285px;
                position: relative;
                img{
                    width: 100%;
                }
                
                .icon_box{
                    position: absolute;
                    top: 130px;
                    left: 20px;
                    width: 30px;
                    border-radius: 15px;
                    border: 2px solid #f0f0f0;
                    .el-icon-caret-right{
                        color: #fff;
                        font-size: 18px;
                    }
                }
                .icon_box:hover{
                    background-color:#FF6718;
                    border: 2px solid #FF6718;
                }
                
            }
        }
        .image {
            width: 100%;
            display: block;
        }
    }
    
</style>