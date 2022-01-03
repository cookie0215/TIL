<template>
  <div>
    <button @click="active">버튼 클릭</button>
    <h1>버튼을 클릭하면 어떻게 될까?</h1>
    <p v-if="isShow">hello</p>
    <p v-else-if="count > 3">count가 3보다 커지면 else if문 발동</p>
    <p v-else>good bye</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      count: 0
    }
  },
  methods: {
    active() {
      this.isShow = !this.isShow;
      this.count += 1;
      console.log(this.count);
    }
  }
}
</script>

<style>
  h1 {
    font-size: 24px;
  }
</style>