<template>
  <div class="my-10">

    <h2>Родительский компонент для тестирования Emit</h2>
    <p>Счетчик родительского компонента: {{ counter }}</p>
    <ChildComponent @plus_one="(value) => counter += value" />
  </div>


</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';


const counter = ref(0)

</script>
