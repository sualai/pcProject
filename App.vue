<template>
  <div id="app">
    <!-- 头部 -->
     <div class="header" v-show="$store.state.showTop">
          <div class="contain clearfix">
              <ul class="left fl">
                 <li> 小米商城</li>
                 <li> MIUI</li> 
                 <li> loT</li> 
                 <li> 云服务</li>
                 <li> 金融</li>
                 <li> 有品</li>
                 <li> 小爱开放平台</li>
                 <li> 企业团购</li>
                 <li> 资质证照</li>
                 <li> 协议规则</li>
                 <li> 下载app
                     <div class="imgagebox">
                         <img src="./assets/images/ersweima.png" alt="">
                     </div>
                </li> 
                 <li> Select Location</li> 
              </ul>
              <ul class="right fr">
                 <li v-if="!($store.state.username)"> <span @click="$router.push('/login')">登录</span> | <span @click="$router.push('/register')">注册</span> </li>
                 <li v-else>{{ $store.state.username }}
                      <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                           
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item  command="my" >个人中心</el-dropdown-item>
                            <el-dropdown-item command="order" >评价晒单</el-dropdown-item>
                            <el-dropdown-item command="like" >我的喜欢</el-dropdown-item>
                            <el-dropdown-item command="login" >退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                        <el-divider direction="vertical"></el-divider>
                    </el-dropdown>
                 </li>
                 <li> 消息通知 </li>
                 <li class="cart-box" >
                    <div class="cart" @click="$router.push('/cart')"> 购物车（{{ $store.state.cart.cartList.length }}）</div>
                    <div class="box" v-show="!($store.state.cart.cartList.length)" >
                        <p  class="text">购物车还没有商品赶紧选购吧</p>
                        
                    </div>
                 </li>
              </ul>
          </div>
      </div>
    <!-- 头部end -->
    <!-- 头部nav -->
    <!-- 头部navend -->
    <!-- 侧边 -->
    <div class="aside" v-show="$store.state.showAside">
    <ul>
        <li>
        <img  src="./assets/images/photo1.png" alt="">
        <img src="./assets/images/photo.png" alt="">
        手机App
        <div class="aside_box">
            <img src="./assets/images/ersweima.png" alt="">
            <p class="text">扫码领取新人百元礼包</p>
        </div>
        </li>
        <li @click="$router.push('/my/myMsg')">
        <img  src="./assets/images/my1.png" alt="">
        <img src="./assets/images/my.png" alt="">
        个人中心
        </li>
        <li @click="$router.push('/my/order/all')">
        <img  src="./assets/images/serve1.png" alt="">
        <img src="./assets/images/serve.png" alt="">
        售后服务
        </li>
        <li @click="$router.push('/my/myMsg')">
            <img  src="./assets/images/regong1.png" alt="">
        <img src="./assets/images/regong.png" alt="">
        人工客服
        </li>
        <li  @click="$router.push('/cart')">
            <img  src="./assets/images/cart1.png" alt="">
        <img src="./assets/images/cart.png" alt="">
        购物车
        </li>
    </ul>
    <div class="back_top" @click="backtop" v-show="$store.state.isShowTop">
        <i class="iconfont icon-huidingbu"></i>
        <br>
        回顶部
    </div>
    </div>
      <!-- 侧边end -->

    <router-view></router-view>
    <!-- 底部 -->
    <div class="footer" v-show="$store.state.footer">
            <div class="footer_box">
                <ul class="flex_footer_box">
                    <li>
                        <i class="iconfont icon-shouhou"></i>
                        售后服务
                    </li>
                    <li>
                        <i class="iconfont icon-tianwuliyou"></i>
                        7天无理由
                    </li>
                    <li>
                        <i class="iconfont icon-15tian"></i>
                        15天免费退款
                    </li>
                    <li>
                        <i class="iconfont icon-lipin"></i>
                        满99元包邮
                    </li>
                    <li>
                        <i class="iconfont icon-dizhi"></i>
                        520余家售后网络
                    </li>
                </ul>
                <div class="friend_flex_box">
                    <ul class="left_box">
                        <li>
                            <ul>
                                <li> 帮助中心 </li>
                                <li> 账户管理 </li>
                                <li> 购物指南 </li>
                                <li> 订单操作 </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                               <li> 服务支持</li>
                               <li> 售后政策</li>
                               <li> 自助服务</li>
                               <li> 相关下载</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                               <li>线下门店</li> 
                               <li>小米之家</li> 
                               <li>服务网点</li> 
                               <li>授权体验店</li> 
                            </ul>
                        </li>
                        <li>
                            <ul>
                              <li>  关于小米</li>
                              <li>  了解小米</li>
                              <li>  加入小米</li>
                              <li>  投资者关系</li>
                              <li>  企业社会责任</li>
                              <li>  廉洁举报</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                               <li> 关注我们</li>
                               <li> 新浪微博</li>
                               <li> 言方微信</li>
                               <li> 联系我们</li>
                               <li> 公益基金会</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                               <li> 特色服务</li>
                               <li> F码通道</li>
                               <li> 礼物码</li>
                               <li> 防伪查询</li>
                            </ul>
                        </li>
                    </ul>
                    <div class="right_box">
                        <p class="photo_title">400-100-5678</p>
                        <p class="desc_time">8:00-18:00（仅收市话费）</p>
                        <div class="right_msg_box">
                            <i class="el-icon-s-comment"></i>
                            人工客服
                        </div>
                        <p class="right_box_bottom">
                            关注小米
                            <i class="iconfont icon-weibo"></i>
                            <i class="iconfont icon-weixin"></i>
                        </p>
                    </div>
                </div>
                <div class="footer_bottom_box">
                    <p>
                        <span class="text">小米商城</span>
                        <span class="text_dec">|</span>
                        <span class="text">MIUl</span>
                        <span class="text_dec">|</span>
                        <span class="text">米家</span>
                        <span class="text_dec">|</span>
                        <span class="text">米聊</span>
                        <span class="text_dec">|</span>
                        <span class="text">多看</span>
                        <span class="text_dec">|</span>
                        <span class="text">游戏</span>
                        <span class="text_dec">|</span>
                        <span class="text">政企服务</span>
                        <span class="text_dec">|</span>
                        <span class="text">小米天猫店</span>
                        <span class="text_dec">|</span>
                        <span class="text">小米集团隐私政策</span>
                        <span class="text_dec">|</span>
                        <span class="text">小米公司儿童信息保护规则</span>
                        <span class="text_dec">|</span>
                        <span class="text">小米商城隐私政策</span>
                        <span class="text_dec">|</span>
                        <span class="text">小米商城用户协议</span>
                        <span class="text_dec">|</span>
                        <span class="text">问题反馈</span>
                        <span class="text_dec">|</span>
                        <span class="text">Select Location</span>
                    </p>
                    <p class="bottom_describ">
                        <span>©mi.com </span> 京ICP证110507号 <span>京ICP备10046444号</span> <span>京公网安备11010802020134号</span> <span>京网文[2020]0276-042号</span>
                        <br> <span>（京）网械平台备字（2018）第00005号</span> <span>互联网药品信息服务资格证（京）-非经营性-2014-0090 </span> <span>营业执照</span>  <span>医疗器械质量公告</span>
                        <br> <span>增值电信业务许可证</span> 网络食品经营备案（京）【2018】WLSPJYBAHF-12 <span>食品经营许可证</span>
                        <br> 违法和不良信息举报电话：185-0130-1238 <span>知识产权侵权投诉</span> 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
                    </p>
                    <div class="bottom_pic_box">
                      
                        <img src="./assets/images/bottom1.png" alt="">
                        <img src="./assets/images/bottom2.png" alt="">
                        <img src="./assets/images/bottom3.png" alt="">
                        <img src="./assets/images/bottom4.png" alt="">

                    </div>
                </div>
            </div>
        </div>
    <!-- 底部end -->
  </div>
</template>

<script>
    export default {
        methods:{
            
            handleCommand(command) {
                if(command == 'my') {
                    this.$router.push('/my/myMsg')
                } else if(command == 'order') {
                    this.$router.push('/my/order/end')
                } else if(command == 'like'){
                    this.$rouetr.push('/my/like')
                } else {
                    this.$store.state.username = ""
                }
               
                
            },
             backtop(){
                var timer = setInterval(function(){
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    let ispeed = Math.floor(-osTop / 5); 
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                    // this.isTop = true;
                    if(osTop === 0){
                        clearInterval(timer);
                    }
                },30)
            }
        }
    }
</script>

<style lang="scss">

  .header{
        width: 100%;
        color:#B0B0B0 ;
        font-size: 12px;
        background-color: #333333;
        .contain{
            width:1226px;
            margin: 0 auto;
            padding: 15px 0 ;
            li{
                margin:0 8px;
                display: inline-block;
                cursor: pointer;
                position: relative;
                .imgagebox{
                    position: absolute;
                    visibility: hidden;
                    top: 30px;
                    padding: 10px;
                    left: -20px;
                    background-color: #fff;
                    &::before{
                        position: absolute;
                        top: -16px;
                        left: 40px;
                        display: block;
                        content: "";
                        width: 0x;
                        height: 0;
                        border-top: 8px solid transparent;
                        border-left: 8px solid transparent;
                        border-right: 8px solid transparent;
                        border-bottom: 8px solid #fff;
                    }
                    img{
                        width: 80px;
                    }
                   
                }
            .box{
                visibility: hidden;
                position: absolute;
                width: 200px;
                height: 80px;
                left: -100px;
                top:19px ;
                background-color: #fff;
                z-index: 1001;
                border: 1px solid #f0f0f0;
                .text{
                    text-align: center;
                    line-height: 80px;
                    font-size: 12px;
                    color: #B0B0B0;
                }
            }
            
            .cart{
                position: absolute;
                top: -26px;
                width: 100px;
                height: 45px;
                text-align: center;
                line-height: 40px;
                color: #ddd;
                background-color: rgba(255, 255, 255,.3);
            }
             &:hover{
                .imgagebox{
                    visibility: visible;
                }
            }

        }
        .cart-box{
            width: 100px;
        }
            li:hover{
                color: #fff;
                .box{
                    visibility: visible;
                }
                .cart{
                    color: #FB7D1F;
                }
            }
        }
    }

.aside{
      position: fixed;
      right: 0;
      top: 100px;
      width: 70px;
      z-index: 1000;
      ul{
        background-color: #fff;
        border-top: 1px solid #f0f0f0;
        border-left: 1px solid #f0f0f0;
        li{
          padding: 5px;
          box-sizing: border-box;
          text-align: center;
          font-size: 14px;
          color: #b0b0b0;
          border-bottom: 1px solid #f0f0f0;
          .aside_box{
            position: absolute;
            visibility: hidden;
            top: 0;
            right: 90px;
            padding:10px ;
            background-color: #fff;
            z-index: 99;
            .text{
              padding: 5px 10px ;
            }
            &::after{
              display: block;
              content: "";
              position: absolute;
              top: 20px;
              left: 120px;
              width: 0px;
              height: 0;
              border-left: 10px solid #fff;
              border-top:  10px solid transparent;
              border-right:  10px solid transparent;
              border-bottom:  10px solid transparent;
            }
            img{
              width: 100px;
              height: auto;
              transform: scale(1);
            }
          }
          img{
            display: block;
            width: 60px;
            height: 60px;
            transform: scale(.7);
          }
          img:nth-child(2){
            display: none;
          }
          &:hover{
             img:nth-child(2){
              display: block;
            }
            img:nth-child(1){
              display: none;
            }
           .aside_box{
             visibility: visible;
             img{
               display: block;
             }
           }
          }
        }
      }
      
      .back_top{
        margin-top: 20px;
        width: 70px;
        // height: 70px;
        border: 1px solid #f0f0f0;
        color:#b0b0b0 ;
        background-color: #fff;
        text-align: center;
        // line-height: 70px;
        font-size: 14px;
        padding: 10px 0;
        i{
          font-size: 40px;
          margin-bottom: 10px;
        }
      }
}

.footer{
        width: 100%;
        padding-bottom: 20px;
        background-color: #fff;
        .footer_box{
            width: 1226px;
            margin: 0 auto;
        }
        .flex_footer_box{
            display: flex;
            padding: 20px 0;
            border-bottom:1px solid #ccc;
            font-size: 14px;
            li{
                width: 20%;
                text-align: center;
                border-right: 1px solid #f0f0f0;
                &:hover{
                    color:#FB7D1F;
                    cursor: pointer;
                }
                .iconfont{
                    font-size: 20px;
                }
            }
        }
        .friend_flex_box{
            padding-top: 20px;
            display: flex;
        }
        .left_box{
            width: 976px;
            display: flex;
            li{
                flex: 1;
                ul {
                    font-size: 12px;
                    li{
                        margin-bottom: 10px;
                        cursor: pointer;
                    }
                    li:hover{
                        color: #FF6700;
                    }
                    li:nth-child(1){
                        margin-bottom: 10px;
                        font-size: 14px;
                    }
                }
            }
        }
        .right_box{
            width: 250px;
            height: 112px;
            text-align: center;
            border-left: 1px solid #cccccc;
            .photo_title{
                color: #FF6718;
                font-size: 16px;
            }
            .desc_time{
                font-size: 12px;
                color: #5F5750;
                margin:  10px 0;
            }
            .right_msg_box{
                width: 120px;
                height: 30px;
                line-height: 30px;
                font-size: 12px;
                color: #FF6718;
                border: 1px solid hsl(21, 100%, 55%);
                margin: 0 auto;
                i{
                    font-size: 16px;
                }
                &:hover{
                    background-color: #FF6718;
                    color: #fff;
                    i{
                        color: #fff;
                    }
                }
            }
            .right_box_bottom{
                &:hover{
                    color: #FF6718;
                }
                margin-top: 10px;
                font-size: 12px;
                i{
                    margin-left: 10px;
                }
            }
        }
        .footer_bottom_box{
            span{
                cursor: pointer;
                margin-right: 7px;
                font-size: 14px;
                color: #757575;
                &:nth-last-child(1){
                    margin-right: 0;
                }

            }
            .text:hover{
                color: #FF6700;
            }
            .bottom_describ{
                margin-top: 15px;
                font-size: 14px;
                color: #333;
                span{
                    color: #6F6D6D;
                    cursor: pointer;
                    &:hover{
                        color: #FF6700;
                    }
                }
            }
            .bottom_pic_box{
                margin-top: 10px;
                img{
                    width: auto;
                    height: 28px;
                    margin-right: 20px;
                }
                img:nth-child(1){
                    height: 57px;
                }
            }
        }
    }
</style>
