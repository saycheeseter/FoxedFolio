<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">FF</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <nav-items></nav-items>
      
    </nav>
  </div>
</template>

<script>
import navItems from './nav-items.vue'
  export default {
    name: 'nav-list',
    components: {
      'nav-items': navItems
    }
  }
</script>

<style scoped>
  form input {
    width: 100%;
  }
</style>