<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GTabsHead',
  inject: ['eventBus'],  // 注入
  created(){
    // console.log('爷爷给爸爸的 eventBus')
    // console.log(this.eventBus)
    this.eventBus.$on('update:selected',(item,vm)=>{
      console.log(item)
      console.log(vm)
      // console.log(vm.$el.getBoundingClientRect())
    })
  }
}
</script>
<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: blue;
  .tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border: 1px solid red;
    position: relative;
    > .line{
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      width: 100px;
    }
    > .actions-wrapper{
      margin-left: auto;
    }
  }
</style>