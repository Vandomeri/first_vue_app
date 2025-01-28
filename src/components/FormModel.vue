<template>
    <h2>Работа с формами</h2>

    <div>
        <input type="text" v-model.lazy="input">
        <p>{{ input }}</p>
    </div>


    <div>
        <input type="checkbox" v-model="checkbox" true-value="Отжал чекбокс" false-value="Не отжал чекбокс">
        <p>{{ checkbox }}</p>
    </div>


    <div>
        <input type="radio" value="Пицца" v-model="radio">
        <input type="radio" value="Роллы" v-model="radio">

        <p>{{ radio }}</p>
    </div>


    <div>
        <select v-model="sizeSelect">
            <option value="S">Маленький</option>
            <option value="M">Средний</option>
            <option value="L">Большой</option>
            <option value="XL">Очень большой</option>
        </select>

        <p>{{ sizeSelect }}</p>
    </div>

</template>


<script setup>
import { ref } from 'vue';

const input = ref('')

const checkbox = ref(false)

const radio = ref('')

const sizeSelect = ref('')
</script>