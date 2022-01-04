<template>
<!-- id명을 vue에서는 ref로 사용한다. -->
  <h1 ref="hi">
    Hello World!
  </h1>

  <Hello ref="hello" />
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: { Hello },
  // mounted() 훅은 실제DOM에 만들어진 바로 직후에 생성되기 때문에 DOM에 접근할 수 있다! (다른 created() 훅 등에서는 접근 불가능!)
  mounted() {
    // const h1 = document.querySelector('#hello');
    console.log(this.$refs.hi);     // h1의 #hello와 동일
    console.log(this.$refs.hi.textContent);

    console.log(this.$refs.hello);
    console.log(this.$refs.hello.$el);
    console.log(this.$refs.hello.$el.textContent);

    console.log(this.$refs.hello.$refs);
    console.log(this.$refs.hello.$refs.welcome);
  }
}
</script>

<style>

</style>