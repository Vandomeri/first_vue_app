<template>
    <h2>Получение списка товаров</h2>

    <div v-if="products.length" class="grid grid-cols-4 gap-8">
        <ProductCard v-for="product in products" :key="product.id" :images="product.images" :title="product.title"
            :description="product.description" :rating="product.rating" :price="product.price" />
    </div>
    <div v-else>Данные еще загружаются</div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import ProductCard from './ProductCard.vue';

const products = ref([])

onMounted(() => {
    fetch('https://dummyjson.com/products')
        .then((resp) => resp.json())
        .then((json) => products.value = json.products)
})

function kakoetoNazvanie() {
    console.log('hellow')
}
</script>

<script>

export default {
    data() {
        return {
            products: [],
            users: []
        }
    },
    mounted() {
        fetch('https://dummyjson.com/products')
            .then((resp) => resp.json())
            .then((json) => products.value = json.products)
    },
    methods: {
        kakoetoNazvanie() {
            console.log('hellow')
        },

    },
    watch: {

    }
}

</script>
