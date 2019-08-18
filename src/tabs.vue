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
    // this.$emit('update:selected','这是 this $emit 出来的数据')
    // console.log(this.$children)
    this.$children.forEach((vm)=>{
      // console.log(vm.$options.name)
      if(vm.$options.name==='GTabsHead'){
        vm.$children.forEach((item)=>{
          // console.log(item.$options.name) 
          if(item.$options.name === 'GTabsItem' && item.name === this.selected){
            console.log(item.$el)
            this.eventBus.$emit('update:selected',this.selected,item)
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