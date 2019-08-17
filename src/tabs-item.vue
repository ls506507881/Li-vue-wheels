<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GTabsItem',
  props:{
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
  .tabs-item{

  }
</style>