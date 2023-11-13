<template>
  <h1 @click="increase">
    {{ count }} / {{ doubleCount }}
  </h1>
  <h1 @click="changeMessage">
    {{ message }} / {{ reversedMessage }}
  </h1>
</template>

<script>
// computed, watch 등 setup()내에서 바로 사용할 수 없기 때문에 vue패키지에서 불러와야 한다!
import { ref , computed, watch, onMounted } from 'vue';

export default {
  setup() {
    // 연관된 변수-함수끼리 배치해놓는다.
    let count = ref(0);
    let doubleCount = computed(() => count.value * 2)      // let doubleCount = computed(() => {return count.value * 2}) 을 축약함
    function increase() {
      count.value += 1
    }

    let message = ref('Hello World!');
    let reversedMessage = computed(() => { 
      return message.value.split('').reverse().join('')
    })

    // watch의 첫번째 인수 : 감시하고자 하는 해당데이터 (value를 사용할 필요가 없다)
    // watch의 두번째 인수 : 콜백함수
    watch(message, (newValue) => { return console.log(newValue) })
    watch(reversedMessage, (newValue) => { return console.log(newValue) })
    function changeMessage() {
      message.value = 'Good!!!'
    }

    // created 훅은 setup()자체가 컴포넌트가 생성된 직후에 동작하기 때문에 필요가 없어서 composition API에서는 존재하지 않는다!
    onMounted(() => {
      console.log(count.value);
      console.log(message.value);
    })

    return {
      // count : count 이렇게 작성된 것을 축약한 것이다.
      count,
      doubleCount,
      increase,

      message,
      reversedMessage,
      changeMessage,
    }
  }
}
</script>