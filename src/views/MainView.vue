<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import TheSidebar from '../components/navbar/TheSidebar.vue'
import TheNavbar from '../components/navbar/TheNavbar.vue'

onMounted(() => {
  watch(
    () => authStore.authenticated,
    (newAuthenticated) => {
      isLogin.value = newAuthenticated
      sessionStorage.setItem('isLogin', newAuthenticated.toString())
    }
  )
})

const isLogin = ref(sessionStorage.getItem('isLogin') === 'true')

const authStore = useAuthStore()

const nav = computed(() => {
  return isLogin.value ? TheSidebar : TheNavbar
})
</script>

<template>
  <component :is="nav"></component>
  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>
