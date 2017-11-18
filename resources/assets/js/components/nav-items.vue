<template>
  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" tag="li" to="/" exact>
            <a class="nav-link" href="">Home</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/test">
            <a class="nav-link" href="">Explore</a>
          </router-link>
        </ul>
      </div>
</template>
<script>
export default {
  name: 'nav-items'
}
</script>

<style>

</style>


