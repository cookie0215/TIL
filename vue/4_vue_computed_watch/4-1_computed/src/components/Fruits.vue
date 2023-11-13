<template>
<!-- 반복문을 통해 과일 목록 만들기 -->
  <div>
    <section>
      <h1 v-if="hasFruits">Fruits</h1>
      <ul>
        <li
          v-for="fruit in fruits"
          :key="fruit">
          {{ fruit }}
        </li>
      </ul>
    </section>
    <section>
      <h1>Reverse Fruits</h1>
      <ul>
        <li
          v-for="fruit in reverseFruits"
          :key="fruit">
          {{ fruit }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: [
        'Strawberry', 'Pineapple', 'Orange'
      ]
    }
  },
  computed: {
    hasFruits() {
      return this.fruits.length > 0
    },
    reverseFruits() {
      // 각 배열의 아이템을 반복돌면서 새로운 유사배열을 만든다.
      return this.fruits.map(fruit => {
        // 원본fruits의 각 아이템의 문자열을 각 낱말로 쪼개 배열로 반환한 뒤, 낱말을 역순으로 배치 > 다시 문자열로 합친다.
        // 'Orange' >> ['O','r','a','n','g','e'] >> ['e','g','n','a','r','O'] >> 'egnarO'
        return fruit.split('').reverse().join('')
      })
    }
  }
}
</script>