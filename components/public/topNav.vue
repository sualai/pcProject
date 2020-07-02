<template>
  <div>
    <div class="nav_box">
      <div class="top_nav clearfix">
        <div class="box1 fl clearfix">
          <router-link to="/">
            <div class="logo_box fl">
              <i class="iconfont icon-ele"></i>
            </div>
          </router-link>
          <div class="hot_logo fl" v-show="!$store.state.iscategory">
            <img src="../../assets/images/hot_logo.gif" alt />
          </div>
          <div class="fl category" v-show="$store.state.iscategory" @mouseenter="showcategory" @mouseleave="hidecategory">
            全部商品
          </div>
          <div class="category_list_box" v-show="category" @mouseenter="showcategory" @mouseleave="hidecategory"  > 
               <tabel-change :addColor="true" :loopleft = "loopleft" :loooleftlist = "loooleftlist" :bgc="'#fff'" :color="'#ff6700'" :border="'#ff6700'"></tabel-change>
          </div>
        </div>
        <div class="box2 fl clearfix">
          <span
            v-for="(item,index) in navList"
            :key="index"
            @mouseleave="leave"
            @mouseenter="enter(index)"
          >{{item}}</span>
          <span>服务</span>
          <span>社区</span>
        </div>
        <div class="box3 fr">
          <div class="server_box fl">
            <input type="text" @blur="cacelFunc" @focus="changeFunc($event)" v-model="searchQuery" />
          </div>
          <div class="botton_box" @click="$router.push('/category')">
            <i class="el-icon-search" ></i>
          </div>
          <ul class="searchbox" v-show="showSearch">
            <li v-for="(item,index) in searchQueryList" @click="$router.push('/category')"  :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="nav_list" v-show="flag" @mouseenter="onlist" @mouseleave="outlist">
        <div class="list_box">
          <div class="list_box_content" v-for="(item,index) in topList[topId]" :key="index" @click="$router.push({path:'/details',query:{id:item.id}})">
            <div class="img_box">
              <img :src="item.img" alt />
            </div>
            
            <div class="foot">
              <p>{{ item.name }}</p>
              <p class="price">{{item.price}}元起</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import looplist from "../../assets/js/data"
import tabelChange from "../../components/public/tabelChange.vue"
export default {
  data() {
    return {
      loopleft:["手机电话卡","电视盒子","笔记本显示器平板","家电插线板","出行穿戴","智能路由器","电源配件","健康儿童","耳机音箱","生活箱包"],
      loooleftlist:looplist,
      category:false,
      showSearch: false,
      flag: false,
      time:null,
      searchQuery: "家电",
      navList: [
        "小米手机",
        "Redmi红米",
        "电视笔记本",
        "家电",
        "路由器",
        "智能硬件"
      ],
      searchQueryList: [
        "小米手环5",
        "Redmi K30 Pro",
        "小米手机",
        "小米10",
        "净水器",
        "全部商品",
        "米家插线板快充版27W",
        "Redmi手环",
        "小米10Pro"
      ],
      topId:0,
      topList: [
       [
        {
          id:'topnav1',
          img: require("../../assets/images/list_01.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav2',
          img: require("../../assets/images/list_02.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav3',
          img: require("../../assets/images/list_03.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav4',
          img: require("../../assets/images/list_04.png"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav5',
          img: require("../../assets/images/list_05.png"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav6',
          img: require("../../assets/images/list_06.png"),
          name: "小米青春版5G",
          price: 999
        }
       ],
       [
        {
          id:'topnav11',
          img: require("../../assets/images/list_11.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav12',
          img: require("../../assets/images/list_12.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav13',
          img: require("../../assets/images/list_13.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav14',
          img: require("../../assets/images/list_14.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav15',
          img: require("../../assets/images/list_15.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav16',
          img: require("../../assets/images/list_16.webp"),
          name: "小米青春版5G",
          price: 999
        }
       ],
       [
        {
          id:'topnav21',
          img: require("../../assets/images/list_21.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav22',
          img: require("../../assets/images/list_22.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav23',
          img: require("../../assets/images/list_23.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav24',
          img: require("../../assets/images/list_24.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav25',
          img: require("../../assets/images/list_25.jpg"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav26',
          img: require("../../assets/images/list_26.jpg"),
          name: "小米青春版5G",
          price: 999
        }
       ],
       [
        {
          id:'topnav31',
          img: require("../../assets/images/list_31.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav32',
          img: require("../../assets/images/list_32.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav33',
          img: require("../../assets/images/list_33.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav34',
          img: require("../../assets/images/list_34.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav35',
          img: require("../../assets/images/list_35.png"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav36',
          img: require("../../assets/images/list_36.webp"),
          name: "小米青春版5G",
          price: 999
        }
       ],
       [
        {
          id:'topnav41',
          img: require("../../assets/images/list_41.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav42',
          img: require("../../assets/images/list_42.png"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav43',
          img: require("../../assets/images/list_43.jpg"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav44',
          img: require("../../assets/images/list_44.png"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav45',
          img: require("../../assets/images/list_45.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav46',
          img: require("../../assets/images/list_46.webp"),
          name: "小米青春版5G",
          price: 999
        }
       ],
       [
        {
          id:'topnav51',
          img: require("../../assets/images/list_51.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav52',
          img: require("../../assets/images/list_52.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav53',
          img: require("../../assets/images/list_53.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav54',
          img: require("../../assets/images/list_54.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav55',
          img: require("../../assets/images/list_55.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav56',
          img: require("../../assets/images/list_56.jpg"),
          name: "小米青春版5G",
          price: 999
        }
       ],
       [
        {
          id:'topnav61',
          img: require("../../assets/images/list_61.jpg"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav62',
          img: require("../../assets/images/list_62.jpg"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav63',
          img: require("../../assets/images/list_63.jpg"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav64',
          img: require("../../assets/images/list_64.webp"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topnav65',
          img: require("../../assets/images/list_65.jpg"),
          name: "小米青春版5G",
          price: 999
        },
        {
          id:'topna66',
          img: require("../../assets/images/list_66.webp"),
          name: "小米青春版5G",
          price: 999
        }
       ],
      ]
    };
  },
  methods: {
    enter(index) {
      this.topListId = index;
      this.flag = true;
      this.topId = index
    },
    leave() {
      this.flag = false;
    },
    onlist() {
      this.flag = true;
    },
    outlist() {
      this.flag = false;
    },
    changeFunc(event) {
      event.target.classList.add("fouc");
      this.showSearch = true;
      event.target.parentElement.parentElement.classList.add("fouc");
    },
    cacelFunc(event) {
      event.target.classList.remove("fouc");
      this.showSearch = false;
      event.target.parentElement.parentElement.classList.remove("fouc");
    },
    showcategory(){
        this.category = true
    },
    hidecategory(){ 
      this.category = false
    }
  },
  components:{
    tabelChange
  },
  beforeDestroy(){
    clearTimeout(this.time)
  }
};
</script>

<style lang="scss" scoped>
.nav_box {
  width: 100%;
  .nav_list {
    position: absolute;
    width: 100%;
    border-top: 1px solid #ddd;
    background-color: #fff;
    box-shadow: 0px 0px 1px 1px #f0f0f0, 0 0 0 0 #f0f0f0, 0 -1px 1px 1px #f0f0f0,
      0 0 0 0 #f0f0f0;
    z-index: 10000;
    .list_box {
      width: 1226px;
      margin: 0 auto;
      padding: 15px 0;
      display: flex;
      .list_box_content {
        text-align: center;
        font-size: 12px;
        color: #333333;
        .img_box {
          height: 120px;
          border-right: 1px solid #d0d0d0;
          box-shadow: 1px 0 10 1px #f0f0f0;
        }
        .price {
          color: #ff6700;
        }
        .foot{
          padding-top: 30px;
        }
      }
      .list_box_content:nth-last-child(1) {
        .img_box {
          border-right: 0;
        }
      }
    }
  }
}
.top_nav {
  width: 1226px;
  margin: 0 auto;
  padding: 20px 0 0 0;
}
.box1 {
  height: 70px;
    position: relative;
}
.logo_box {
  width: 55px;
  height: 55px;
  margin-right: 10px;
  background-color: #ff6700;
  text-align: center;
  color: #fff;
  line-height: 55px;
  // border-radius: 50%;
  i{
    font-size: 30px;
    font-weight: bolder;
  }
}
.category{

  width: 100px;
  text-align: center;
  line-height: 50px;
  height: 80px;
  color: #706c69;
  
}
.category_list_box{
    position: absolute;
    width:1100px;
    top: 50px;
    left: 0px;
    .list_flex_box{
      display: flex;
    }
    .left_box{
      width: 300px;
      border:1px  solid #ff6700;
    
    }
    .right_box{
      display: flex;
      flex-direction: column;

    }
  }
.box2 {
  margin: 0 20px;
  height: 70px;
  line-height: 55px;

  span {
    display: block;
    float: left;
    height: 100%;
    margin: 0 8px;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
    &:hover {
      color: #fb7d1f;
    }
  }
}
.box3 {
  width: 300px;
  border: 1px solid #b0b0b0;
  height: 50px;
  // line-height: 50px;
  position: relative;
  // box-sizing: border-box;
  &.fouc {
    border: 1px solid #ff6700;
  }
  .searchbox {
    position: absolute;
    top: 51px;
    width: 251px;
    left: -1px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom: 1px solid #ff6700;
    border-left: 1px solid #ff6700;
    border-right: 1px solid #ff6700;
    padding-top: 10px;
    z-index: 99;
    li {
      // line-height: 0px;
      color: #706c69;
      margin-bottom: 10px;
      padding-left: 20px;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
    }
  }
  .server_box {
    width: 250px;
    height: 50px;
    input {
      border: 0;
      width: 100%;
      height: 100%;
      padding-left: 10px;
      box-sizing: border-box;
      font-size: 16px;
      color: #b0b0b0;
      outline: none;
      border-right: 1px solid #b0b0b0;
      &.fouc {
        border-right: 1px solid #ff6700;
      }
    }
  }
  .botton_box {
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    color: #706c69;
    &:hover{
      background-color: #ff6700;
      color: #ffff;
    }
  }
}
</style>