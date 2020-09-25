<template>
  <div class='Header'>
    <br>
    <router-link :to="{name: 'Categories'}">to Categories</router-link>
    <br>
    <router-link :to="{name: 'Form'}">to Formalizing</router-link>
  </div>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style lang="scss">
  .Header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    background: #e7e7e7;
  }
</style>
