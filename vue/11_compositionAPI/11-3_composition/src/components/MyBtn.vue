<template>
<!-- 
  v-bind="$attrs"   >> 모든 속성 부분이 상속됨
 -->
  <div
    v-bind="$attrs"
    class="btn"
    @click="hello">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'gray'
    }
  },
  emits: ['hello'],    // 부모에 지정된 hello 이벤트를 의미
  setup(props, context) {
    function hello() {
      context.emits('hello')
    }
    
    onMounted(() => {
      console.log(props.color);
      console.log(context.attrs);
    })

    return {
      hello
    }
  }
}
</script>

<style>

</style>