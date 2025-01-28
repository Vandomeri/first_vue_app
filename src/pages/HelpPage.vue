<template>

  <h2>Обратная свзяь</h2>

  <div class="flex gap-x-3">

    <RouterLink to="/help/service">Сервис</RouterLink>
    <RouterLink to="/help/feedback">Обратная связь</RouterLink>
    <RouterLink to="/help/guarantee">Гарантия</RouterLink>

  </div>

  <div>
    <RouterView />
  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>
