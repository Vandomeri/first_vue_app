<template>
    <input v-model="dollars" type="number" placeholder="Введите количество долларов">
    <p>Будет рублей: <span>{{ rubles }}</span></p>
</template>

<script setup>
import { computed, ref } from 'vue';


const dollars = ref(0)

const rubles = computed(() => {
    return dollars.value * 103
})

</script>