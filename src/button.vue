<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
      @click="$emit('click')">
      <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
      <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
      <div class="content">
          <slot></slot>
      </div>
    </button>
</template>

<script >
import Icon from './icon'
export default {
  name: 'GButton',
  components:{
    'g-icon': Icon
  },
  // props: ['icon','iconPosition']  // left right
  props: {
    icon: {},
    loading:{
      type: Boolean,
      default: false
    },
    iconPosition:{
      type: String,
      default: 'left',
      validator(value){  // 属性检查器，如果没有这个值，就会报错
        // if(value !== 'left' && value !== 'right'){
        //   return false
        // }else{
        //   return true
        // }
        // 简化代码
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// $font-size: 14px;
// $button-height: 32px;
// $button-bg: white;
// $button-active-bg: #eee;
// $border-radius: 4px;
// $color: #333;
// $border-color: #999;
// $border-color-hover: #666;
@keyframes spin{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.g-button {
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 4px;
    border: 1px solid #999;
    background: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    line-height: 14px;
    &:hover{ border-color: #666;}
    &:active{ background-color:#eee; }
    &:focus{ outline: none; }
    > .icon{ order: 1; margin-right: .3em; }
    > .content{ order: 2; }
    &.icon-right{
      > .icon{ order: 2; margin-left: .3em; margin-right: 0; }
      > .content { order: 1;}
    }
    .loading{ animation: spin 2s infinite linear; }
}

</style>
