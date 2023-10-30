import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authenticated = ref(false)
    const userId = ref({})

    const isAuthenticated = computed(() => authenticated.value || false)
    const setUser = computed(() => userId.value || {})
    function logIn(userLogged) {
      authenticated.value = true
      userId.value = userLogged
    }
    function logOut() {
      authenticated.value = false
      userId.value = {}
    }
    return {
      userId,
      authenticated,
      isAuthenticated,
      setUser,
      logIn,
      logOut
    }
  },
  {
    persist: { storage: sessionStorage }
  }
)