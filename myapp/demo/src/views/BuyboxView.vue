<template>
    <div class="buybox">
        <button @click="about">about</button>
        <button @click="buy1">buy</button>
        <div v-if="showPop" class="pop">
            <BuyCarbox  @edit="useredit" :userInfoData="userDate" @addUser="userAdd" @hidePop="hidePop"></BuyCarbox>
        </div>

        <p>购物车2</p>
        <button @click="add">添加商品</button>

        <div class="table">
            <input type="checkbox" v-model="allList" @change="allChoose">全选/全不选
            <ul>
                <li v-for="(item,index) in list"  :key="index">
                    <input type="checkbox" v-model="item.checked" :value="item"  class="checkbox1" @change="itemChoose">
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
                    <button class="change" @click="edit(index)">修改</button>
                </li>
            </ul>
            <p class="allPrice">总金额：{{addPrice}}</p>
        </div>

        <div v-if="showPop1" class="pop">
            <BuyCarbox1  @edit="useredit" :userInfoData="userDate" @addUser="userAdd" @hidePop1="hidePop1">
            </BuyCarbox1>
        </div>
    </div>  
</template>

<script>
// @ is an alias to /src
import BuyCarbox from '@/components/BuyCartbox.vue'
import BuyCarbox1 from '@/components/BuyCartbox1.vue'

export default {
    name: 'BuyboxView',

    components: {
        BuyCarbox,
        BuyCarbox1
    },

    data(){
        return{
            showPop:false,
            showPop1:false,
            userDate:{
                pic:'https://img13.360buyimg.com/n1/s200x200_jfs/t1/60357/31/21304/33585/62fe0334E717f0047/de524d1bfaa7c251.jpg',
                name:'',
                dollar:'￥',
                price:'',
                checkNum:1,
                maxNum:'',
                checked:false,
                index:''
            },
            allList:false,
            list:[{
                pic:'https://img12.360buyimg.com/n1/s200x200_jfs/t1/93125/22/34835/60912/636e72edE4dd61d7f/fe61462f735d706a.jpg',
                name:'vue 从入门到发疯',
                dollar:'￥',
                price:'20',
                checkNum:1,
                maxNum:7,
                id:1,
                checked:false
            },{
                pic:'https://img11.360buyimg.com/n1/s200x200_jfs/t1/201380/8/19336/82309/61c41c65E7ddfc9b9/b3e47e2171d4a6d7.jpg',
                name:'vue 从发疯到冷静',
                dollar:'￥',
                price:'30',
                checkNum:1,
                maxNum:3,
                id:2,
                checked:false
            },{
                pic:'https://img13.360buyimg.com/n1/s200x200_jfs/t1/60357/31/21304/33585/62fe0334E717f0047/de524d1bfaa7c251.jpg',
                name:'vue 从冷静到成仙',
                dollar:'￥',
                price:'40',
                checkNum:1,
                maxNum:4,
                id:3,
                checked:false
            }],
        }
    },
    computed:{
        addPrice(){
            var count =0
            this.list.forEach(item => {
                if(item.checked){
                    count += item.price*item.checkNum
                }
            });
            return count
        },
    },

    methods:{
        userAdd(data){
            this.list.push(data)
            this.showPop = false
            this.clearUserData()
            this.itemChoose()
        },
        del(index){
            this.list.splice(index,1) //只删这个 打印出来的this.checkList还是有三个
            //this.checkList = this.checkList.filter(item => item.id!=id)
            this.itemChoose()
        },
        allChoose(){
            if(this.allList){
                this.list.forEach(item => {
                    item.checked = true
                })
            }else{
                this.list.forEach(item => {
                    item.checked = false
                })
            }       
            this.itemChoose()
        },
        itemChoose(){
            let num = 0
            this.list.forEach(item => {
                if(item.checked){
                    num ++
                }
            })
            if(num === this.list.length){
                this.allList = true
            }else{
                this.allList = false
            }
        },
        add(){
            this.showPop = true
        },
        edit(index){
            this.showPop1 = true
            this.userDate = JSON.parse(JSON.stringify(this.list[index]))
            this.userDate.index = index
        },
        useredit(data){
            this.$set(this.list,data.index,data)
        },
        hidePop(){
            this.showPop = false 
        },
        hidePop1(){
            this.showPop1 = false
            this.clearUserData()
        },
        clearUserData(){
            this.userDate={
                pic:'https://img13.360buyimg.com/n1/s200x200_jfs/t1/60357/31/21304/33585/62fe0334E717f0047/de524d1bfaa7c251.jpg',
                name:'',
                dollar:'￥',
                price:'',
                checkNum:1,
                maxNum:'',
            }
        },
        about(){
            this.$router.push({
                name:'about',
                params:{
                    id:11
                }
            })
        },
        buy1(){
            this.$router.push({
                path:'/buy',
                query:{
                    id:666
                }
            })
        }
    },
}
</script>

<style scoped>
  .table{
        width: 600px;
        margin: 10px auto ;
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

    .pop{
        position: fixed;
        z-index: 1;
        width: 1000px;
        height: 1000px;
        top:0%;
        left:0;
        right:0;
        margin: 0 auto;
        background: rgba(0 ,0, 0, .9);
    }
</style>