<template>
  <div 
    :class="{ large }"
    :style="{ background: color }"
    class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // 부모에게 데이터를 전달받기 위해 props를 사용
  props: {
    color: {
      type: String,
      default: 'gray'    // 버튼의 특정한 색상값이 전달되지 않으면 gray색상을 기본으로 하겠다는 의미
    },
    large: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Apple'
    }
  }
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