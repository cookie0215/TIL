<template>
  <button @click="handler('hello' , $event)">
    <span>click!</span>
  </button>
</template>

<script>
export default {
  methods: {
    handler(msg , event) {
      console.log(msg);     // hello
      console.log(event);
      console.log(event.target);    // <span>click!</span>
      console.log(event.currentTarget);   // <button><span>click!</span></button> 
      console.log(event.target.textContent);    // click!
    }
  }
}
</script>
