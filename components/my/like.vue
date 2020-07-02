<template>
    <div>
        <h3>喜欢的商品</h3>
        <div class="empty" v-show="!(likeList.length)">
            <h3>还没有喜欢的商品</h3>
        </div>
        <el-row>
            <el-col :span="8" v-for="(item,index) in likeList" :key="index">
                <div class="content_box">
                    <img :src="item.img" alt="">
                    <p class="text">{{ item.name }} + {{ item.containerStyle }} {{item.colorStyle}} </p>
                    <p class="price">{{item.newPrice}}元</p>
                    <div class="btn_box">
                         <el-button class="del" @click="del(index)">删除</el-button>
                          <el-button class="detail" @click="$router.push({path:'/detail',query:{id:item.id}})">查看详情</el-button>
                    </div>
                </div>
                  <el-divider></el-divider>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                likeList:[]
            }
        },
        methods:{
            
            del(index){
                this.$store.commit('like/del',index)
                this.likeList.splice(index,1)
            }
        },
        created(){
            Object.assign(this.likeList,this.$store.state.like.likeList)
        }
    }
</script>

<style lang="scss" scoped>
h3{
    padding: 30px;
    font-size: 24px;
    color: #555;
}
.empty{
    h3{
        text-align: center;
    }
}
    .content_box{
        text-align: center;
        color: #555;
        padding: 30px;
        width: 100%;
        box-sizing: border-box;
        img{
            width: 200px;
        }
        .text{
            margin: 10px 0;
        }
        &:hover{
            .btn_box{
                visibility: visible;
            }
        }
        .btn_box{
            margin-top: 20px;
            visibility: hidden;
            .el-button{
                width: 100px;
            }
            .del:hover{
                background-color: rgb(117,117,117);
                color: #fff;
            }
            .detail{
                background-color: #ff6700;
                color: #fff;
            }
        }
    }
</style>