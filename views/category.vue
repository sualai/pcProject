<template>
    <div>
        <top-nav></top-nav>
        <div class="nav_box">
            <div class="nav">
                <router-link to="/">首页</router-link>
                >
                <span>所有商品</span>
            </div>
        </div>
        <!-- 折叠面板 -->
    <div class="category_box">
        <el-collapse >
            <el-collapse-item v-for="(item,index) in cagetoryList" :key="index">
                <template slot="title">
                    <ul class="flext_title">
                        <li :class="[{'title':i==0},{'active':i==1}]" v-for="(titleItem,i) in item.title" :key="i+20">{{titleItem}}</li>
                       
                    </ul>
                </template>
                    <ul :class="['flext_title', {'child':j!=0}]"  v-for="(childrenItem,j) in item.children" :key="j +30">
                        <li class="title hide"></li>
                        <li v-for="(children,num) in childrenItem" :key="num + 99"> {{children}}</li>
                    </ul>
                 
            </el-collapse-item>
           
        </el-collapse>
    </div>
    <!-- 折叠面板end -->

    <!-- 商品列表 -->
    <div class="list_body">
        <div class="title clearfix">
            <div class="left fl">
                <span>推荐</span>
                <span>新品</span>
                <span>价格 <i v-show="priceUp" class="el-icon-top"></i> <i v-show="!priceUp" class="el-icon-top"></i> </span>
                <span>评论最多</span>
            </div>
            <div class="right fr">
                <div class="checkbox_inp fl ">
                    <span @click="changeFlag(1)" :class="['span_inp',{'active':flag}]">
                        <i class="el-icon-check"></i>
                    </span>
                    <input class="inp" type="checkbox" > 仅显示特价商品
                </div>
                <div class="checkbox_inp fl">
                    <span  @click="changeFlag(2)" :class="['span_inp',{'active':flag2}]">
                        <i class="el-icon-check"></i>
                    </span>
                    <input class="inp" type="checkbox" > 仅显示特价商品
                </div>
            </div>
        </div>
        <div class="list">
            <el-card shadow="hover"  
            :body-style="{ padding: '30px 0 0 0px' }" 
            v-for="(item,index) in goodslist " 
            :key="index"
            @click.native="getDetail"
            >
                <div class="font_box">
                    <i class="fl iconfont icon-like-alt"></i>
                    <i class="fr iconfont icon-jiarugouwuche"></i>
                </div>
                <img :src="item.img" class="image">
                
                <div style="padding: 14px 0 0 0;">
                    
                    <div class="bottom clearfix">
                        <p class="botton_title">{{ item.title }}</p>
                        <p class="price">
                            <span  class="newPrice"> {{ item.newPrice }}元</span>
                            <span class="oldPrice">{{ item.oldPrice }}元</span>
                            
                        </p>
                            <img :src="item.img" alt="" class="split">
                            <div class="tag" v-if="item.tag">
                                <p class="new_goods">{{ item.tag.newGood}}</p>
                                <p class="zk_tag">{{item.tag.coundGood}}</p>
                            </div>
                        
                    </div>
                </div>
            </el-card>
            <div class="page_btn">
                 
                <el-pagination
                    @prev-click="prevChange"
                    @next-click="nextChange"
                    background
                    layout="prev, pager, next"
                    :total="200">
                </el-pagination>
            </div>
        </div>
         <div class="recomment_goods">
                <h2 class="recomment_title">为您推荐</h2>
                <recomment-list></recomment-list>
         </div>
    </div>
    <!-- 商品列表 end-->
    </div>
</template>

<script>
import recommentList from "../components/public/cartList.vue"
import topNav from "../components/public/topNav.vue"
    export default {
        data(){
            return {
                priceUp:true,
                flag:false,
                flag2:false,
                checked2:false,
                checked1:false,
                loopleft:["手机电话卡","电视盒子","笔记本显示器平板","家电插线板","出行穿戴","智能路由器","电源配件","健康儿童","耳机音箱","生活箱包"],
                loooleftlist:[
                    {
                        text:"Redmi 10X4G",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"腾讯黑鲨游戏手机3 Pro",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"Redmi8",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"Redmi 10X 5G 系列",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"小米10Pro",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"小米MIXAlpha",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"小米10青春版",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"小米10",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"Redmi Note 8 Pro",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"Redmi K30 Pro",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"Redmi K30 4G",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"Redmi Note 8",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"Redmi K30 Pro 变焦版",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"Redmi K30 5G",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"小米CC9",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"腾讯黑鲨游戏手机3",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"Redmi 8A",
                        img:require("../assets/images/looplist01.webp")
                    },
                    {
                        text:"小米CC9e",
                        img:require("../assets/images/looplist01.webp")
                    }
                ],
                cagetoryList:[
                    {
                        title:["分类","全部","小米平板","保护套/贴膜","路由器/智能硬件","移动电源/插线板","电池/存储卡"],
                        children:[
                            ["耳机/音响","线材/支架/存储卡","箱包/服饰","米兔/生活周边","配件优惠套装","大家电"],
                            ["工具","保障服务","第三方平台分类","米家扫拖机器人1C配件","生活/箱包","家电/插线板"],
                            ["小米有品","笔记本电脑配件","宠物","出行/穿戴","健康/儿童","手机套装"],
                            ["VR眼镜","笔记本电脑","服务","小米电视主机","低音炮","智能家居"],
                            ["入场卷","电脑派件","小米盒子","小米电视","手机","圈厨多功能涮烤锅"]
                        ]
                    },
                    {
                        title:["机型","全部","Redmi Note 7 Pro","黑鲨游戏手机2","Redmi7","小米9 SE","小米"],
                        children:[
                            ["耳机/音响","线材/支架/存储卡","箱包/服饰","米兔/生活周边","配件优惠套装","大家电"],
                            ["工具","保障服务","第三方平台分类","米家扫拖机器人1C配件","生活/箱包","家电/插线板"],
                            ["小米有品","笔记本电脑配件","宠物","出行/穿戴","健康/儿童","手机套装"],
                            ["VR眼镜","笔记本电脑","服务","小米电视主机","低音炮","智能家居"],
                            ["入场卷","电脑派件","小米盒子","小米电视","手机","圈厨多功能涮烤锅"]
                        ]
                    },
                    {
                        title:["品牌","全部","小米","飞利浦","第三方品牌","ZMI","米家"],
                        children:[
                            ["耳机/音响","线材/支架/存储卡","箱包/服饰","米兔/生活周边","配件优惠套装","大家电"],
                            ["工具","保障服务","第三方平台分类","米家扫拖机器人1C配件","生活/箱包","家电/插线板"],
                            ["小米有品","笔记本电脑配件","宠物","出行/穿戴","健康/儿童","手机套装"],
                            ["VR眼镜","笔记本电脑","服务","小米电视主机","低音炮","智能家居"],
                            ["入场卷","电脑派件","小米盒子","小米电视","手机","圈厨多功能涮烤锅"]
                        ]
                    }
                ],
                goodslist:[
                    {
                        img:require("../assets/images/category1.png"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/component_right8.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/component_right1.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/details2.jpg"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_01.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                     {
                        img:require("../assets/images/list_02.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_03.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_04.png"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_05.png"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299,
                        tag:{
                            newGood:"新品上市",
                        }
                    },
                    {
                        img:require("../assets/images/list_06.png"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_11.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_12.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                     {
                        img:require("../assets/images/list_13.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_14.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_15.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_16.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_21.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                     {
                        img:require("../assets/images/list_22.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_23.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_24.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_25.jpg"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_26.jpg"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_31.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_32.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    }
                ]
            }
        },
        methods:{
            changeFlag(index){
                if((this.flag && index == 1) || (this.flag2 && index == 2) ){
                    this.flag = false
                    this.flag2 = false
                    return 
                }
                if(index == 1 ) {
                    this.flag = !this.flag
                    if(this.flag){
                        this.flag2 = false
                    }
                    
                }else{
                    this.flag2 = !this.flag2
                    if(this.flag2){
                        this.flag = false
                    }
                    
                }
            },
            prevChange(){
                this.goodslist.sort(() => {
                    return Math.floor(Math.random()*10-5)
                })
               
            },
            nextChange() {
                this.goodslist.sort(() => {
                    return Math.floor(Math.random()*10-5)
                })
            },
            getDetail(){
                this.$router.push('/details')
            }
        },
        components:{
           topNav,
           recommentList
        },
        created(){
            this.$store.state.iscategory = true
            this.$store.state.showAside = false
            this.$store.state.footer = true 
        }
    }
</script>

<style lang="scss" scoped>
.nav_box{
    width: 100%;
    background-color: #F5F5F5;
    font-size: 12px;
    padding: 10px 0;
}
.nav{
    width: 1226px;
    margin: 0 auto;
}
.category_box{
     width: 1226px;
    margin: 0 auto;
}
.flext_title{
    display: flex;
    width: 1000px;
    font-size: 14px;
    color: #666;
    justify-content: space-around;
    li{
        cursor: pointer;
        width: 150px;
        text-align: left;
    }
    &.child{
        margin-top: 10px;
    }
    li:hover{
        color: #ff6700;
    }
    .title{
        color: #d0d0d0;
    }
    .active{
        color: #ff6700;
    }
    .hide{
        visibility: hidden;
    }
}
.list_body{
    width: 100%;
    padding: 20px 0;
    background-color: #F5F5F5;
    .title{
        width: 1226px;
        margin:0 auto;
        padding: 20px 0;
    }
    .left{
        display: flex;
        width:350px;
        justify-content: space-around;
        text-align: center;
        margin-left: -30px;
        font-size: 14px;
        color: #666;
        span{
            border-right: 1px solid #ccc;
            flex: 1;
            i{
                font-weight: bold;
                color: #666;
            }
            &:nth-last-child(1){
                border-right: 0;
            }
            &:hover{
                color: #ff6700;
            }
        }
    }
    .checkbox_inp{
        position: relative;
        color: #888;
        font-size: 14px;
        &:nth-child(1){
            margin-right: 20px;
        }
        .inp{
            width: 20px;
            background-color:#fff;
            height: 20px;
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
        }
        .span_inp{
            display: inline-block;
            width: 18px;
            height: 18px;
            top: 0;
            left:0;
            margin-right: 5px;
            background-color: #fff;
            vertical-align: middle;
            i{
                visibility: hidden;
            }
        }
        .active{
            i{
                visibility: visible;
                color: #fff;
                font-size: 20px;
                background-color: #ff6700;
            }
        }
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        width: 1226px;
        height: 2800px;
        margin: 0 auto;
        font-size: 14px;
        .font_box{
            position: absolute;
            width: 100%;
            box-sizing: border-box;
            top: 10px;
            padding: 0 20px;
            visibility: hidden;
            .iconfont{
                font-size: 20px;
            }
        }
        .el-card{
            width: 296px;
            height: 430px;
            text-align: center;
            position: relative;
            &:hover{
                .font_box{
                    visibility: visible;
                }
            }
            .botton_title{
                margin-top: 14px;
            }
            .image{
                width: 200px;
                height: 200px;
            }
            .price{
                text-align: center;
                margin: 10px 0 20px 0;
                .newPrice{
                    color: #ff6700;
                }
                .oldPrice{
                    color: #999;
                    text-decoration: line-through;
                    margin-left: 5px;
                }
            }
            .split{
                width: 43px;
                height: 43px;
                border: 1px solid #f0f0f0;
            }
            .zk_tag,
            .new_goods{
                padding:0px 10px ;
                background-color: green;
                text-align: left;
                // padding-left: 10px;
                font-size: 12px;
                color: #fff;
            }
            .tag{
                position: absolute;
                bottom: 0;
                width: 100%;
                .new_goods{
                    margin-top: 10px;
                    background-color: green;
                }
                .zk_tag{
                    background-color: red;
                }
            }
            
        }
        .page_btn{
            margin: 0 auto;
            padding: 30px 0;
            .el-icon{
                font-size: 30px !important;
            }
        }
    }
}
.recomment_goods{
    width: 1226px;
    margin: 0 auto;
    .recomment_title{
        text-align: center;
        position: relative;
        color: #B0B0B0;
        padding: 20px;
        &::after,
        &::before{
            display: block;
            content: "";
            width: 300px;
            border-top: 1px solid #ccc;
            position: absolute;
            top: 50%;
        }
        &::before{
            left: 200px;
        }
         &::after{
            right: 200px;
        }
        
    }
}
</style>