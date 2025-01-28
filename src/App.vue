<template>
  <TheHeader />
  <hr>
  <main>
    <RouterView />
  </main>


</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import { RouterView } from 'vue-router';

</script>

<style scoped>
main {
  max-width: 1000px;
  margin: 50px auto;
}
</style>
