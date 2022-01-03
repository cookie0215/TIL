<template>
<!-- 1개의 h1태그와 2개의 p태그를 화면에 동시에 보이거나 보이지 않게 처리 -->
  <div>
    <button @click="handler">Click me!</button>
    <template v-if="isShow">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
  
</style>