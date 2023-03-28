<template>
  <div class="hello">
    <h1>添加用户</h1>
    
    <span class="span1">用户名</span><input type="text" placeholder="请输入用户名" class="input1" v-model="useritem.name">
    <span>密码</span><input type="password" placeholder="请输入密码" class="input2" v-model="useritem.password">  
    <span>邮箱</span><input type="text" placeholder="请输入邮箱" class="input3" v-model="useritem.postbox">
    <div class="btn">
        <button class="add" @click="add" ><span v-if="editType == '0'" class="int">添加</span><span v-if="editType == '1'" class="int">修改</span></button>
        <button class="reset" @click="reset">重置</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddUser',
  data(){
    return {
      useritem : this.userDate
    }
  },
  props:['userDate','editType'],
  watch:{
    userDate :function(){
      this.useritem = this.userDate
      console.log(this.editType)
    }
  },
  methods:{
    add(){
      if(this.editType == 0){
        this.$emit('addUser', this.useritem)
      }else if(this.editType == 1){
        this.$emit('edit',this.useritem)
      }
      this.useritem = { 
        name:'',
        password:'',
        postbox:''
      }
    },

    reset(){
      this.useritem = { 
        name:'',
        password:'',
        postbox:''
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width: 1000px;
  height: 600px;
  border: 1px solid black;
  position: relative;
  margin: 50px auto 0;
}
span{
  display: block;
  margin-top: 10px;
}
.input1,.input2,.input3{
  width: 900px;
  margin-top: 15px;
  height: 20px;
}
.btn{
  width: 100%;
  height: 30px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin: 20px auto;
}
.add{
  display: block;
  width: 200px;
  height: 30px;
  background-color: greenyellow;
  margin-right: 10px;
}
.int{
  margin-top: 0px;
}
.reset{
  display: block;
  width: 200px;
  height: 30px;
  background-color: blue;
}
</style>
