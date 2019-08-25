<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
    :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
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
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value){
        return ['top','bottom','left','right'].indexOf(value) >= 0
      }
    }
  },
  methods: {
    positionContent(){
      const { contentWrapper,triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      
      let { width, height, top, left } = triggerWrapper.getBoundingClientRect()
      if(this.position === 'top'){
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + window.scrollY + 'px'
      }else if(this.position === 'bottom'){
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + height + window.scrollY + 'px'
      }else if(this.position === 'left'){
        contentWrapper.style.left = left + window.scrollX + 'px'
        let {height: height2} = contentWrapper.getBoundingClientRect()
        contentWrapper.style.top = top + window.scrollY + 
          (height-height2)/2 + 'px'
      }else if(this.position === 'right'){
        contentWrapper.style.left = left + window.scrollX + width + 'px'
        let {height: height2} = contentWrapper.getBoundingClientRect()
        contentWrapper.style.top = top + window.scrollY + 
          (height-height2)/2 + 'px'
      }

    },
    onClickDocument (e){
      if(this.$refs.popover && 
      ( this.$refs.popover === e.target ||
        this.$refs.popover.contains(e.target))
      ) { return }
      if(this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
        this.$refs.contentWrapper.contains(e.target))
      ) {
        return
      }
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
  $border-color: #333;
  $border-radius: 4px;
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    // box-shadow: 0 0 3px rgba(0,0,0,0.5);
    filter: drop-shadow(0 0 3px rgba(0,0,0,0.5));
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;
    background: white;
    &::before,&::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before,&::after{
        left: 10px;
      }
      &::before{
        top: 100%;
        border-top-color: black;
      }
      &::after{
        top: calc(100% - 1px);
        border-top-color: white;
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before,&::after{
        left: 10px;
      }
      &::before{
        bottom: 100%;
        border-bottom-color: black;
      }
      &::after{
        bottom: calc(100% - 1px);
        border-bottom-color: white;
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before,&::after{
        transform: translateY(-50%);
        top: 50%;
      }
      &::before{
        left: 100%;
        border-left-color: black;
      }
      &::after{
        left: calc(100% - 1px);
        border-left-color: white;
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before,&::after{
        transform: translateY(-50%);
        top: 50%;
      }
      &::before{
        right: 100%;
        border-right-color: black;
      }
      &::after{
        right: calc(100% - 1px);
        border-right-color: white;
      }
    }
  }
</style>