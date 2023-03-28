let vm = new Vue({
    el:"#box",
    data:{
        name1 : '',
        password1 : '',
        postbox1 : '',
        list:[{
            name:'wawa',
            password:123456,
            postbox:'123@136.com'
        },{
            name:'rose',
            password:789456,
            postbox:'523@136.com'
        },{
            name:'jack',
            password:456123,
            postbox:'1523@136.com'
        }]
    },
    methods: {
        add(){
            var newlist = {
                name : this.name1,
                password: this.password1,
                postbox : this.postbox1,
            }
            this.list.push(newlist)
            // this.name = this.password =this.postbox =''
        },
        reset(){
            this.name1 = this.password1 =this.postbox1 =''
        },
        
        del(index){
            console.log(index)
            this.list.splice(index, 1)
        }
    },
    
})