<template>
    <div class="chachao">
        插槽new1
        
    <SlotPage2>
        <template v-slot:other="listData">
          <table style="width: 1200px;border: 1px solid black;border-collapse: collapse;">
            <tr>
                <th style="width: 5%;  text-align: left;height: 30px;border: 1px solid black">序号</th>
                <th style=" width: 24%; text-align: left;border: 1px solid black;">姓名</th>
                <th style="width: 24%;  text-align: left;border: 1px solid black">价格</th>
                <th style="width: 24%;  text-align: left;border: 1px solid black">图片</th>
                <th style="width: 24%;text-align: left;border: 1px solid black">创建时间</th>
            </tr>
            <tr v-for="item in listData.tableList" :key="item.id" style="border: 1px solid black;">
                <td style="border: 1px solid black;text-align: left;">{{ item.id }}</td>
                <td style="border: 1px solid black;text-align: left;">{{ item.name }}</td>
                <td style="border: 1px solid black;text-align: left;">{{ item.price }}</td>
                <td style="border: 1px solid black;text-align: left;">
                    <p v-if="item.pic"><img :src="item.pic" alt=""></p>
                    <p v-else>-</p>
                </td>
                <td style="border: 1px solid black;text-align: left;">
                    <p v-if="item.createTime">{{ item.createTime }}</p>
                    <p v-else>-</p>
                </td>
                <!-- 
                <td style="border: 1px solid black;text-align: left;"></td>
                <td style="border: 1px solid black;text-align: left;"></td>
                <td style="border: 1px solid black;text-align: left;"></td> -->
            </tr>
          </table>
        </template>
    </SlotPage2>
      
        
     
    </div>
</template>

<script>
    import SlotPage2 from '@/components/SlotPage2.vue'
    export default{
        name:'ChaCaoNew1',
        components:{
            SlotPage2
        },
        comments:{
           
        },
        data() {
            return {

            }
        },
        computed:{

        },
        methods: {
          
        },
    }
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

table,th,td,tr {
		border-style: none;
	}
</style>