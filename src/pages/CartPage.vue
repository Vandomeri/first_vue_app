<template>

  <ul>
    <li class="flex justify-between" v-for="product in store.cart" :key="product.id">
      <img class="w-20" :src="product.images[0]" alt="">
      <h3>{{ product.title }}</h3>
      <p>{{ product.price }}</p>
      <p>№: {{ product.quantity }}</p>
    </li>
  </ul>


</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';



const store = useCartStore()


</script>
