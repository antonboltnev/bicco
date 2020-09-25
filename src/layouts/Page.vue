<template>
  <div class='Page'>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Page"
  }
</script>

<style lang="scss">
  .Page {
    max-width: 1100px;
    margin: 120px auto 0;
  }
</style>
