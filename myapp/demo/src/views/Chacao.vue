<template>
    <div class="chachao">
        插槽11
        <button @click="show = !show">
            toggle
        </button>
        <transition name="fade">
            <p v-if="show" style="color: red;">我等会就看不见咯</p>
        </transition>
        <!-- <SlotPage>
            <hr>
            <p style="color: red; font-size: 20px;">匿名卡槽:</p>
            <p>hello</p>
            <p>
                <img src="https://www.baidu.com/img/flexible/logo/pc/result.png">
            </p>
            <hr>
        </SlotPage> -->

        <!-- <SlotPage>
            <p slot="one">hello world</p>
            <p slot="two"><img src="https://www.baidu.com/img/flexible/logo/pc/result.png" alt=""></p> -->
            <!-- <template v-slot:one></template> -->
            <!-- <template v-slot:two><img src="https://www.baidu.com/img/flexible/logo/pc/result.png" alt=""></template> 
            <template #two>img不见咯</template>
        </SlotPage>-->
        <hr>
        
        <!-- <SlotPage>
            <template v-slot:other="abc1">
                <p>子传父:{{ abc1.abc.name }}</p>
                <p>{{ abc1.abc }}</p>
            </template>
        </SlotPage><hr> -->

        <table style="width: 1200px;margin-left: 4px;border: 1px solid black;border-collapse: collapse;">
            <tr>
                <th style="width: 5%;  text-align: left;height: 30px;border: 1px solid black">序号</th>
                <th style=" width: 24%; text-align: left;border: 1px solid black;">姓名</th>
                <th style="width: 24%;  text-align: left;border: 1px solid black">价格</th>
                <th style="width: 24%;  text-align: left;border: 1px solid black">图片</th>
                <th style="width: 24%;text-align: left;border: 1px solid black">创建时间</th>
            </tr>
        </table>
        <SlotPage  :tableList="tableList">
            
            <template slot-scope="scope">
                
                <table style="width: 1200px;border: 1px solid black;border-collapse: collapse">
                    <tr>
                        <th style="width: 5%; border: 1px solid black; text-align: left;height: 30px;border-bottom: 1px solid black;">{{ scope.todo.id }}</th>
                        <th style=" width: 24%;border: 1px solid black; text-align: left;border-bottom: 1px solid black;">{{ scope.todo.name }}</th>
                        <th style="width: 24%; border: 1px solid black; text-align: left;border-bottom: 1px solid black;">{{ scope.todo.price }}</th>
                        
                        <th style="width: 24%; border: 1px solid black; text-align: left;border-bottom: 1px solid black;">
                            <span v-if="scope.todo.pic"><img :src="scope.todo.pic" alt=""></span>
                            <span v-else>-</span>
                        </th>
                        <th style="width: 24%; border: 1px solid black; text-align: left;border-bottom: 1px solid black;border-right: 1px solid black;">
                            <span v-if="scope.todo.createTime">{{ scope.todo.createTime }}</span>
                            <span v-else>-</span>
                        </th>
                    </tr>
                    
                    
                </table>
               
            </template>
        </SlotPage>
        <el-table stripe :data="tableList" border style="width: 100%;">
            <el-table-column prop="id" label="序号" width="70%">
                <template slot-scope="scope">
                <span>{{ scope.$index + 1 }}</span>
                </template>
            </el-table-column>

            <el-table-column prop="name" label="姓名" />
            <el-table-column prop="price" label="价格" />
            <el-table-column prop="pic" label="图片">
                <template slot-scope="scope">
                <span v-if="scope.row.pic"><img :src="scope.row.pic"></span>
                <span v-else>-</span>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间">
                <template slot-scope="scope">
                <span>{{ scope.row.createTime ? scope.row.createTime : '-' }}</span>
                </template>
            </el-table-column>
        </el-table>
        <!-- <SlotPage :todos="tableList">
            <template slot-scope="slotProps">
                <span v-if="slotProps.todo.checked">✓</span>
                <span>{{slotProps.todo.name}}</span>
                <span>{{slotProps.todo.price}}</span>
            </template>
        </SlotPage> -->
    </div>
</template>

<script>
    import SlotPage from '@/components/SlotPage.vue'
    export default{
        name:'ChaCao',
        components:{
            SlotPage
        },
        comments:{
           
        },
        data() {
            return {
                show:true,
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