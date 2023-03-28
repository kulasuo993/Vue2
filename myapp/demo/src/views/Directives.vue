<template>
    <div>
        <h1 style="color: pink;">插件</h1>
        <p v-upper="msg"></p>
        {{ msg }} <hr>

        <input type="text" v-focus>
        <!-- <input v-focus> -->
        <!-- 过滤器的用法 -->
        <p>价格显示：{{ price | priceFun }}</p>
        <p>价格显示：{{ price | addFun }}</p>
        <my-count></my-count>
        <async-example></async-example>
    </div>
</template>

<script>
    export default{
        name:'DirectivesPage',
        components:{

        },
        data(){
            return{
                msg:'hello world',
                price:100
            }
        },
        created(){
            console.log('我是当前页面的created')
        },
        mounted(){
            // this.hello()
            this.$sayhello()
        }
    }
</script>