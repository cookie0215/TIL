<template>
<!-- 
  부모영역만 클릭 하면, handlerA() 만 실행되지만,
  
  자식영역을 클릭 하면, handlerB()가 실행되고, 자식이 부모안에 존재하기 때문에 handlerA()도 실행되는 것을 볼 수 있다!.
  => 이벤트버블링 현상

  이러한 이벤트 버블링 현상을 방지하기 위해 이벤트 수식어 .stop을 사용해서 막을 수 있다.
 -->
  <div 
    class="parent"
    @click="handlerA()">
    <div
      class="child"
      @click.stop="handlerB()"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handlerA() {
      console.log('A');
    },
    handlerB() {
      console.log('B');
    }
  }
}
</script>

<style lang="scss" scoped>
.parent {
  width: 200px;
  height: 100px;
  background: royalblue;
  margin: 20px;
  padding: 10px;

  .child {
    width: 100px;
    height: 100px;
    background: orange;
  }
}
</style>