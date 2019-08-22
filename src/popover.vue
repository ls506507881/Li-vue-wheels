<template>
  <div class="popover" @click="onClick" ref="popover">
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
    positionContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument (e){
      if(this.$refs.popover && 
      ( this.$refs.popover === e.target ||
        this.$refs.popover.contains(e.target))
      ) { return }
      this.close()
      console.log('关闭')
    },
    open(){
      this.visible = true
      // this.$nextTick(()=>{
      //   this.positionContent()
      //   this.listenToDocument()
      // },100)
      setTimeout(()=>{
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      },0)
    },
    close(){
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick (event) {
      if(this.$refs.triggerWrapper.contains(event.target)){
        console.log('下面')
        if(this.visible === true){
          this.close()
        } else {
          this.open()
          // console.log('关闭')
        }
      }else{
        console.log('上面')
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
  }
  .content-wrapper{
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform: translateY(-100%);
  }
</style>