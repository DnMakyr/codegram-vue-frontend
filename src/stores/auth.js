import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authenticated = ref(false)
    const user = ref({})

    const isAuthenticated = computed(() => authenticated.value || false)
    const setUser = computed(() => user.value || {})
    function logIn(userLogged) {
      authenticated.value = true
      user.value = userLogged
    }
    function logOut() {
      authenticated.value = false
      user.value = {}
    }
    return {
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