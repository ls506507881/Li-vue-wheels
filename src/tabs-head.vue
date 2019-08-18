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
  mounted(){
    // console.log('爷爷给爸爸的 eventBus')
    // console.log(this.eventBus)
    this.eventBus.$on('update:selected',(item,vm)=>{
      // console.log(item)
      // console.log(vm.$el)
      // console.log(vm.$el.getBoundingClientRect())
      let {width,height,top,left} = vm.$el.getBoundingClientRect()
      console.log(width,height,top,left)
      this.$refs.line.style.width = `${width}px`
      // this.$refs.line.style.left = `${left}px`
      this.$refs.line.style.transform = `translateX(${left}px)`
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
      transition: all 350ms;
    }
    > .actions-wrapper{
      margin-left: auto;
    }
  }
</style>