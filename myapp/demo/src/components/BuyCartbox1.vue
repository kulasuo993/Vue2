<template>
    <div class="hello">
        <h1>修改用户信息</h1>
        <div class="box">
            <span class="hide" @click="hidePop1">x</span>
            <span class="name">书名：</span> <input type="text" placeholder="书名" class="input1" v-model="useritem.name">
            <span class="name">价格:</span><input type="text" placeholder="价格" class="input2" v-model="useritem.price">
            <span class="name">限购数量:</span><input type="text" placeholder="限购数量" class="input2" v-model="useritem.maxNum">
            <div class="btn">
            <button @click="redit" style="margin-right: 5px;" class="btn1">修改</button>
            <button @click="reset" class="btn2">重置</button>
            </div>
        </div>
    </div>
  </template>
 
<script>
    export default {
        name: 'BuyCarbox1',
        data(){
            return{
                useritem:this.userInfoData,
            }
        },
        computed:{

        },
        props: ['userInfoData'],
        // watch:{
        //     userInfoData :function(){
        //     this.useritem = this.userInfoData
        //     console.log(this.editType)
        //     }
        // },
        methods:{
            redit(){
                this.$emit('edit', this.useritem)
                this.clearUserData()
                this.$emit('hidePop1',false)
            },
            reset(){
                this.clearUserData()
            },
            
            hidePop1(){
                console.log(111)
                this.$emit('hidePop1',false)
            },
            clearUserData(){
                this.useritem={
                        pic:'https://img13.360buyimg.com/n1/s200x200_jfs/t1/60357/31/21304/33585/62fe0334E717f0047/de524d1bfaa7c251.jpg',
                        name:'',
                        dollar:'￥',
                        price:'',
                        checkNum:1,
                        maxNum:'',
                        checked:false
                }
            },
        },
    }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .hide{
        position: absolute;
        font-size: 50px;
        color: red;
        right: 160px;
    }
    .box{
        width: 600px;
        height: 600px;
        border: 1px solid red;
        margin: 50px auto 0;
    }
    .name{
        margin-top: 50px;
        font-size: 18px;
        display: block;
        color: red;
    }
    input{
        width: 500px;
        margin-top: 20px;
    }
    .btn{
        margin-top: 30px;
    }
    
    .btn2{
        margin-left: 50px;
    }
  </style>