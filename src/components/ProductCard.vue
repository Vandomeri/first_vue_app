<template>
    <div class="border border-red-500 p-5">
        <div class="flex gap-x-5 overflow-x-scroll">
            <img v-for="image in images" :key="image" :src="image" alt="">
        </div>
        <p>{{ title }}</p>

        <p>{{ description }}</p>

        <div>
            <span>{{ rating }}</span>
            <span>{{ price }}</span>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    images: Array,
    title: String,
    description: String,
    price: String,
    rating: String
})

console.log(props.price)

</script>