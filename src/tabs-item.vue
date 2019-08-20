<template>
  <div class="tabs-item" @click="onClick" :class="classes">
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
        active: this.active,
        disabled: this.disabled
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
    onClick(){
      if(this.disabled) { return }
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>
<style lang="scss" scoped>
  $blue: blue;
  $disabled-text-color: grey;
  .tabs-item{
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
      color: $blue;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      content: no-open-quote;
    }
  }
</style>