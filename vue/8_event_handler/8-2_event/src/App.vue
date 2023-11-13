<template>
  <button @click="handlerA(), handlerB()">
    <span>click!</span>
  </button>
</template>

<script>
export default {
  methods: {
    handlerA() {
      console.log('A');
    },
    handlerB() {
      console.log('B');
    }
  }
}
</script>