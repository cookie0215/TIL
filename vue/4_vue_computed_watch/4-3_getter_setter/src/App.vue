<template>
  <div>
    <button @click="add">Add</button>
    <h1>{{ reversedMsg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // data속성에 지정한 값은 기본적으로 getter와 setter용도 2가지로 사용할 수 있다.
      msg: 'Hello Computed!'
    }
  },
  computed: {
    /*
    reversedMsg() {
      return this.msg.split('').reverse().join('')
    }
    */
    reversedMsg: {
      get() {
        return this.msg.split('').reverse().join('')
      },
      set(value) {
        // add라는 메소드가 동작할 때 set에 부분의 로직이 실행된다.
        this.msg = value
      }
    }
  },
  methods: {
    add() {
      this.reversedMsg += '?!'
    }
  }
}
</script>

<style>
  
</style>