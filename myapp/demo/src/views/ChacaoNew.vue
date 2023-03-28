<template>
    <div class="chachao">
        插槽new
        
    <SlotPage1 :arry="tableList">
        <template v-slot:one="list">
            <p>{{ list.item.id}}</p>
        </template>
        <template v-slot:two="list">
            <p>{{ list.item.name}}</p>
        </template>
        <template v-slot:three="list">
            <p>{{ list.item.price}}</p>
        </template>
        <template v-slot:four="list">
            <p v-if="list.item.pic"><img :src="list.item.pic" alt=""></p>
            <p v-else>-</p>
        </template>
        <template v-slot:five="list">
            <p v-if="list.item.createTime">{{ list.item.createTime}}</p>
            <p v-else>-</p>
        </template>
    </SlotPage1>
      
        
     
    </div>
</template>

<script>
    import SlotPage1 from '@/components/SlotPage1.vue'
    export default{
        name:'ChaCaoNew',
        components:{
            SlotPage1
        },
        comments:{
           
        },
        data() {
            return {
                tableList:[{
                    pic:'https://img12.360buyimg.com/n1/s200x200_jfs/t1/93125/22/34835/60912/636e72edE4dd61d7f/fe61462f735d706a.jpg',
                    name:'vue 从入门到发疯',
                    dollar:'￥',
                    price:'20',
                    checkNum:1,
                    maxNum:7,
                    checked: true,
                    createTime:'2023-3-26 20:45',
                    id:1
                },{
                    pic:'',
                    name:'vue 从发疯到冷静',
                    dollar:'￥',
                    price:'30',
                    checkNum:1,
                    maxNum:3,
                    checked: false,
                    createTime:'2023-3-27 20:45',
                    id:2
                    
                },{
                    pic:'https://img13.360buyimg.com/n1/s200x200_jfs/t1/60357/31/21304/33585/62fe0334E717f0047/de524d1bfaa7c251.jpg',
                    name:'vue 从冷静到成仙',
                    dollar:'￥',
                    price:'40',
                    checkNum:1,
                    maxNum:4,
                    checked: false,
                    id:3
                },{
                    pic:'https://img13.360buyimg.com/n1/s200x200_jfs/t1/60357/31/21304/33585/62fe0334E717f0047/de524d1bfaa7c251.jpg',
                    name:'vue end',
                    dollar:'￥',
                    price:'50',
                    checkNum:1,
                    maxNum:4,
                    checked: false,
                    createTime:'2023-3-26 20:45',
                    id:4
                }
                ],
                todos: [
                {
                    id: 0,
                    text: 'ziwei0',
                    isComplete: false
                },
                {
                    text: 'ziwei1',
                    id: 1,
                    isComplete: true
                },
                {
                    text: 'ziwei2',
                    id: 2,
                    isComplete: false
                },
                {
                    text: 'ziwei3',
                    id: 3,
                    isComplete: false
                }
                ]

        
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