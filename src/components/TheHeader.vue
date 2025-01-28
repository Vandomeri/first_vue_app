<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <div class="logo">LOGO</div>

    <nav>

      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/products">Products</RouterLink>

    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}


.logo {
  font-size: 40px;
  font-weight: 700;
}

nav {
  display: flex;
  column-gap: 30px;

}

nav a {
  color: #000;
  text-decoration: none;
}

nav a:hover {
  color: darkturquoise;
}
</style>
