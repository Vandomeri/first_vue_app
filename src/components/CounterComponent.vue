<template>

  <h2>Компонент "Счетчик"</h2>

  <div class="counter">
    <button :disabled="counter === 0" @click="decrement">-</button>
    <span :class="{ 'text-red bg-blue': counter === 10 || counter === 0, }"> {{ counter }} </span>
    <button :disabled="counter === 10" @click="increment">+</button>
  </div>

</template>

<script setup>
import { ref, watchEffect } from 'vue';

const modelFromParent1 = defineModel('importantCounter')
const modelFromParent2 = defineModel('importantCounter2')

const counter = ref(0)


function decrement() {
  if (counter.value > 0) {
    counter.value--
  }
}

function increment() {
  if (counter.value < 10) {
    counter.value++
    modelFromParent1.value++
    modelFromParent2.value++
  }


}


watchEffect(() => {
  counter.value++
  console.log(counter.value)
})

</script>

<style scoped>
.counter {
  display: flex;
  column-gap: 5px;
  align-items: center;
}

.text-red {
  color: red;
  font-weight: 700;
}

.bg-blue {
  background-color: blue;
}
</style>
