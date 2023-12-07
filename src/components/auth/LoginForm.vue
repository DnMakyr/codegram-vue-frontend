<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useAuth } from '../../composables/useAuth.js'

const form = ref({
  email: '',
  password: ''
})
const { messages, login } = useAuth()
</script>

<template>
  <div class="centered-container">
    <div class="card">
      <div class="card-body">
        <div class="login-center tw-flex tw-my-2 tw-flex-col">
          <h2>Sign in to Codegram</h2>
          <div>
            <form class="tw-flex tw-flex-col" @submit.prevent="login(form)">
              <label for="email" class="tw-space-y-3">Email</label>
              <input type="text" name="email" class="input" v-model="form.email" />
              <label for="password" class="tw-space-y-3">Password</label>
              <input
                type="password"
                name="password"
                class="input"
                autocomplete=""
                v-model="form.password"
              />
              <a class="mt-2">Forgot password?</a>
              <span class="tw-text-red-500 tw-text-sm tw-font-semibold" v-if="messages.length">{{ messages }}</span>
              <button class="login-btn mt-4 hover:tw-brightness-90 tw-text-white" type="submit">
                Login
              </button>
            </form>
          </div>
          <div class="tw-flex mt-3 tw-flex-col tw-items-center">
            <p>
              New to Codegram?
              <RouterLink to="/register" class="hover:!tw-text-green-500">Sign up</RouterLink>
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
.card-body {
  color: white !important;
}
</style>
