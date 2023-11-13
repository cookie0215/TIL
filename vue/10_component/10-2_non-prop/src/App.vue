<template>
  <div>
    <MyBtn
      style="color: red;"
      class="heropy"
      @hahaha="log"
      @change-msg="logMsg">Banana</MyBtn>
  </div>
</template>

<script>
import MyBtn from './components/MyBtn';

export default {
  components: { MyBtn },
  methods: {
    log() {
      console.log('click!!')
    },
    logMsg(msg) {
      console.log(msg)
    }
  }
}

</script>