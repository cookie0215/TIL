<template>
  <div class="btn">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .btn {
    display: inline-block;
    margin: 4px;
    padding: 6px 12px;
    border-radius: 4px;
    background: gray;
    color: #fff;
    cursor: pointer;

    &.large {
      font-size: 20px;
      padding: 10px 20px;
    }
  }
</style>