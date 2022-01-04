<template>
  <div>
    Child.vue : {{ msg.value }}
  </div>
</template>

<script>
export default {
  inject: ['msg']
}
</script>