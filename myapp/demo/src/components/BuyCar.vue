<template>
    <div class="hello">
        <p>{{ word }}</p>
            <div class="box">
                <span>书名：</span> 
                <input type="text" placeholder="书名" class="input1" v-model="useritem.name">
                <span>价格:</span>
                <input type="text" placeholder="价格" class="input2" v-model="useritem.price">
                <span>限购数量:</span>
                <input type="text" placeholder="限购数量" class="input2" v-model="useritem.maxNum">
                <button @click="add" style="margin-right: 5px;">
                    <span v-if="editType == '0'" class="int">添加</span>
                    <span v-if="editType == '1'" class="int">修改</span>
                </button>
                <button @click="reset">重置</button>
        </div>
    </div>
 
  </template>
 

 
<script>
  export default {
    name:'BuyCar',
    data(){
        return{
            useritem : this.userInfoData
        }
    },
    computed:{ 
    },
    props: ['word','userInfoData','editType'],
    watch:{
        userInfoData :function(){
        this.useritem = this.userInfoData
        }
    },
    methods:{
        //添加：输入框信息传递给BuyView
        add(){
            //editType = 0的时候 按钮为添加
            if(this.editType == 0){
                this.$emit('addUser', this.useritem) 
            // = 1 的时候 按钮为修改
            }else if(this.editType == 1){
                this.$emit('edit', this.useritem)
            }
                this.clearUserData()
        },
        //重置输入框信息
        reset(){
            this.clearUserData()
        },
        //重置信息函数
        clearUserData(){
            this.useritem={
                pic:'https://img13.360buyimg.com/n1/s200x200_jfs/t1/60357/31/21304/33585/62fe0334E717f0047/de524d1bfaa7c251.jpg',
                name:'',
                dollar:'￥',
                price:'',
                checkNum:1,
                maxNum:'',
            }
        }
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .table{
        width: 600px;
        margin: 0 auto ;
        border: 1px solid black;
        
    }
   
    li:first-child{
        margin-top: 0;
    }
    ul{
        width: 500px;
    }
    li{
        margin-top: -130px;
        list-style-type: none;
    }
    .img{
        width: 100px;
        height: 100px;
        display: block;
        
    }   
    h4{
        display: block;
        position: relative;
        top: -105px;
        left:60px;
        width: 200px;
    }
    h6{
        position: relative;
        top: -105px;
        left: -150px;
        color: red;
    }
    h5{
        position: relative;
        top: -152px;
        left: -130px;
        color: red;
        font-size: 18px;
    }
    .checkbox1{
       position: relative;
       left: -260px;
       top: 50px;
    }
    .numBtn{
        position: relative;
        top: -245px;
        left: 50px;
    }
    .allPrice{
        font-size: 20px;
        font-weight: 800;
        margin-top: 0px;
        margin-left: -250px;
    }
    .delete{
        position: relative;
        top: -268px;
        left: 130px;
    }
    

  </style>