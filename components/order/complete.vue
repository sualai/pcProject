<template>
  <div>
    <div class="empty" v-if="!orderList.length">
      <h2>目前没有交易订单</h2>
    </div>
    <div class="mag_box" v-for="(item,index) in  orderList" :key="index">
      <div class="pay_header clearfix">
        <p class="pay_title">待收货</p>
        <p class="fl">
          <span>{{ item.time }}</span>
          <el-divider direction="vertical"></el-divider>
          <span>{{ item.address.name }}</span>
          <el-divider direction="vertical"></el-divider>
          <span>订单号：{{ item.orderId }}</span>
          <el-divider direction="vertical"></el-divider>
          <span>在线支付</span>
        </p>
        <p class="fr">
          已付金额：
          <span>{{ item.totalPrice}}</span>元
        </p>
      </div>
      <el-row :gutter="20">
        <el-col :span="16">
          <div
            class="msg_content"
            v-for="(goodItem,goodIndex) in item.orderGoods"
            :key="goodIndex + 100"
          >
            <img :src="goodItem.img" :class="['img', 'fl',{'other':goodItem.id==null}]" alt />
            <div class="fl text">
              <p>{{ goodItem.name }} {{ goodItem.containerStyle }} + {{ goodItem.colorStyle }}</p>
              <p>
                {{ goodItem.price }} 元
                <i class="el-icon-close"></i>
                {{ goodItem.num }}
              </p>
            </div>
          </div>
        </el-col>
        <el-col :offset="4" :span="4">
          <el-button v-if="item.orderType==1" class="pay" @click="requireOrder(item.id)">确认收货</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: []
    };
  },
  methods: {
    requireOrder(id) {
      this.$store.commit("order/changeType", id);
      this.$router.push("/my/order/end");
    }
  },
  created() {
    this.orderList = this.$store.state.order.orderList.filter(item => {
      return item.orderType == 1;
    });
  }
};
</script>

<style lang="scss" scoped>
.empty {
  h2 {
    padding: 40px 0;
    color: #888;
    font-size: 18px;
    text-align: center;
  }
}
.mag_box {
  margin-top: 20px;
  border: 1px solid #ff6700;
}
.pay_header {
  color: #888;
  font-size: 12px;
  .pay_title {
    color: #ff6700;
    font-size: 16px;
    margin-bottom: 5px;
  }
  background-color: #fffaf7;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #ffe5d4;
  .el-col-20 {
    height: 80px;
  }
}
.img {
  width: 80px;
  &.other {
    transform: scale(0.8);
  }
}
.el-col-4 {
  margin-top: 10px;
}
.pay {
  background-color: #ff6700;
  color: #fff;
}
.msg_content {
  padding: 10px 0;
  height: 80px;

  .text {
    padding-top: 6px;
    color: #444;
    p:nth-child(2) {
      font-size: 14px;
    }
    .other_goods {
      padding-top: 10px;
    }
  }
}
</style>