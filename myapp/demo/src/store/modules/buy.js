const buy = {
    namespaced: true,
    state: {
        //全选框的选择状态
        allList:false,
        //固态添加表格信息
        list:[{
            pic:'https://img12.360buyimg.com/n1/s200x200_jfs/t1/93125/22/34835/60912/636e72edE4dd61d7f/fe61462f735d706a.jpg',
            name:'vue 从入门到发疯',
            dollar:'￥',
            price:'20',
            checkNum:1,
            maxNum:7,
            id:1,
            checked:false
        },{
            pic:'https://img11.360buyimg.com/n1/s200x200_jfs/t1/201380/8/19336/82309/61c41c65E7ddfc9b9/b3e47e2171d4a6d7.jpg',
            name:'vue 从发疯到冷静',
            dollar:'￥',
            price:'30',
            checkNum:1,
            maxNum:3,
            id:2,
            checked:false
        },{
            pic:'https://img13.360buyimg.com/n1/s200x200_jfs/t1/60357/31/21304/33585/62fe0334E717f0047/de524d1bfaa7c251.jpg',
            name:'vue 从冷静到成仙',
            dollar:'￥',
            price:'40',
            checkNum:1,
            maxNum:4,
            id:3,
            checked:false
        }],
        },

    getters: {
        //选购商品价格计算
        addPrice(state){
            var count = 0
            state.list.forEach(item => {
                if(item.checked){
                count += item.price*item.checkNum
                }
            });
                return count
            },
        },
    mutations: {
        //添加新商品
        addUser1(state, payload){
            state.list.push(payload)
            let num = 0
            state.list.forEach(item => {
                if(item.checked){
                    num ++
                }
            })
            if(num === state.list.length){
                state.allList = true
            }else{
                state.allList = false
            }
        },
        //删除已有商品
        del(state,index){
            state.list.splice(index,1) //只删这个 打印出来的this.checkList还是有三个
            let num = 0
            state.list.forEach(item => {
                if(item.checked){
                num++
                } 
            });
            if(num === state.list.length){
                state.allList = true 
            }else{
                state.allList = false 
            }
        },
        //修改选择的商品
        useredit(state,data){
            let tempdata = JSON.parse(JSON.stringify(state.list))
            tempdata[data.index] = data
            state.list = JSON.parse(JSON.stringify(tempdata))
        },
        //全选框
        allListChecked(state,payload){
            state.list.forEach(item => {
                item.checked = payload
            })
        },
        //单选框
        itemChoose(state){
            let num = 0
            state.list.forEach(item => {
                if(item.checked){
                    num ++
                }
            })
            if(num === state.list.length){
                state.allList = true
            }else{
                state.allList = false
            }
        },
    },

    actions: {
    },
}

export default buy