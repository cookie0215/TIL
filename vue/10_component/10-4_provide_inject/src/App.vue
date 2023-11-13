<template>
  <div>
    <button @click="message = 'good?!'">click시 텍스트 변경</button>
    <h1>App.vue : {{ message }}</h1>
    <Parent />
  </div>
</template>

<script>
import Parent from '~/components/Parent';
import { computed } from 'vue'

export default {
  components: { Parent },
  data() {
    return {
      message: 'Hello World~!'
    }
  },
  provide() {
    return {
      // msg: this.message  (반응성이 제공되지 않는 코드)

      // 반응성이 이루어지도록 작성
      msg: computed(() => {
        return this.message
      })
    }
  }
}
</script>