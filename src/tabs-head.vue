<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <!--v-if 会控制 div 是否显示在 DOM 里-->
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
      // this.x = true
      // 新增一个 [更新UI任务]，到任务队列里面
      // console.log(this.x)
      // console.log(item)
      // console.log(vm.$el)
      // console.log(vm.$el.getBoundingClientRect())
      // this.$nextTick(()=>{
        // 新增一个函数，放到任务队列里面
        let {width,height,top,left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
        // this.$refs.line.style.transform = `translateX(${left}px)`
      // })

    })
  }
}
</script>
<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: blue;
  $border-color: #ddd;
  .tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border-bottom: 1px solid $border-color;
    position: relative;
    > .line{
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 350ms;
    }
    > .actions-wrapper{
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>