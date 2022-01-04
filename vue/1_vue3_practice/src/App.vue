<template>
  <div>
    <h1 @click="increase">
      {{ count }}
    </h1>

    <div v-if="count > 4">
      4보다 큽니다!
    </div>

    <ul>
      <Fruit
        v-for="fruit in fruits"
        :key="fruit"
        :name="fruit">
        {{fruit}}
      </Fruit>
    </ul>
  </div>
</template>

<script>
import Fruit from '~/components/Fruit'

export default {
  components: {
    Fruit: Fruit
  },
  data() {
    return {
      count: 0,
      fruits: ['apple', 'cherry', 'orange']
    }
  },
  methods: {
    increase() {
      this.count += 1
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    font-size: 50px;
    color: cornflowerblue;
    margin: 50px;
  }
  ul {
    li {
      font-size: 40px;
      color: crimson;
      margin: 20px 50px;
      border: 1px solid darkmagenta;
    }
  }
</style>