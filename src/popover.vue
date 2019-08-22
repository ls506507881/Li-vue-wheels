<template>
  <div class="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'GPopover',
  data () {
    return {visible: false}
  },
  methods: {
    onClick (event) {
      console.log(event.target)
      if(this.$refs.triggerWrapper.contains(event.target)){
        console.log('下面')
        this.visible = !this.visible
        if(this.visible){
          setTimeout(()=>{
            document.body.appendChild(this.$refs.contentWrapper)
            let { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            let eventHandler = (e)=>{
              console.log(e.target)
              this.visible = false
              document.removeEventListener('click', eventHandler)
            }
            document.addEventListener('click', eventHandler)
          },100)
        }else{

        }
      }else{
        console.log('上面')
      }
      // this.visible = !this.visible
      // // console.log('切换 visible')
      // if(this.visible){
      //   setTimeout(()=>{
      //     document.body.appendChild(this.$refs.contentWrapper)
      //     let { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
      //     // console.log( width, height, top, left)
      //     this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      //     this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      //     // console.log('top',top)
      //     // console.log('left',left)
      //     // console.log('新增 document click 监听器')
      //     let eventHandler = ()=>{
      //       // console.log('点击body就关闭')
      //       this.visible = false
      //       // console.log('删除监听器')
      //       // console.log('document 隐藏 popover')
      //       document.removeEventListener('click', eventHandler)
      //     }
      //     document.addEventListener('click', eventHandler)
      //   },100)
      //   // this.$nextTick(()=>{
      //   //   document.addEventListener('click',()=>{
      //   //     this.visible = false
      //   //     console.log('点击body就关闭')
      //   //   })
      //   // })
      // }else{
      //   console.log('关闭')
      //   // console.log('vm 隐藏 popover')
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform: translateY(-100%);
  }
</style>