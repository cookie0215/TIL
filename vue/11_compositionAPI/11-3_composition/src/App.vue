<template>
  <MyBtn
    class="fruit"
    style="color: red;"
    color="#ff0000"
    @hello="log">
    Apple
  </MyBtn>
</template>

<script>
import MyBtn from '~/components/MyBtn'

export default {
  components: { MyBtn },
  methods: {
    log() {
      console.log('hello world!');
    }
  }
}
</script>

<style>

</style>