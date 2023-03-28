<template>
  <div class="home">
    <!-- 标签自带的属性 -->
    <!-- <h1 title="这是一个组件">这是一个组件</h1> -->
    <!-- 自定义属性 -->
    <!-- <h1 :title="abc">这是一个组件</h1> -->
    <!-- 父传子：自定义属性/方法 -->
    <!-- <HelloWorld :username="name" :age="age" :money="money" :changeMoney="changeMoney"/> -->

    

    <AddUser :userDate="userdata" @addUser="userAdd"  @edit="useredit" :editType="editType"></AddUser>
    <button @click="ceshi">111</button>
    <div>
      <table class="table">
        <thead>
            <tr>
                <th >编号</th>
                <th >姓名</th>
                <th >密码</th>
                <th >邮箱</th>
                <th >操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for = "(item,index) in list" :key="index">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.password}}</td>
                <td>{{item.postbox}}</td>
                <td>
                    <button @click="del(index)">删除</button>
                    <button @click="edit(index)">修改</button>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import AddUser from '@/components/AddUser.vue'

export default {
  name: 'HomeView',
  components: {
    AddUser
  },
  data(){
    return {
      editType:0, //0添加 1修改
      list: [{
            name:'wawa',
            password:123456,
            postbox:'123@136.com',
            id:1
        },{
            name:'rose',
            password:789456,
            postbox:'523@136.com',
            id:2
        },{
            name:'jack',
            password:456123,
            postbox:'1523@136.com',
            id:3
        }],
      userdata:{
            name:'',
            password:'',
            postbox:'',
            id:'4'
      }
    }
  },
  methods: {
    ceshi(){
      console.log(this.list)
    },
    del(index){
            this.list.splice(index, 1)
        },
    
    userAdd(data){
      this.list.push(data)  
    },
    edit(index){
      this.userdata = JSON.parse(JSON.stringify(this.list[index]))
      this.userdata.index = index
      this.editType = 1
    },

      useredit(data){
        console.log(data)
        this.$set(this.list,data.index,data)
        this.editType = 0
      }
      
      
    
  },
}
</script>

<style scoped>
 
        .table{
            border: 1px solid #ccc;
            border-collapse: collapse;
            margin: 20px auto 0;
        }
        th,td{
            border: 1px solid #ccc;
        }
        th{
            text-align: left;
        }
        th,td{
            width: 180px;
            margin-left: 60px;
        }
        th:nth-child(4),td:nth-child(4){
            width: 300px;
        }
</style>

