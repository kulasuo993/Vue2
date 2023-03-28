<template>
    <div class="hello">
        <VueWork url="/profile" :user="user" >
            <template v-slot:header>
                <h1>Here might be a page title</h1>
            </template>
            
           
            
            <!-- <template v-slot:default="slotProps">
                {{ slotProps.user.firstname }}
                <p>A paragraph for the main content.</p>
                <p>And another one.</p>
            </template> -->

             <!-- 或者写成 -->
            <p>A paragraph for the main content.</p>
            <p>And another one.</p> 

            <template v-slot:footer>
                <p>Here's some contact info</p>
            </template>
        </VueWork>
        
     
        <p style="color: yellowgreen;">{{ user.lastname }}</p>
       

        <!-- <span>{{ user.lastname }}</span> -->
    </div>
    
</template>

<script>
    import VueWork from '@/components/VueText.vue'
    export default{
        name:'VueText',
        components:{
            VueWork
        },
        computed:{

        },
        data(){
            return{
                user:{
                    lastname:'同圆',
                    firstname:'李'
                },
                
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>