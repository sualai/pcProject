<template>
    <div>
        <h3>收货地址</h3>
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="address_empty_box">
                    <p class="emp" >
                         <i class="el-icon-circle-plus" @click="addressTip=true"></i>
                        <br />新增收货地址
                    </p>
                </div>
            </el-col>
            <el-col :span="8" v-for="(item,index) in addressList" :key="index">
                <div class="address_box" >
                    <h3 class="name" >{{item.name}}</h3>
                    <p class="phone">{{ item.phone }}</p>
                    <p class="adress_name">{{ item.addr }}</p>
                    <p class="address_detail">{{ item.detail }}</p>
                    <p class="hide" >
                        <span @click="editAddress(index)">修改</span>
                        <span @click="del(item.id)">删除</span>
                    </p>
                </div>
             </el-col>
            
        </el-row>

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
        data(){
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
                addressList:[],
                isEdit:false,
                editId:null,
                addressTip:false,
                options: option,
                address: {
                    name:'',
                    value: [],
                    phone:'',
                    detail:'',
                    addr:''
                },
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
            }
        },
        methods:{
            createId(str){
                return new Date(str).getTime()
            },
             closeDialog(){
                this.address.name = this.address.phone = this.address.detail = this.address.addr = ""
                this.address.id = null
                this.address.value = []     
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
                    // alert('submit!');
                } else {
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.addressTip = false
            },
            del(id){
                const index =  this.addressList.findIndex(item=>item.id == id)
                this.addressList.splice(index,1)
                this.$store.commit("address/del",id)
            },
            editAddress(index) {
                this.addressTip = true
                this.isEdit = true
                this.editId = index
                Object.assign(this.address,this.addressList[index])
            },
        },
        created(){
            Object.assign(this.addressList,this.$store.state.address.addressList)
        }
    }
</script>

<style lang="scss" scoped>

     h3 {
      margin: 10px 0;
      color: #555;
    }
    .el-col{
        margin-top: 10px;
    }
    .address_box{
        &.select{
            border: 1px solid #ff6700;
        }

        width: 300px;
        height: 200px;
        padding: 20px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        .address_detail{
            margin-top: 8px;
        }
        .adress_name{
            margin-top: 8px;
        }
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
      width: 300px;
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
</style>