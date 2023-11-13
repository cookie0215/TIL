<template>
<!-- 버튼 클릭 시, fruits배열에 orange 아이템 추가하기 -->
  <div>
    <button @click="handler">click</button>
    <ul>
      <li 
        v-for="fruit in fruitObj"
        :key="fruit">
        {{ fruit.id }}번 : {{ fruit.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['pineapple', 'cherry', 'grape']
    }
  },
  computed: {
    fruitObj() {
      return this.fruits.map((fruit, index) => {
        return { id: index, name: fruit }
      })
    }
  },
  methods: {
    handler() {
      this.fruits.push('orange');
    }
  }
}
</script>

<style>

</style>