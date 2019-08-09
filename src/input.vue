<template>
    <div class="wrapper">
        <input type="text">
    </div>
</template>
<script>
export default {
    name:'GInput'
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
.wrapper{
    border: 1px solid red;
    > input{
        height: $height;
        border: 1px solid $border-color
    }
}
</style>

