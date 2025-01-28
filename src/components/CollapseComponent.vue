<template>
    <h2>Компонент Collapse</h2>

    <div>
        <button @click="isShown = !isShown">Нажмите, чтобы раскрыть</button>
        <p v-if="isShown">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ullam obcaecati modi nisi
            magni praesentium
            eius excepturi vero animi placeat ratione porro explicabo nulla ipsum, at quaerat alias soluta delectus
            voluptate corporis dolor sapiente? Possimus beatae nulla quam, incidunt reiciendis, quas rerum quod dolorem
            dolor perspiciatis doloremque perferendis, maiores maxime?</p>
        <p>Нажми на заголовок сверху</p>
    </div>

</template>

<script setup>
import { ref } from 'vue';


const isShown = ref(false)

</script>

<style scoped></style>