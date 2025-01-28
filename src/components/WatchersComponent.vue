<template>

    <div>

        <button @click="counter--">-</button>
        <span>{{ counter }}</span>
        <button @click="counter++">+</button>

    </div>

</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';



const counter = ref(0)
const mutiplier = ref(2)

watch(counter, (newValue, oldValue) => {

    console.log(`Old value: ${oldValue}`)
    console.log(`New value: ${newValue}`)

})


// watch(() => counter.value * mutiplier.value, (newValue) => {

//     console.log(`Результат вычислений: ${newValue}`)

// })


watchEffect(() => {
    console.log(counter.value)
})



</script>