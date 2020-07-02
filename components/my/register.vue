<template>
    <div class="page">
        <div class="bold">
            <div class="head">
                <router-link to="/">
                    <div class="logo">
                        <i class="iconfont icon-ele"></i>
                    </div>
                </router-link>
            </div>
            <p class="name">电子商城账号</p>
            <div class="form_box">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input type="text" v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    
                    <el-form-item>
                       
                        <el-button  class="submit" @click="submitForm('ruleForm')">立即注册</el-button>
                        
                    </el-form-item>
                </el-form>
                <!-- <p class="gologin">已有账号？ <router-link to="/login">去登录</router-link> </p> -->
            </div>
        </div>
        <div class="foot">
            <span>简体</span>
             <el-divider direction="vertical"></el-divider>
             <span>繁体</span>
              <el-divider direction="vertical"></el-divider>
              <span>English</span>
               <el-divider direction="vertical"></el-divider>
               <span>其他问题</span>
               <p>
                   小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
               </p>
        </div>
    </div>
</template>

<script>
    export default {
         data() {
            var checkUsername = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }
                callback()
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
            };
            return {
                ruleForm: {
                pass: '',
                checkPass: '',
                username: ''
                },
                rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                username: [
                    { validator: checkUsername, trigger: 'blur' }
                ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post("http://47.105.132.2:8000/register",this.ruleForm)
                        .then(req=>{
                            
                            if(req.data == 200){
                                
                                this.$store.state.username = this.ruleForm.username
                                this.$message({
                                    message: '注册成功',
                                    type: 'success'
                                })
                                this.$router.push('/home')
                            }else{
                                this.$message({
                                    message: '注册失败',
                                    type: 'success'
                                })
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
        },
        created(){
            this.$store.state.showAside=false // 侧边栏
            this.$store.state.showTop=false // 顶部导航
            this.$store.state.footer = false
        }
    }
</script>

<style lang="scss" scoped>
.page{
    background: #F9F9F9;
    padding-top: 50px;
    .bold{
        width: 800px;
        height: 550px;
        padding:0 30px;
        margin: 0 auto;
        background-color: #fff;
        .head{
            width: 100%;
            height: 50px;
            padding-bottom:40px ;
            .logo{
                width: 50px;
                height: 50px;
                text-align: center;
                line-height: 50px;
                color: #fff;
                background-color: #ff6700;
                margin: 0 auto;
                i{
                    font-size: 30px;
                    font-weight: bolder;
                }
            }
        }
        .name{
            font-size: 20px;
            color: #555;
            text-align: center;
            padding-bottom:30px ;
        }
        .form_box{
            width: 500px;
            margin: 0 auto;
            // .btn_box{
            //     margin: 0 auto;
            //     width: 150px;
            // }
            .submit{
                background-color: #ff6700;
                color: #fff;
                width: 100%;

            }
        }
    }
    .gologin{
        text-align: right;
        font-size: 12px;
    }
    .foot{
        text-align: center;
        margin-top: 50px;
        p{
            padding: 30px 0;
        }
    }
}
</style>