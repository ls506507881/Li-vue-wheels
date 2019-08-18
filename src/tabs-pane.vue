<template>
  <div class="tabs-pane" :class="classes">
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
  props: {
    name: {
      type: String|Number,
      required: true
    }
  },
  computed:{
    classes(){
      return { 
        active: this.active 
      }
    }
  },
  created(){
    this.eventBus.$on('update:selected',(name)=>{
      // console.log(name)
      // if(name === this.name){
      //   this.active = true
      // }else{
      //   this.active = false
      // }  优化代码
      this.active = name === this.name;
    })
  }
}
</script>
<style lang="scss">
  .tabs-pane{

  }
</style>