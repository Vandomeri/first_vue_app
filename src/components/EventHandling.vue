<template>

    <h2>Обработка событий</h2>

    <button @click="makeAlert">Вызвать alert</button>

    <form @submit.prevent="submitForm">
        <input type="text">
        <button type="submit">Отправить</button>
    </form>
</template>

<script setup>

function makeAlert() {
    alert('alert вызван')
}

function submitForm(e) {
    console.log('Форма отправлена')
}

</script>
