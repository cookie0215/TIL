<template>
  <h1
    v-bind:[attr]="className"
    @[event]="addBang('bye')">
      {{msg}}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue~',
      className: 'active',
      attr: 'class',
      event: 'click'
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