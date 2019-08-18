<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GTabsPane',
  inject: ['eventBus'],  // 注入
  data(){
    return {
      active: false
    }
  },
  created(){
    this.eventBus.$on('update:selected',(name)=>{
      console.log(name)
    })
  }
}
</script>
<style lang="scss">
  .tabs-pane{

  }
</style>