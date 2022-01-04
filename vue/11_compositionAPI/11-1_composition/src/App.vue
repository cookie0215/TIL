<template>
  <div @click="increase">
    {{ count }}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   increase() {
  //     this.count += 1
  //   }
  // },
  setup() {
    let count = ref(0);
    function increase() {
      count.value += 1
    }

    return {
      count,
      increase
    }
  }
}
</script>

<style>

</style>