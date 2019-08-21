<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GPopover',
  data(){
    return {visible: false}
  },
  methods: {
    xxx () {
      this.visible = !this.visible
      // console.log('切换 visible')
      if(this.visible){
        setTimeout(()=>{
          // console.log('新增 document click 监听器')
          let eventHandler = ()=>{
            // console.log('点击body就关闭')
            this.visible = false
            // console.log('删除监听器')
            console.log('document 隐藏 popover')
            document.removeEventListener('click', eventHandler)
          }

          document.addEventListener('click', eventHandler)
        },100)
        // this.$nextTick(()=>{
        //   document.addEventListener('click',()=>{
        //     this.visible = false
        //     console.log('点击body就关闭')
        //   })
        // })
      }else{
        console.log('vm 隐藏 popover')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper{
      position: absolute;
      bottom: 100%;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0,0,0,0.5)
    }
  }
</style>