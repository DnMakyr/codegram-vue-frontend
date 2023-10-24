<script setup>
import axios from 'axios'
import { useAuth } from '../composables/useAuth';
 let {data: user} = await axios.get('/api/user')
const { logout } = useAuth()
</script>

<template>
  <div class="flex justify-center">
    <p>{{ user.username }}</p>
    <button class="p-2 bg-red-400 text-white" @click="logout">Logout</button>
  </div>
</template>
