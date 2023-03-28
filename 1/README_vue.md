# VUE(https://v2.cn.vuejs.org/v2/guide)
    是一套用于构建用户界面的渐进式框架，我们常说的vue,是指vue全家桶、vue技术栈
    最核心的是vue.js:
    路由
    状态管理
    脚手架
    axios
    UI组件库
    webpack
    es6....

    主流框架：vue(vue2.x/ vue3.x) react angular

# 语法: Vue 3 Snippets插件 {{}}
   1.只能放在文本节点处，不能写在属性节点处
   2.插值语法，只能放在模板内部使用，不能放在模板外部使用
   3.只能放表达式，任何有值得内容都是表达式
   4.不能放语句,可以放三目运算

# $mount 可以让一个vue实例与容器进行关联
    1.el
    2.$mount

# 事件绑定
    v-on:click: v-on是指令， click事件类型（dbldick，change），handle叫监听器,
    可以简写：@click="xxx"
    this: 表示vm实例
    this.name = 'xxx' // 数据是响应式得，数据变了，模板可重新渲染

    方法不能写成箭头函数：this指向window对象
    可以绑定多个事件: v-on="{click:clickMethod,mouseover:mouseoverFn}"
    写在methods中得方法，可以挂载载vm上

# 传参和事件对象
    1.传参
    2.不传参，监听器函数中得第1个参数是事件对象
    3.多个参数+事件对象： 需要手动传递事件对象，不叫e,叫$event
    事件对象作用： 阻止默认事件，如冒泡，鼠标位置
    4.e.target.value(经常使用)

# 事件的修饰符(可以连接使用)
    prevent：阻止默认事件（常用）；
    stop：阻止事件冒泡（常用）；
    once：事件只触发一次（常用）；
    capture：使用事件的捕获模式；
    self：只有event.target是当前操作的元素时才触发事件；

# v-model
    v-model就是vue的双向绑定的指令，能将页面上控件输入的值同步更新到相关绑定的data属性，也会在更新data绑定属性时候，更新页面上输入控件的值。
    文本输入框：
    radio：
    checkbox：
    select：单选、多选

# 键盘修饰符
    v-on:keyup.enter
    回车 => enter键
    删除 => delete键
    退回 => esc
    空格键 => space
    换行 => tab (特殊键, 必须配合keydown 去使用)
    上 => up 键
    下 => dpwn 键
    左 => left 键
    右 => right 键

# 指定
    1.v-bind:把数据绑定到属性节点处,v-bind:src,可以简写，不写v-bind
    注意单向绑定：
        1.把数据绑定到文本节点,通过{{}}；
        2.把数据绑定到属性节点处： 通过v-bind

    2.v-once:一次性绑定，数据改变，模板不会刷新

    3.v-text:用于把数据绑定到文本节点，不经常用
    v-html:会将html标签解析输出（谨慎使用，不安全代码）

    
    4.v-if:控制节点是否创建或者销毁,只要有指，就是表达式，会转化成true/false
    v-else-if:充当v-if的else-if块，可以链式的使用多次
    v-else:搭配 v-if 使用，v-else元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别
    这三者之间，不能有其他元素，否则条件表达式会失效

    5.template: 模板标签，也叫幽灵标签

    6.v-show:控制dom显示隐藏

    7.v-if和v-show的区别
    v-if 与 v-show 都能控制dom元素在页面的显示
    1、v-if 有更高的切换开销，v-show 有更高的初始渲染开销
    2、v-if 适合运营条件不大可能改变；v-show 适合频繁切换。
    3、v-if 通过动态向DOM树增删DOM元素，v-show 设置display来进行隐藏
    4、v-if 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件(重排和重绘)；v-show 只是简单的基于 CSS 切换（重绘）；
     如果需要非常频繁地切换，则使用v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。


    8.v-model的修饰符(多个修饰符可连用)
    v-mode.lazy:使得用户在输入数据之后，当数据失去焦点或点击回车时，才会进行数据的更新
     v-model.number:使用number修饰符来将输入的数字转为number类型
    v-model.trim:使用trim修饰符来去掉字符串首部或者尾部的所有空格


    9.v-for遍历：
        数组：(item, index) in list
        对象：(k,v,i) in obj

        注意：不要把v-if 和 v-for 同时用在一个元素上,因为v-for的优先级高于v-if,当v-if去判断条件时,v-for已经遍历结束




