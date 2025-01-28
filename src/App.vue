<template>
  <TheHeader class="" />
  <CounterComponent 
  v-model:importantCounter="importantCounter" 
  v-model:importantCounter2="importantCounter2" />
  <p>Очень важный счетчик: {{ importantCounter }}</p>
  <p>Очень важный счетчик2s: {{ importantCounter2 }}</p>
  <hr>
  <main>
    <RouterView />
  </main>


</template>

<script setup>
import { ref } from 'vue';
import CounterComponent from './components/CounterComponent.vue';
import TheHeader from './components/TheHeader.vue';
import { RouterView } from 'vue-router';


const importantCounter = ref(0)
const importantCounter2 = ref(0)

</script>

<style scoped>
main {
  max-width: 1000px;
  margin: 50px auto;
}
</style>
