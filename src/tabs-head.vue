<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>
<script>
export default {
  name: 'GTabsHead',
  inject: ['eventBus'],  // 注入
  created(){
    // console.log('爷爷给爸爸的 eventBus')
    // console.log(this.eventBus)
  }
}
</script>
<style lang="scss">
  .tabs-head{

  }
</style>