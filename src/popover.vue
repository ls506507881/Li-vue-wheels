<template>
  <div class="popover">
    <slot name="content"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GPopover'
}
</script>

<style lang="scss" scoped>
  .popover{
    display: inline-block;
    vertical-align: top;
  }
</style>