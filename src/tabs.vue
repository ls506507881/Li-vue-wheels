<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'GTabs',
  props:{
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value){
        return ['horizontal','vertical'].indexOf(value) >= 0
      }
    }
  },
  data(){
    return {
      eventBus: new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  },
  // created(){
  //   // this.$emit('update:selected','xxx')
  //   this.$emit('update:selected','这是 this $emit 出来的数据')
  //   this.eventBus.$emit('update:selected','这是 this eventBus $emit 出来的数据')
  // },
  mounted(){
    // $children 只能获取子组件，获取不到子元素
    // if(this.$children.length === 0){
    //   throw new Error('tabs的子组件应该是tabs-head和tabs-nav,但你没有写子组件，')
    // }
    // this.$emit('update:selected','这是 this $emit 出来的数据')
    // console.log(this.$children)
    if(this.$children.length === 0){
      console && console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-nav,但你没有写子组件')
    }
    this.$children.forEach((vm)=>{
      // console.log(vm.$options.name)
      if(vm.$options.name==='GTabsHead'){
        vm.$children.forEach((childVm)=>{
          // console.log(item.$options.name) 
          if(childVm.$options.name === 'GTabsItem' && childVm.name === this.selected){
            console.log(childVm.$el)
            this.eventBus.$emit('update:selected',this.selected,childVm)
            console.log('事件触发了')
          }
        })
      }
    })
    this.eventBus.$emit('update:selected',this.selected)
  }
}
</script>
<style lang="scss">
  .tabs{

  }
</style>