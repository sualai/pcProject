<template>
  <div>
    <div class="hearder">
      <div class="hearder_container clearfix">
        <div class="fl">
          <router-link to="/">
            <div class="logo">
              <i class="iconfont icon-ele"></i>
            </div>
          </router-link>
          <span class="title">确认订单</span>
        </div>
        <p class="top_nav fr">
          <el-dropdown  @command="handleCommand">
            <span class="el-dropdown-link">
              {{ $store.state.username }}
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
          <span class="my_order">我的订单</span>
        </p>
      </div>
    </div>
    <div class="body">
      <div class="body_content">
        <h3>收货地址</h3>
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in addressList" :key="index">
                <div class="address_box" :class="{'select':selectAddress == index}" @click="selectAddress=index">
                    <h3 class="name" >{{item.name}}</h3>
                    <p class="phone">{{ item.phone }}</p>
                    <p class="adress_name">{{ item.addr }}</p>
                    <p class="address_detail">{{ item.detail }}</p>

                    <p class="hide">
                      <span  @click="editAddress(index)">修改</span>
                      <span @click="del(item.id)">删除</span>
                    </p>
                </div>
             </el-col>
            <el-col :span="6">
                <div class="address_empty_box">
                    <p class="emp" >
                         <i class="el-icon-circle-plus" @click="addressTip=true"></i>
                        <br />新增收货地址
                    </p>
                </div>
            </el-col>
        </el-row>
       
        <h3>商品及优惠券</h3>
        <el-row :gutter="20"  v-for="(item,index) in goodsList" :key="index">
          <el-col :span="12">
            <img :src="item.img" class="img" alt />
            <span>{{item.name}}</span>
            <span>{{item.colorStyle}}</span>
            <span>{{ item.containerStyle }}</span>
          </el-col>
          <el-col :span="6">{{ item.price }} x {{ item.num }}</el-col>
          <el-col :span="6">
            <span class="num">{{ item.price * item.num }}元</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <h3>配送方式</h3>
          </el-col>
          <el-col :span="21">
            <span class="num">快递配送（运费10元）</span>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="3">
            <h3>发票</h3>
          </el-col>
          <el-col :span="21">
            <span class="num">
              <span>电子普通发票</span>
              <span>个人</span>
              <span>商品说明</span>
              <span>修改></span>
            </span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="3">
            <p>
              <i class="el-icon-circle-plus"></i>
              <span>使用优惠券</span>
            </p>
            <p class="cart">
              <i class="el-icon-circle-plus"></i>
              <span>使用小米礼品卡</span>
            </p>
          </el-col>
          <el-col :offset="16" :span="3">
            <p>
              商品件数:
              <span class="num fr"> {{ totalNum }} 件</span>
            </p>
            <p>
              商品总价:
              <span class="num fr">{{ totalPrice }}</span>
            </p>
            <p>
              优惠 活动:
              <span class="num fr">-0元</span>
            </p>
            <p>
              优惠券抵扣:
              <span class="num fr">-0元</span>
            </p>
            <p>
              运费:
              <span class="num fr">10元</span>
            </p>
            <p>
              应付总额:
              <span class="num fr price">{{ totalPrice + 10 }}元</span>
            </p>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <div class="btn_box">
          <el-button class="gocart" @click="$router.go(-1)">返回购物车</el-button>
          <el-button class="pay" @click="goPay">去结算</el-button>
        </div>
      </div>
    </div>

    <el-dialog title="请选择地址" :visible.sync="addressAddTip" width="30%" center>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addressAddTip = false">确 定</el-button>
      </span>
    </el-dialog>

    

  <el-dialog title="收货地址" :visible.sync="addressTip" @closed="closeDialog">
    
  <el-form :model="address" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
          <el-input type="text" v-model="address.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
          <el-input type="number" v-model="address.phone"></el-input>
      </el-form-item>
      <el-form-item label="选择地址" prop="value" >
          <el-cascader v-model="address.value" :options="options"></el-cascader>
      </el-form-item>
        <el-form-item label="详细地址" prop="detail" >
          <el-input v-model="address.detail" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
  </el-form>
</el-dialog>


   
  </div>
</template>

<script>
import option from "../../assets/js/eare"
export default {
  data() {
      var checkphone = (rule, value, callback) => {
        if (!value) {
        return callback(new Error('请输入手机号'));
        }
        setTimeout(() => {
        
            if (value.length != 11) {
                callback(new Error('请输入正确格式的手机号'));
            } else {
                callback();
            }
        
        }, 100);
    };
    var validatename = (rule, value, callback) => {
        if (value === '') {
        callback(new Error('请输入收货人'));
        } else {
        
            callback();
        }
    };
    var validatevalue = (rule, value, callback) => {
    
        if (value === '') {
            callback(new Error('请选择地址'));
        }  else {
            if(value.length == 0){
                callback(new Error('请选择地址'));
            }
            callback();
        }
    };
    var validatedetail = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请填写详细地址'));
        } else {
              if(value.length == 0){
                callback(new Error('请填写详细地址'));
            }
            callback();
        }
    };
    return {
      addressTip:false,
      address: {
          id:null,
          name:'',
          value: [],
          phone:'',
          detail:'',
          addr:''
      },
      addressList:[],
      addressAddTip: false,
      options: option,
      isEdit:false,
      editId:null,
      selectAddress:null,
      goodsList:[],
      rules: {
            detail: [
                { validator: validatedetail, trigger: 'blur' }
            ],
            name:[
                { validator: validatename, trigger: 'blur' }
            ],
            value:[
                { validator:validatevalue, trigger: 'blur' }
            ],
            phone: [
                { validator: checkphone, trigger: 'blur' }
            ]
        }
    };
  },
 computed:{
   totalNum(){
     return this.goodsList.reduce((total,item)=>{
            return total + item.num
        },0)
   },
   totalPrice(){
     return this.goodsList.reduce((total,item)=>{
        return total + (item.num * item.price)
     },0)
   }
 },
  methods: {
    closeDialog(){
      this.address.name = this.address.phone = this.address.detail = this.address.addr = ""
      this.address.id = null
      this.address.value = []
          
    },
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
    formatDate(str){
      const dd = new Date(str)
      const d = dd.getDate()
      const m = dd.getMonth() + 1
      const y = dd.getFullYear()
      const h = dd.getHours()
      const min = dd.getMinutes()
      const s = dd.getSeconds()
      return `${y}-${m}-${d} ${h}:${min}:${s}`
    },
    createId(str){
      return new Date(str).getTime()
    },
    del(id){
      const index =  this.addressList.findIndex(item=>item.id == id)
      this.addressList.splice(index,1)
      this.$store.commit("address/del",id)
    },
    goPay() {
      if (this.selectAddress == null ) {
        this.addressAddTip = true;
        return ;
      }
      this.open()

    },
    editAddress(index) {
        this.addressTip = true
        this.isEdit = true
        this.editId = index
        Object.assign(this.address,this.addressList[index])
    },
    addAddress(){
        this.addressTip = false
        let add = ""
        this.options.forEach((item) => {
            if(item.value == this.address.value[0]){
                add += item.label +"/"
                for(let i = 0 ; i < item.children.length ; i++) {
                    if(item.children[i].value == this.address.value[1]){
                        add += item.children[i].label +"/"
                        for(let j = 0 ; j < item.children[i].children.length ; j ++ ) {
                            if(item.children[i].children[j].value == this.address.value[2]){
                                add += item.children[i].children[j].label
                            }
                        }
                    }
                }
            }
        })
        this.address.addr = add
        if(this.address.name==""||this.address.photo==""||this.address.addr ==""){
          return ;
        }
        if(this.isEdit) {
            Object.assign(this.addressList[this.editId],this.address)
            this.$store.commit("address/edit",this.address)
            this.isEdit = false
        }else {
            this.address.id = this.createId(new Date())
            let add = {}
            Object.assign(add,this.address)
            this.addressList.unshift(add)
            this.$store.commit("address/add",add)
        }

    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
        if (valid) {
            this.addAddress()
        } else {
            return false;
        }
        });
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
        this.addressTip = false
    },
     open() {
        const _this = this
        const h = this.$createElement;
        let orderId = new Date().getTime() + parseInt(Math.random()*99999 + 100000)
        let id = this.createId(new Date())
        let time = this.formatDate(new Date())
        let address = this.addressList[this.selectAddress]

        this.$msgbox({
          title: '支付订单',
          center:true,
          message: h('p', null, [
            h('p', {style:'color:#ff6700;font-size:18px;text-align:center;'}, (this.totalPrice + 10) +'元'),
            
          ]),
          showCancelButton: true,
          confirmButtonText: '确定支付',
          cancelButtonText: '取消',
          
        }).then(() => {
          // id:'',         //订单id 唯一标识
          // orderId:"" ,   // 订单编号
          // orderGoods:[], //订单商品
          // orderType:0,   // 订单状态 
          // address:{} ,   // 收货地址信息
          _this.$store.commit('order/add',{
              id,
              orderId,
              address,
              time,
              totalPrice:this.totalPrice + 10,
              orderGoods:this.goodsList,
              orderType:1
          })
          this.$store.commit("cart/removeOrder")
          this.$message({
            type: 'info',
            message: '支付成功'
          });
          this.$router.push('/my/order/all')
        }).catch(()=>{
          _this.$store.commit('order/add',{
              id,
              orderId,
              address,
              time,
              totalPrice:this.totalPrice + 10,
              orderGoods:this.goodsList,
              orderType:0
          })
          this.$store.commit("cart/removeOrder")
            this.$message({
            type: 'info',
            message: '待支付'
          });
          this.$router.push('/my/order/unpay')
        });
      }
  },
  created() {
    this.$store.state.showAside = false;
    this.$store.state.showTop = false;
    this.$store.state.footer = true
    // this.cartList = JSON.parse(JSON.stringify(this.cartList))
    let goods=[]
    this.$store.state.cart.cartList.forEach(item=>{
      if(item.isSelect){
        goods.push({
          id:item.id,
          img:item.img,
          name:item.name,
          num:item.num,
          price:item.newPrice,
          colorStyle:item.colorStyle,
          containerStyle:item.containerStyle,
        })
        if(item.save) {
          goods.push({
            id:null,
            name:item.name+"意外保障服务",
            img:require('../../assets/images/save.png'),
            price:349,
            num:1,
            colorStyle:null,
            containerStyle:null
          })
        }
          if(item.longer) {
            goods.push({
              id:null,
              name:item.name+"延长保修服务",
              img:require('../../assets/images/save.png'),
              price:159,
              num:1,
              colorStyle:null,
              containerStyle:null
            })
          }
          if(item.cound) {
            goods.push({
              id:null,
              name:"云空间年卡500G",
              img:require('../../assets/images/yun.jpg'),
              price:239,
              num:1,
              colorStyle:null,
              containerStyle:null
            })
          }
      }
    })
    this.goodsList = JSON.parse(JSON.stringify(goods))
    this.addressList
    Object.assign(this.addressList,this.$store.state.address.addressList)
  },
  beforeDestroy(){
    this.$msgbox = null
  }
};
</script>

<style lang="scss" scoped>
.hearder {
  width: 100%;
  border-bottom: 2px solid #ff6700;
  .title {
    font-size: 24px;
    color: #333;
    margin-left: 20px;
  }
  .top_nav {
    font-size: 12px;
    color: #666;
    cursor: pointer;
    span:hover {
      color: #ff6700;
    }
    .el-dropdown-link {
      font-size: 14px;
    }
  }
}
.hearder_container {
  padding: 20px 0;
  width: 1226px;
  margin: 0 auto;
  line-height: 50px;
  .logo {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: #ff6700;
    vertical-align: middle;
    line-height: 50px;
    text-align: center;
    i{
      font-size: 30px;
      font-weight: bolder;
      color: #fff;
    }
  }
  .title {
    font-size: 18px;
    margin-right: 20px;
  }
  // p{
  //     display: inline-block;
  //     width:1176px ;
  //     text-align: right;
  //     font-size: 12px;
  // }
}
.body {
  overflow: hidden;
  width: 100%;
  background-color: #f5f5f5;
  .body_content {
    width: 1226px;
    background-color: #fff;
    margin: 30px auto;
    padding: 30px 20px;
    box-sizing: border-box;
    h3 {
      margin: 10px 0;
      color: #555;
    }
    .address_box{
        &.select{
            border: 1px solid #ff6700;
        }
        width: 280px;
        height: 200px;
        padding: 20px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        .name{
            font-size: 18px;
        }
        &>p{
            color: #666;
            font-size: 16px;
        }
        .hide{
            margin-top: 20px;
            text-align: right;
            color: #ff6700;
            visibility: hidden;
            cursor: pointer;
           span{
             margin: 0 5px;
           }
        }
         &:hover{
             .hide{
                visibility: visible;
             }
                
            }
    }
    .address_empty_box {
      width: 280px;
      height: 200px;
      border: 1px solid #ccc;
      text-align: center;
      padding-top: 70px;
      color: #ccc;
      box-sizing: border-box;
      .emp>i {
          color: #ccc;
            font-size: 30px;
        }
    }
    .img {
      width: 50px;
      vertical-align: middle;
    }
    .el-row {
      padding-top: 20px;
      color: #555;
      font-size: 14px;
      .num {
        color: #ff6700;
        span {
          margin-right: 10px;
        }
      }
      .cart {
        margin-top: 10px;
      }
      .el-icon-circle-plus {
        color: #ff6700;
        font-size: 18px;
        margin-right: 10px;
        vertical-align: middle;
      }
      .el-col-21 {
        line-height: 40px;
      }
      .el-col-offset-16 {
        p {
          margin-top: 5px;
        }
      }
    }
    .btn_box {
      text-align: right;
      .el-button {
        width: 160px;
        height: 40px;
      }
      .gocart {
        margin-right: 20px;
        color: #ccc;
      }
      .pay {
        color: #fff;
        background-color: #ff6700;
      }
    }
  }
}
</style>