var vm = new Vue({
    el : "#app",
    data : {
        seen : true, //若为false 则不显示
        todos:[ {text:'hello'},
                {text:'word'},
                {text:'hello word'},],
        todo1 : true,
        message : 'hello Vue.js!', 
        message1: 'Hello' ,
        firstName: 'Foo',
        lastName: 'Bar',
        isAcitive : true,
        hasError:true,
        error:true,
        classObject:{
            active:true,
            'abc':true
        },
        activeClass: 'active',
        errorClass: 'text-danger',
        awesome:true,
        ok:0,
        list:[
            {message:'app'},
            {message:'blue'}
        ],
        parentMessage:'我是爸爸',
        list1:[
            {message:'div',age:13},
            {message:'span',age:14}
        ],
        list3:{
            title:'do you know?',
            author:'litongyuan',
            data:'2023-03-20'
        },
        numbers:[1,2,3,4,5],
        sets:[[1,2,3,4,5],[6,7,8,9,10]],
        whos:[
            {text:'hello'},
            {text:'word'},
            {text:'hello word'},
        ]
    },
    computed: {
        reversedMessage1: function () {
            return this.message1.split('').reverse().join('')
        },
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        },
        classObject1:function(){
            return{
                active:this.isAcitive && !this.error,
                abc:true,
                'text-danger': this.error
            }
        },
        evenNumbers:function(){
            return this.numbers.filter(function(number){
                return number % 2 ===0
            })
        },
       
    },
    watch: {
       
    },
    methods: {
        reverseMessage(){
        this.message = this.message.split('').reverse().join('')
        },
         reversedMessage2: function () {
        return this.message1.split('').reverse().join('')
        },
        even:function(numbers){
            return numbers.filter(function(number){
                return number % 2 ===0
            })
        }
    },

})

var vm1 = new Vue({
    el : '#app1',
    data:{
        abc :'你好呀',
        count:0,
        name:'hello Vue' 
    },
    computed:{

    },
    watch:{

    },
    methods:{
        greet:function(e){
            console.log(this.name + '!')
            if(e){
                console.log(e.target.tagName)
            }
        },
        say:function(message){
            console.log(message)
        },
        warn:function(message,event){
            if(event){
                //event.preventDefault()
                console.log(event)
            }
            console.log(message)
        },
        dothis:function(){
            console.log('你按下了回车')
        },
        keyDel:function(){
            console.log('你回退了')
        },
        space:function(){
            console.log('你按下了空格')
        },
        esc:function(){
            console.log('你按下了ESC')
        },
        clear:function(){
            console.log('你按下了alt+c')
        },
        ctrlEnter:function(){
            console.log('你按下了ctrl+Enter')
        },
        clictrl:function(){
            console.log('你按住了ctrl加左键后发送了111')
        }
        
    }

})

var text = new Vue({
    el:'#text',
    data:{
       message:'',
       checked:false,
       checknames:[],
       picked:'',
       selected:'',
       selected1:[],
       selected2:'A',
       options:[
        {text:'One',value:'A'},
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
        ],
        msg:'',
        trim:''
    },
    computed:{

    },
    methods:{

    }
})

// vm1.greet() 方法也可以用js原生

// var todo = new Vue({
//     el : '#todo-list-example',
//     data:{

//     },
//     computed:{

//     },
//     watch:{

//     },
//     methods:{

//     }
// })