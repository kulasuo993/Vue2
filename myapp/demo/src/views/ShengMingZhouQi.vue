<template>
  <div class="about">
      <h3>生命周期</h3>

      <hr>
      <h4>动态组件</h4>
      <button @click="changeFun('left')">左组件</button>
      <button @click="changeFun('rgt')">右组件</button>

      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
      <hr>
  </div>
</template>

<script>
  import left from '@/components/Left.vue'
  import rgt from '@/components/Rgt.vue'

  export default{
    name:'ShengMingZhouQi',
    components:{
      left,
      rgt
    },
    computed:{
     
    },
    data(){
      return{
        comName:'left'
      }
    },
    methods:{
      changeFun(name){
        this.comName = name
      }
    }
  }
</script>

<style scoped>
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
</style>
