<template>
    <div class="slot">
        <h1 style="color: pink;">插槽2</h1>
        <table  style="width: 1200px;border: 1px solid black;border-collapse: collapse;">
            <tr>
                <th style="width: 5%;  text-align: left;height: 30px;border: 1px solid black">序号</th>
                <th style=" width: 24%; text-align: left;border: 1px solid black;">姓名</th>
                <th style="width: 24%;  text-align: left;border: 1px solid black">价格</th>
                <th style="width: 24%;  text-align: left;border: 1px solid black">图片</th>
                <th style="width: 24%;text-align: left;border: 1px solid black">创建时间</th>
            </tr>
            <tr v-for="item in arry" :key="item.id" style="border: 1px solid black;">
                <td style="border: 1px solid black;text-align: left;"><slot :item="item" name="one"></slot></td>
                <td style="border: 1px solid black;text-align: left;"><slot :item="item" name="two"></slot></td>
                <td style="border: 1px solid black;text-align: left;"><slot :item="item" name="three"></slot></td>
                <td style="border: 1px solid black;text-align: left;"><slot :item="item" name="four"></slot></td>
                <td style="border: 1px solid black;text-align: left;"><slot :item="item" name="five"></slot></td>
                <!-- <th><slot :item="item" name="two"></slot></th> -->

                <!-- <th style="width: 5%;  text-align: left;height: 30px;border: 1px solid black">{{ item.id }}</th>
                <th style=" width: 24%; text-align: left;border: 1px solid black;">{{ item.name }}</th>
                <th style="width: 24%;  text-align: left;border: 1px solid black">{{ item.price }}</th>
                <th style="width: 24%;  text-align: left;border: 1px solid black"><img :src="item.pic" alt=""></th>
                <th style="width: 24%;text-align: left;border: 1px solid black">{{ item.createTime }}</th> -->
            </tr>
        </table>
    </div>
</template>

<script>
    export default{
        name:"SlotPage1",
        data() {
            return {
                user:{
                    name:'xiaoming',
                    age:12
                }
            }
        },
        props:['arry'],
        methods:{

        },
        comments:{

        },
        computed:{

        }
    }
    
</script>

<style scoped>
 
</style>