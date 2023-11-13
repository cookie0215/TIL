<template>
<!-- 
  1. h1을 클릭할 때마다, !가 추가될 수 있도록 만들기
  2. 매개변수에 글자를 넣어서 클릭 시, 추가될 수 있도록 만들기
  3. h1태그에 class명 붙여서 스타일 적용시키기
-->
  <h1
    v-bind:class="className"
    @click="addBang('bye')">
      {{msg}}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue~',
      className: 'active'
    }
  },
  methods: {
    addBang(ment) {
      this.msg += ment + '!';
    }
  }
}
</script>

<style>
  .active {
    font-size: 50px;
    color: tomato;
  }
</style>