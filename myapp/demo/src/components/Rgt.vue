<template>
  <div class="hello">
    右侧组件
  </div>
</template>

<script>
export default {
  name: 'RgtPage',
  props: {
  },
  created(){
    console.log('Rgt组件 created')
  },
  destroyed(){
    console.log('Rgt组件 destroyed')
  },
  activated(){
    console.log('Rgt组件 被激活了')
  },
  deactivated(){
    console.log('Rgt组件 被缓存了')
  },
  methods: {
  },
}
</script>
