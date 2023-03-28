

let plugins = {
    install(Vue, options){
        console.log(options)
        Vue.directive('upper',(element,options)=>{
            element.innerHTML = options.value.toUpperCase()
          })

        Vue.directive('focus',{
            inserted:function(el){
                el.focus()
            }
        })
        
          //过滤器
        Vue.filter('priceFun', options =>{
            return `￥${options}`
        })

        Vue.filter('addFun',options=>{
            return `￥${options+50}`
        })

        Vue.prototype.$sayhello = function(){
            console.log('sayhello')
        }

        Vue.component('my-count',{
            render:function(cerateElement){
                return cerateElement(
                    'div',
                    [cerateElement(
                        'a',
                        { 
                            domProps:{
                                href:""
                            }
                        },
                        `${this.num}`
                    ),
                    cerateElement(
                        'button',
                        {
                             attrs: { class: 'test' },
                              on: { click: () => { this.num++ } } 
                        },
                        '按钮'
                    ),
                    ]
                )
            },
            data(){
                return{
                    num:10
                }
            },
            methods: {
                numFun(){
                    this.num ++
                }
            },
        })

        Vue.component('async-example',{
            render:function(cerateElement){
                return cerateElement('div',{},`我是插件上的${this.num}`)
            },
            data(){
                return{
                    num:0
                }
            }
        })
        
    }
}

export default plugins