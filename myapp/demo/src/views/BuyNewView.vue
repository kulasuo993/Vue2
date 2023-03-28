<template>
  <div class="buy">
    <BuyCar :word="msg" :editType="editType" @edit="useredit" :userInfoData="userDate" @addUser="userAdd"></BuyCar>
  
    <div class="table">
        <input type="checkbox" v-model="$store.state.buynew.allList" @change="allChoose">全选/全不选
        <ul>
          <li v-for="(item,index) in $store.state.buynew.list" :key="index">
              <input type="checkbox" v-model="item.checked" :value="item" class="checkbox1" @change="itemChoose()">
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
              <button class="change" @click="editList(item, index)">修改</button>
          </li>
        </ul>
        <p class="allPrice">总金额：{{addPrice}}</p>
    </div>
  </div>  

</template>
<script>
// @ is an alias to /src
import BuyCar from '@/components/BuyCar.vue'
import { mapGetters} from 'vuex'

export default {
  name: 'BuyView',
  components: {
    BuyCar
  },
  data(){
    return {
      editType:0, //0添加 1修改
      msg:'购物车3',
      allList:'',
      list:[],
      userDate:{
        pic:'https://img13.360buyimg.com/n1/s200x200_jfs/t1/60357/31/21304/33585/62fe0334E717f0047/de524d1bfaa7c251.jpg',
        name:'',
        dollar:'￥',
        price:'',
        checkNum:1,
        maxNum:'',
        checked: false,
        index: ''
      },
    }
  },
  created(){
    this.allList = this.$store.state.buynew.allList;
    this.list = this.$store.state.buynew.list;
  },
  computed:{
      ...mapGetters({
        addPrice: 'buynew/addPrice'
      }),  
    },
    methods:{
      del(index){
        this.$store.commit('buynew/del',index)
      },
      // 全选功能
      allChoose(){
        if(this.$store.state.buynew.allList){
          this.$store.commit('buynew/allCheckList', true)
        }else{
          this.$store.commit('buynew/allCheckList', false)
        }         
      },
      // 选择列表每一项
      itemChoose(){
        this.$store.commit('buynew/itemChoose')
        console.log(this.$store.state.buynew.allList)
      },
      // 添加商品
      userAdd(data){
        this.editType = 0
        this.$store.commit('buynew/addUser1', data) 
      },
      // 修改列表商品
      editList(item, index){
        this.editType = 1
        this.userDate = JSON.parse(JSON.stringify(item))
        this.userDate.index = index
      },
      useredit(data){
        this.$store.commit('buynew/useredit', data) 
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