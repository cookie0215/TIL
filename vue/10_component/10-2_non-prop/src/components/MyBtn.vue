<template>
  <div class="btn">
    <slot></slot>
  </div>
  <!-- <h1 v-bind="$attrs"></h1> -->
  <h1
    :class="$attrs.class"
    :style="$attrs.style"
    @click="$emit('hahaha', $event)"
    >ABC
  </h1>
  <input
    type="text"
    v-model="msg" />
</template>

<script>
export default {
  inheritAttrs: false,       // 어떠한 속성들도 상속하지 않도록 하는 옵션
  created() {
    console.log(this.$attrs)
  },
  emits: [
    'hahaha',
    'changeMsg'
  ],
  data() {
    return {
      msg: ''
    }
  },
  watch: {
    msg() {
      this.$emit('changeMsg' , this.msg)
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