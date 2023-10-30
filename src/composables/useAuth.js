import { ref } from 'vue'
import axios from 'axios'
import router from '../router'
import { useAuthStore } from '../stores/auth'

export const useAuth = () => {
  const authUserId = ref()
  const authStore = useAuthStore()

  // async function getAuthUser() {
  //   try {
  //     const res = await axios.get('api/user')
  //     sessionStorage.setItem('authUserId', res.data.user.id)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  async function login(payload) {
    try {
      await axios.post('api/login', payload)
      router.push('/dashboard')
      authStore.logIn((await axios.get('api/user')).data.user.id)
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
        sessionStorage.removeItem('authUserId')
        authStore.logOut()
        router.push({ name: 'login' })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return {
    authUserId,
    // getAuthUser,
    login,
    register,
    logout
  }
}
