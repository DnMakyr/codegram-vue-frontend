<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import TheNavbar from '../components/navbar/TheNavbar.vue'
import TheSidebar from '../components/navbar/TheSidebar.vue'

// Initialize isLogin with the value from session storage (if available)
const isLogin = ref(sessionStorage.getItem('isLogin') === 'true')
const authStore = useAuthStore()
const navbarComponent = computed(() => {
  return isLogin.value ? TheSidebar : TheNavbar
})

onMounted(() => {
  watch(
    () => authStore.authenticated,
    (newAuthenticated) => {
      isLogin.value = newAuthenticated
      sessionStorage.setItem('isLogin', newAuthenticated.toString())
    }
  )
})
</script>

<template>
  <component :is="navbarComponent"></component>
  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>
