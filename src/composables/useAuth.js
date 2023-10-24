import axios from 'axios'
import router from '../router'
import { useAuthStore } from '../stores/auth'
export const useAuth = () => {
  async function login(payload) {
    await axios.post('api/login', payload)
    router.push('/dashboard')
  }
  async function register(user) {
    await axios.post('api/register', user)
    await axios.post('api/login', {
      email: user.email,
      password: user.password
    })
  }
  function logout() {
    axios
      .post('api/logout')
      .then(() => {
        useAuthStore().logOut()
        router.push({ name: 'login' })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return {
    login,
    register,
    logout
  }
}
