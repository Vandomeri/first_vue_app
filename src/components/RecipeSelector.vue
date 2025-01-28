<template>
    <div class="max-w-4xl mx-auto flex flex-col gap-y-5">


        <select v-model="recipeId" class="border border-green-500 py-2 px-4">
            <option v-for="recipe in recipesList" :key="recipe.id" :value="recipe.id">{{ recipe.name }}
            </option>
        </select>

        <div v-if="currentRecipe" class="flex flex-col gap-y-5">
            <p>{{ currentRecipe.name }}</p>
            <p>{{ currentRecipe.cookTimeMinutes }}</p>
            <p>Порций: {{ currentRecipe.servings }}</p>
            <p>Сложность: {{ currentRecipe.difficulty }}</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue';

const recipesList = ref([])
const recipeId = ref(1)
const currentRecipe = ref(null)



onMounted(() => {
    fetch('https://dummyjson.com/recipes/')
        .then((resp) => resp.json())
        .then((json) => recipesList.value = json.recipes)
})

// watch(recipeId, (newId) => {
//     fetch(`https://dummyjson.com/recipes/${newId}`)
//         .then((resp) => resp.json())
//         .then((json) => currentRecipe.value = json)
// })

watchEffect(() => {
    fetch(`https://dummyjson.com/recipes/${recipeId.value}`)
        .then((resp) => resp.json())
        .then((json) => currentRecipe.value = json)
})

watchEffect(() => {

})

</script>