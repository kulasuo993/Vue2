<template>
  <div>
    左侧组件
  </div>
</template>

<script>
export default {
  name: 'LeftPage',
  props: {
  },
  created(){
    console.log('Left组件 created')
  },
  destroyed(){
    console.log('Left组件 destroyed')
  },
  activated(){
    console.log('Left组件 被激活了')
  },
  deactivated(){
    console.log('Left组件 被缓存了')
  },
  methods: {
  },
}
</script>

