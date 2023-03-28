<template >
  <div class="about">
    <p>
      账号：
      <input type="text" v-model="account" @keyup.enter="dothis">
      <br><br>
      密码：
      <input type="password" v-model="password" @keyup.enter="dothis">
    </p>
    
    <button @click="login">登陆</button>
    <p class="p">{{ abc }}</p>
  </div>
</template>

<script>
  export default{
    name:'LoginView',
    components:{

    },
    computed:{

    },
    created(){
    },
    data(){
      return{
        account:'',
        password:'',
        abc:''
      }
    },
    methods:{
      login(){
        if(this.account == '1'&&this.password == 1){
          this.abc = '登陆成功！'
          window.loginType = true
          this.account = ''
          this.password = ''
        }else{
          this.abc = '登陆失败~'
          window.loginType = false
        }
      },
      dothis(){
        this.login()
      }
    }
  }
</script>

<style scoped>
  .about{
    width: 200px;
    height: 250px;
    border: 1px solid red;
    margin: 0 auto;
  }
  .about a{
    color: pink;
  }
  a.router-link-exact-active {
  color: #42b983;
  } 
  h3{
    font-weight: 800;
    color: red;
  } 
  .p{
    color: pink;
    font-size: 25px;
    font-weight: 800;
  }
</style>
