import axios from 'axios'
import router from '../router'
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

export const useAuth = () => {
  const authStore = useAuthStore()
  const messages = ref([])
  const login = async (payload) => {
    try {
      await axios.post('api/login', payload)
      router.push('/dashboard')
      authStore.logIn((await axios.get('api/user')).data)
    } catch (err) {
      console.log(err)
      messages.value = err.response.data.message
      console.log(messages.value)
    }
  }
  const register = async (user) => {
    try {
      await axios.post('api/register', user)
      login({ email: user.email, password: user.password })
    } catch (err) {
      console.log(err)
      messages.value = err.response.data.message
    }
  }
  function logout() {
    axios
      .post('api/logout')
      .then(() => {
        window.Echo.disconnect()
        sessionStorage.removeItem('authUserId')
        authStore.logOut()
        router.push({ name: 'login' })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return {
    messages,
    login,
    register,
    logout
  }
}
