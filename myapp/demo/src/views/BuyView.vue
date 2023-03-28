<template>
  <div class="buy">
    <BuyCar :word="msg" :editType="editType" @edit="useredit" :userInfoData="userDate" @addUser="userAdd">
    </BuyCar>
    
      <div class="table">
          <input type="checkbox" v-model="$store.state.buy.allList" @change="allChoose">全选/全不选
          <ul>
              <li v-for="(item,index) in $store.state.buy.list"  :key="index">
                  <input type="checkbox" v-model="item.checked" :value="item" class="checkbox1" @change="itemChoose">
                  <img :src="item.pic" alt="" class="img">
                  <h4>{{ item.name }}</h4>
                  <h6>{{ item.dollar }}</h6>
                  <h5>{{ item.price }}</h5>
                  <div class="numBtn">
                      <button @click="item.checkNum--" :disabled="item.checkNum===1">-</button>
                      <span>{{ item.checkNum }}</span>
                      <button @click="item.checkNum++" :disabled="item.checkNum==item.maxNum">+</button>
                  </div>
                  <button @click="del(index,item.id)" class="delete">删除</button>
                  <button class="change" @click="edit(item,index)">修改</button>
              </li>
          </ul>
          <p class="allPrice">总金额：{{addPrice}}</p>
      </div>
  </div>  

</template>

<script>
// @ is an alias to /src
import BuyCar from '@/components/BuyCar.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'BuyView',
  //移入的插件名称
  components: {
    BuyCar
  },
  data(){
    return {
      editType:0, //0添加 1修改
      msg:'购物车1',
      userDate:{
            pic:'https://img13.360buyimg.com/n1/s200x200_jfs/t1/60357/31/21304/33585/62fe0334E717f0047/de524d1bfaa7c251.jpg',
            name:'',
            dollar:'￥',
            price:'',
            checkNum:1,
            maxNum:'',
            checked:false,
            index:'' //也可以不加？,
        },
    }
  },
  computed:{
      //映射modules里面的mapGetters里面的addprice方法
      ...mapGetters({
          addPrice: 'buy/addPrice'
      }),
  },
  created(){
  },
  methods:{
    del(index){
      this.$store.commit('buy/del',index)
    },
    //多选框 如果多选框的选择状态为真，传递给modules里面的buy里的allListChecked方法的变量为true
    //反之，传递给modules里面的buy里的allListChecked方法的变量为false
    allChoose(){
      if(this.$store.state.buy.allList){
        this.$store.commit('buy/allListChecked',true)
      }else{
        this.$store.commit('buy/allListChecked',false)
      }     
    },
    itemChoose(){
      this.$store.commit('buy/itemChoose')
    },
    //点击插件BuyCar里面的添加按钮后 添加按钮不变
    userAdd(data){
      this.$store.commit('buy/addUser1', data) 
      this.editType = 0
    },
    //主件的修改按钮后，插件BuyCar里面的添加按钮变成修改，且将当前list选择的信息传递给插件BuyCar的输入框
    edit(item,index){
      this.editType = 1
      this.userDate = JSON.parse(JSON.stringify(item))
      this.userDate.index = index
    },
    //点击插件BuyCar里面的修改按钮后 修改按钮变成添加
    useredit(data){
      this.$store.commit('buy/useredit', data) 
      this.editType = 0
    },
  },
  
}
</script>

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
        left:100px;
        width: 150px;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
    }
    h6{
        position: relative;
        top: -105px;
        left: -150px;
        color: red;
    }
    h5{
        display: block;
        position: relative;
        top: -152px;
        left: 110px;
        color: red;
        font-size: 18px;
        text-align: left;
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
    .change{
        position: relative;
        top: -268px;
        left: 130px;
    }
</style>