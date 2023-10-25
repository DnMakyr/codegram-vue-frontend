import { ref } from 'vue'
import axios from 'axios'
import router from '../router'
import { useAuthStore } from '../stores/auth'

export const useAuth = () => {
  const user = ref({})
  const authStore = useAuthStore()
  async function getAuthUser() {
    try {
      const res = await axios.get('api/user')
      user.value = res.data.user
    } catch (err) {
      console.log(err)
    }
  }
  async function login(payload) {
    try {
      await axios.post('api/login', payload)
      router.push('/dashboard')
      authStore.logIn((await axios.get('api/user')).data)
    } catch (err) {
      console.log(err)
    }
  }
  async function register(user) {
    try {
      await axios.post('api/register', user)
      login({ email: user.email, password: user.password })
    } catch (err) {
      console.log(err)
    }
  }
  function logout() {
    axios
      .post('api/logout')
      .then(() => {
        authStore.logOut()
        router.push({ name: 'login' })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return {
    user,
    getAuthUser,
    login,
    register,
    logout
  }
}
