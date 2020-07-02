<template>
    <div>
        
        <div class="component">
            
        <div class="component_left">
            <div class="component_left_img_box" v-for="(item,index) in list.left" :key="index">
                <img :src="item" alt="">
            </div>
            
        </div>
        <div class="component_right">
            <ul class="component_right_flex_box">
                <li v-for="(item,index) in list.right[selectId]" :key="index"  @click="$router.push('/details')">
                    <el-card shadow="hover" :body-style="{padding:'0px'}">
                        <div class="imgBox">
                            <img :src="item.img" alt="" class="img">
                        </div>
                        <p class="title">{{ item.title }}</p>
                        <p class="decs"> {{ item.decs}}</p>
                        <p class="price">
                            <span class="new_price">{{item.newPrice}}元</span>
                            <span class="old_price">{{item.oldPrice}}元</span>
                        </p>
                    </el-card>
                </li>
                 <li class="list_8">
                    <el-card shadow="hover" :body-style="{padding:'30px 0 0  0px' ,marginBottom:'20px'}"  @click="$router.push('/details')">
                        <div class="fl right_title_box">
                            <p class="title">{{ list.endObj.title }}</p>
                            <p class="price">
                                 <span class="new_price">{{ list.endObj.newPrice }}元</span>
                            </p>
                        </div>
                        <div class="fl right_pic_box">
                            <img :src="list.endObj.img" alt="">
                        </div>
                    </el-card>
                    <el-card shadow="hover" :body-style="{padding:'40px 0 0 0px'}"  @click="$router.push('/category')">
                        <div class="fl right_title_box">
                            <p class="title title_end">浏览更多</p>
                            <p class="desc">热门</p>
                        </div>
                        <div class="fl right_pic_box">
                            <div class="cicle"><i class="el-icon-right"></i></div>
                        </div>
                    </el-card>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // selectId:0
            }
        },
        props:["list",'selectId'],
        
        methods:{
            selectShow(index,event,option){
                if(event.target.getAttribute("class") == "active") {
                    return 
                }
                this[option] = index
                event.target.parentElement.getElementsByClassName("active")[0].classList.remove("active")
                event.target.classList.add("active")
            },
            
        }
    }
</script>

<style lang="scss" scoped>
 .imgBox{
     height: 180px;
     line-height: 286px;
 }
 .component{
        width: 1226px;
        margin: 0 auto;
        display: flex;
        
        .component_left{
            width: 234px;
            margin-right:20px ;
            .component_left_img_box{
                height: 300px;
                width: 234px;
                &:nth-child(1){
                    margin-bottom: 20px;
                }
                img{
                    width: 234px;
                }
            }
        }
        .component_right{
            width: 972px;
            .component_right_flex_box{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                // align-items: ;
                align-content: space-between;
                height: 620px;
                justify-content: space-between;
                li{
                    width: 234px;
                    height: 300px;
                    text-align: center;
                    
                    .el-card{
                        height: 300px;
                        img{
                            width: 180px;
                        }
                        .title{
                            color: #333;
                            margin-bottom: 5px;
                            font-size: 14px;
                        }
                        .decs{
                            font-size: 12px;
                            color: #5F5750;
                            margin-bottom: 15px;
                        }
                        .price{
                            font-size: 14px;
                            .new_price{
                                color: #ff6700;
                                margin-right: 5px;
                            }
                            .old_price{
                                color: #ddd;
                                text-decoration: line-through;

                            }
                        }
                    }
                }
                .list_8{
                    height: 300px;
                    .el-card{
                        height: 140px;
                        &:nth-child(1) {
                            margin-bottom: 20px;
                        }
                        .right_pic_box{
                            width: 80px;
                            img{
                                width: 80px;
                            }
                            .cicle{
                                width: 40px;
                                height:40px;
                                border-radius: 50%;
                                border:3px solid #ff6700;
                                text-align: center;
                                line-height: 40px;
                                font-size: 35px;
                                color: #ff6700;
                            }
                            
                        }
                        .right_title_box{
                            width: 120px;
                            padding:10px 20px ;
                            box-sizing: border-box;
                            .title_end{
                                font-size: 18px;
                            }
                            .desc{
                                font-size: 12px;
                                text-align: left;
                                margin-left: 25px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>