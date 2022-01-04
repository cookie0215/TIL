<template>
<!-- 
  input 요소의 value값이 변하면 h1의 내용도 input의 value값으로
  동일하게 변경될 수 있도록 양방향 데이터 바인딩 만들기
-->
  <div>
    <h1>{{message}}</h1>
    <input 
      type="text"
      :value="message"
      @input="handler" />
    
    <h1>{{ checked }}</h1>
    <input
      type="checkbox"
      v-model="checked" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'Hello World~',
      checked: false
    }
  },
  methods: {
    handler(event) {
      this.message = event.target.value;
    }
  }
}
</script>