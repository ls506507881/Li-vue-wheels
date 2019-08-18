<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GTabsItem',
  inject: ['eventBus'],  // 注入
  data(){
    return {
      active: false
    }
  },
  props:{
    disabled: {
      type: Boolean,
      default: false
    },
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
    // console.log('爷爷给孙子的 eventBus')
    // console.log(this.eventBus)
    this.eventBus.$on('update:selected',(name)=>{
      // if(name === this.name){
      //   // console.log(`我${this.name}被选中了`)
      //   this.active = true
      // }else{
      //   // console.log(`我${this.name}没被选中`)
      //   this.active = false
      // }  优化代码
      this.active = name === this.name
    })
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>
<style lang="scss">
  .tabs-item{
    flex-shrink: 0;
    padding: 0 1em;
    &.active{
      
    }
  }
</style>