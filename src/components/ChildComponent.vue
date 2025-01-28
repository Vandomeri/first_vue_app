<template>
  <div class="flex gap-x-2">
    <button @click="increment" class="border py-2 px-4  border-red-500">+ 1</button>
    <span>{{ counter }}</span>
  </div>
  <div>
    Данные полученные из app.vue: {{ dataFromAppVue }}
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';


const emit = defineEmits(['plus_one', 'minus_one'])


const counter = ref(0)

const dataFromAppVue = inject('counter')

function increment() {
  counter.value++
  dataFromAppVue.value++
  emit('plus_one', counter.value)
}

</script>
