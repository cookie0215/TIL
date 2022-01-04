<template>
<!-- 
  1. 자식 컴포넌트 MyBtn을 만들어 부모 컴포넌트와 연결하기
  2. 두번째 버튼 색상을 바꿔보기
  => 부모 컴포넌트에서 버튼의 color="royalblue" 값을 자식에게 전달하고 싶다면 props 옵션을 사용하면 된다!
  
  3. 세번째 버튼에 large 클래스명이 추가되도록 설정
  4. 첫번째 버튼의 텍스트가 Banana가 되도록 설정
-->
  <div>
    <MyBtn>Banana</MyBtn>
    <MyBtn color="royalblue">apple</MyBtn>
    <MyBtn 
      large
      :color="color">
        <span style="color: orange">orange</span>
    </MyBtn>
    <MyBtn>cherry</MyBtn>
  </div>
</template>

<script>
import MyBtn from './components/MyBtn';

export default {
  components: { MyBtn },
  data() {
    return {
      color: '#000'
    }
  }
}

</script>