<template>
    <div class="slot">
        <h1 style="color: pink;">插槽3</h1>
        <slot :tableList="tableList" name="other"></slot>
    </div>
</template>

<script>
    export default{
        name:"SlotPage2",
        data() {
            return {
                name:'111',
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
            }
        },
        props:[],
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