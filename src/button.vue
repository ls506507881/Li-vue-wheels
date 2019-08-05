<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
      <g-icon class="icon" v-if="icon" :name="icon" />
      <div class="content">
          <slot></slot>
      </div>
    </button>
</template>

<script >
export default {
    // props: ['icon','iconPosition']  // left right
    props: {
      icon: {},
      iconPosition:{
        type: String,
        default: 'left',
        validator(value){  // 属性检查器，如果没有这个值，就会报错
          console.log(value)
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

<style lang="scss">
.g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    line-height: var(--font-size);
    &:hover{
        border-color: var(--border-color-hover);
    }
    &:active{
        background-color: var(--button-active-bg);
    }
    &:focus{
        outline: none;
    }
    > .icon{
        order: 1; 
        margin-right: .3em;
    }
    > .content{
        order: 2;
    }
    &.icon-right{
      > .icon{
          order: 2;
          margin-left: .3em;
          margin-right: 0;
      }
      > .content {
          order: 1;
      }
    }
}

</style>
