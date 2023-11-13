<template>
  <h1>{{ count }}</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 2
    }
  },
  beforeCreate() {
    console.log('Before Created!' , this.count);  
  },

  // 컴포넌트가 생성된 직후, created 훅에 의해 해당 내용이 실행된다.
  created() {
    console.log('Created!', this.count);
  },

  beforeMount() {
    console.log('Before Mount!');
    console.log(document.querySelector('h1')); 
  },

 //  화면에 실제 데이터가 출력이 되어 count값이 브라우저에 보일 때
  mounted() {
    console.log('Mounted!');
    console.log(document.querySelector('h1'));
  },
  
}
</script>