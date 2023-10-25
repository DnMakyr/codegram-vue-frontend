<script setup>
import { onMounted } from 'vue'
import { useAuth } from '../composables/useAuth'
import useProfile from '../composables/useProfile';
// const { user, getAuthUser } = useAuth()
const { profile, getSelfProfile } = useProfile()
onMounted(() => {
  getSelfProfile()
})
</script>

<template>
  <div class="container pt-4 pl-36 pr-28">
    <div class="row flex">
      <div class="justify-center flex">{{ profile }}</div>
    </div>
  </div>
</template>
