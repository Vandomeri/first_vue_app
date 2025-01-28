<template>
  <h1>Список всех товаров</h1>

  <div class="grid grid-cols-4 gap-10">
    <div v-for="product in products" :key="product.id">


      <RouterLink :to="`/products/${product.id}`">
        <img :src="product.images[0]" alt="">
        <h4>{{ product.title }}</h4>
        <p>{{ product.price }}</p>
      </RouterLink>
      <button @click="store.addToCart(product)" class="py-2 px-4 bg-green-400">Buy</button>
      <button @click="store.favs.push(product)" class="py-2 px-4 bg-pink-400">To favourites</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';


const products = ref([])

onMounted(() => {
  fetch('https://dummyjson.com/products')
    .then((resp) => resp.json())
    .then((json) => products.value = json.products)
})

const store = useCartStore()

</script>
