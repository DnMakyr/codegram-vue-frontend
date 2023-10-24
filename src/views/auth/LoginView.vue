<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth.js'
import { useAuthStore } from '../../stores/auth'
import axios from 'axios'
const form = ref({
  email: '',
  password: ''
})
const { login } = useAuth()

const { setUser } = useAuthStore()

const handleLogin = async (form) => {
  try {
    await login(form)

    const response = await axios.get('/api/user')
    const userData = response.data

    setUser(userData)
  } catch (error) {
    console.error('Error during login:', error)
  }
}
</script>

<template>
  <div class="centered-container">
    <div class="card">
      <div class="card-body text-white">
        <div class="login-center flex my-2 flex-col">
          <h2>Sign in to Codegram</h2>
          <div>
            <form class="flex flex-col" @submit.prevent="handleLogin(form)">
              <label for="email" class="space-y-3">Email</label>
              <input type="text" name="email" class="input" v-model="form.email" />
              <label for="password" class="space-y-3">Password</label>
              <input
                type="password"
                name="password"
                class="input"
                autocomplete=""
                v-model="form.password"
              />
              <a class="mt-2">Forgot password?</a>
              <button class="login-btn mt-4 hover:brightness-90" type="submit">Login</button>
            </form>
          </div>
          <div class="flex mt-3 flex-col items-center">
            <p>
              New to Codegram?
              <RouterLink to="/register" class="hover:text-green-600">Sign up</RouterLink>
            </p>
            Using other methods?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 100vw;
}

.card {
  /* Your card styles here */
  width: 23rem;
  max-width: 800px;
  background-color: #36393e;
  height: 28rem;
  align-items: center;
  border: 4px solid #c8ccd2;
}
.input {
  border-radius: 5px;
  padding: 10px;
  color: black;
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 10px;
}
form {
  width: 16rem;
}
form a {
  color: #247ac0 !important;
  font-size: 14px;
}
p a {
  color: #247ac0 !important;
  font-size: 14px;
}
h2 {
  font-size: 16px;
  text-align: center;
}
label {
  font-size: 14px;
  font-weight: bold;
}
.login-btn {
  background-color: #7289da;
  padding: 10px 0;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
}
</style>
