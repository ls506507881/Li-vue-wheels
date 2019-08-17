<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GTabsBody',
  inject: ['eventBus'],  // 注入
  created(){
    // console.log('爷爷给body的 eventBus')
    // console.log(this.eventBus)
    // this.eventBus.$on('update:selected',(name)=>{
    //   console.log(name)
    // })
  }
}
</script>
<style lang="scss">
  .tabs-body{

  }
</style>