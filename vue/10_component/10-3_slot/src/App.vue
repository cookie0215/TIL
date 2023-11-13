<template>
  <div>
    <MyBtn>
      <template v-slot:text>
        <span>Apple</span>
      </template>
      <template v-slot:icon>
        <span>🍎</span>
      </template>
    </MyBtn>
  </div>
</template>

<script>
import MyBtn from './components/MyBtn';

export default {
  components: { MyBtn },
}

</script>