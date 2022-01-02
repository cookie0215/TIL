<template>
  <div>
    <!--
      똑같은 로직은 반복 출력할 때 computed로 미리 계산된 로직은 한번만 실행하면 그 결과값을 어딘가에 저장(캐싱)해 놓는다.
      그래서 첫번째 h1에서 연산 처리가 완료되면 나머지 2~4번째 h1은 computed에서 캐싱된 결과 자체만 가져와서 화면에 출력해준다. 
      => 즉. computed에 만든 로직은 연산이 1번만 처리가 되면 나머지 곳에서 똑같은 값을 반환하고 싶을 때 다시 연산해줄 필요 없이
      맨 처음에 처리되었던 연산 결과를 가져와 그대로 화면에 뿌려주는 것이다!
    -->
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
    reverseMsg() {
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style>
  
</style>