let mixin = {
    created() {
        // console.log('我是mixin里面的created')
    },
    methods: {
        hello(){
            console.log('hello来自mixin')
        }
    },
}

export default mixin