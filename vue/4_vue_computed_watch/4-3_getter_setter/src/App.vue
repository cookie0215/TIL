<template>
  <div>
    <button @click="add">Add</button>
    <h1>{{ reversedMsg }}</h1>
    <h1>{{ reversedMsg }}</h1>
    <h1>{{ reversedMsg }}</h1>
    <h1>{{ reversedMsg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Computed!'
    }
  },
  computed: {
    reversedMsg() {
      return this.msg.split('').reverse().join('')
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