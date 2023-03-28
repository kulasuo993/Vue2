<template>
    <div class="hello">
        <!-- <a :href="url"><slot></slot></a>

        <button type="submit">
            <slot>Submit</slot>
        </button> -->
        <header style="color:orange">
            <slot name="header"></slot>
        </header>
        <main style="color: pink;">
            <slot></slot>
          {{ user.firstname }}
        </main>
        <footer style="color: red;">
            <slot name="footer"></slot>
        </footer>
       <ul>
            <li v-for="todo in list" :key="todo.id">
                <slot name="todo" :todo="todo">
                    {{ todo.text }}
                </slot>
                
            </li>
            
       </ul>
            
    </div> 

</template>

<script>
    export default{
        name:'VueWork',
        data(){
            return{
                list:[{
                    text:'我是第1个',
                    id:1
                },
                {
                    text:'我是第2个',
                    id:2
                },
                {
                    text:'我是第3个',
                    id:3
                },
                {
                    text:'我是第4个',
                    id:4
                },]
            }
        },
        computed:{

        },
        props:['url','user','todos'],
        methods:{

        }
    }
</script>