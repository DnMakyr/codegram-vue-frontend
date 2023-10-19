<script setup>
import axios from 'axios'

const {data: user} = await axios.get('api/user')
</script>

<template>
    <div class="flex justify-center">
        <p>{{ user.name }}</p>
        <button class="p-2 bg-red-400 text-white">Logout</button>
    </div>
</template>