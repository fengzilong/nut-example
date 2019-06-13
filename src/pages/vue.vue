<template>
  <div>
    <h4>Vue Example</h4>
    <button class="button" @click="sayHello">Hello</button>
  </div>
</template>

<script>
  export const attributes = {
    title: 'vue sfc'
  }

  export default {
    methods: {
      sayHello() {
        alert( 'World!' )
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    outline: none;
    border: none;
    border-radius: 40px;
    padding: 0 32px;
    height: 32px;
    white-space: nowrap;
    word-break: break-all;
    color: #fff;
    cursor: pointer;
    background-image: linear-gradient(-90deg, #FF0000 0%, #FF3164 100%);
  }
</style>
