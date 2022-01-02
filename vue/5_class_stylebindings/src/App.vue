<template>
<!-- 
  미션) h1 클릭 시, false로 적힌 값을 true로 변환하고, 글자색은 빨간색으로 변경해보기 
  >> isActive가 false면 스타일이 적용되지 않고, isActive가 true가 되면 스타일이 적용되도록 한다. 
-->
  <div>
    <h1 
      :class="{active: isActive}"
      @click="activate">
        현재 boolean값은 {{ isActive }} 이다!
    </h1>

<!--
  p태그의 현재 스타일을 24px의 orange색에서 
  p태그 클릭 시, 글자 스타일이 50px의 lawngreen으로 변할 수 있도록 만들기
-->
    <p 
      :style="{color: color, fontSize: fontSize}"
      @click="changeStyle">
      Style Binding 적용
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      color: 'orange',
      fontSize: '24px'
    }
  },
  methods: {
    activate() {
      this.isActive = true
    },
    changeStyle() {
      this.color = 'lawngreen',
      this.fontSize = '50px'
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 24px;
  }

  .active {
    color: red;
  }
</style>