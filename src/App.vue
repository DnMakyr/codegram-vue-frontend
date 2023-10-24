<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import router from './router'
import TheNavbar from './components/TheNavbar.vue'
import TheSidebar from './components/TheSidebar.vue'
const isLoggedIn = sessionStorage.getItem('isLoggedIn')

if (!isLoggedIn) {
  router.push({ name: 'login' })
}
let navigation = computed(() => {
  if (isLoggedIn) {
    // Use .value to access the reactive value
    return TheSidebar
  } else {
    return TheNavbar
  }
})
</script>

<template>
  <component :is="navigation"></component>
  <Suspense>
    <RouterView />
  </Suspense>
</template>
