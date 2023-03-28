<template>
    <div class="slot">
        <!-- <slot>这是一个默认值</slot> -->
        <!-- <slot name="one">星期天</slot>
        <slot name="two">这是一张图片</slot> -->
        <!-- <slot name="other" :abc="user">这是一个默认值</slot> -->
      
        <ul> 
            <li v-for="todo in tableList" :key="todo.id" >
                <slot :todo="todo">
                </slot>
            </li>
        </ul>
         <!-- <ul>
            <li v-for="todo in todos" :key="todo.id">
                <slot :todo="todo">
                </slot>
            </li>
        </ul> -->
    </div>
</template>

<script>
    export default{
        name:"SlotPage",
        data() {
            return {
                user:{
                    name:'xiaoming',
                    age:12
                }
            }
        },
        props:['todos','tableList'],
        methods:{

        },
        comments:{

        },
        computed:{

        }
    }
    
</script>

<style scoped>
    ul{
        margin-left: -36px;
        margin-top: -2px;
    }
  
    li{
        list-style: none;
    }
    
</style>