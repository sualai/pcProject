<template>
  <div>
    <div class="box"  @mouseenter="showLoopList=true" @mouseleave="leave">
      <div class="loop_aside" :style="[{'background':bgc},{'color':color},{'border':'1px solid'+border}]">
        <ul>
          <li
            :class="['left_li',{'isadd':addColor,'active':selectId==index}]"
            v-for="(item,index) in loopleft"
            :key="index"
            @mouseenter="enterFunc(index)"
            
          >
            {{item}}
            <i class="el-icon-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div
        class="loophover"
        v-show="showLoopList"
      >
      <!-- @mouseenter="showLoopList=true" -->
        <ul class="loop_hover_box clearfix">
          <li
            @click="$router.push('/details')"
            class="loop_bover_li"
            v-for="(rightItem,rightList) in loooleftlist[selectId]"
            :key="rightList + 99"
          >
            <div class="loop_bover_img">
              <img :src="rightItem.img" alt />
            </div>
            <p class="loop_bover_p">{{ rightItem.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectId:null,
      showLoopList: false,
      
    };
  },
  methods:{
    enterFunc(index) {
      
      this.showLoopList=true
      this.selectId = index
    },
    leave(){
      this.showLoopList=false
      this.selectId = null
    }
  },
  props: ["loooleftlist", "loopleft","bgc",'color','border','addColor']
};
</script>

<style lang="scss" scoped>
.loop_aside {
  position: absolute;
  top: 20px;
  left: 0px;
  z-index: 1000;
  width: 260px;
  border: 1px solid  #352C3A;
  color: #333;
  padding: 25px 0;
  box-sizing: border-box;
  .left_li {
    width: 260px;
    padding: 10px 30px;
    box-sizing: border-box;
    // color: #fff;
    font-size: 16px;
    &.active {
      background-color: #ff6700;
      color: #fff;
    }
    &.isadd:hover{
      color: #fff;
    }
    .el-icon-arrow-right {
      font-size: 20px;
      font-weight: bold;
      float: right;
    }
  }
}
.loophover {
  position: absolute;
  top: 20px;
  left: 260px;
  height: 488px;
  width: 100%;
  z-index: 1000;
  
}
.loop_hover_box {
  display: flex;
  flex-direction: column;
  max-width: 966px;
  height: 460px;
  flex-wrap: wrap;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  box-sizing: border-box;
  background-color: #fff;
  padding-left: 14px;
  .loop_bover_li {
    width: 226px;
    height: 75px;
    padding-top: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    transform: scale(0.8);
    .loop_bover_img {
      flex: 1;
      height: 100%;
    }
    .loop_bover_p {
      height: 100%;
      padding-top: 20px;
      box-sizing: border-box;
      font-size: 16px;
      color: #333333;
      box-sizing: border-box;
      flex: 2;
      margin-left: 10px;
    }
  }
}
</style>