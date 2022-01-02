<template>
  <div>
    <h1 @click="changeMsg">{{ msg }}</h1>
    <h1>{{ reversedMsg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // data속성에 지정한 값은 기본적으로 getter와 setter용도 2가지로 사용할 수 있다.
      msg: 'Hello~'
    }
  },
  computed: {
    reversedMsg() {
      return this.msg.split('').reverse().join('')
    }
  },
  // 변화를 감지하고 싶은 data속성을 함수형태로 작성하면 된다.
  watch: {
    msg() {
      console.log(`msg: ${this.msg}`);
    },
    reversedMsg() {
      console.log(`reversedMsg: ${this.reversedMsg}`);
    }
  },
  methods: {
    changeMsg() {
      this.msg = 'Good!'
    }
  }
}
</script>

<style>
  
</style>