import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: ref(null)
  }),
  getters: {
    isLoggedIn: (state) => state.user !== null
  },
  actions: {
    setUser(user) {
      this.user = user
      this.persistLoginState(user !== null)
    },
    persistLoginState(isLoggedIn) {
      if (isLoggedIn) {
        sessionStorage.setItem('isLoggedIn', 'true')
      } else {
        sessionStorage.removeItem('isLoggedIn')
      }
    },
    logOut() {
      this.setUser(null)
    }
  }
})
