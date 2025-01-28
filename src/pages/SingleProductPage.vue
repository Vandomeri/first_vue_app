<template>
  <h1>Продукт с ID: {{ $route.params.id }}</h1>

  <div v-if="product">
    <img :src="product.images[0]" alt="">
    <h4>{{ product.title }}</h4>
    <p>{{ product.price }}</p>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const product = ref(null)

onMounted(() => {
  fetch(`https://dummyjson.com/products/${route.params.id}`)
    .then((resp) => resp.json())
    .then((json) => {
      product.value = json

      if (json.message) {
        router.replace('/404')
      }
    })
})

</script>
