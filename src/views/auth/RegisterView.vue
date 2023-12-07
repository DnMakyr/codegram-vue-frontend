<script setup>
import { RouterLink} from 'vue-router'
import { ref } from 'vue'
import { useAuth } from '../../composables/useAuth';
const form = ref({
  email: '',
  name: '',
  username: '',
  password: '',
  password_confirmation: ''
})
const { messages,register } = useAuth()

</script>

<template>
  <div>
    <div class="centered-container">
      <div class="card">
        <div class="card-body">
          <div class="reg-center tw-flex tw-my-2 tw-flex-col">
            <h2>Sign up</h2>
            <div class="tw-flex mb-3 tw-justify-center">Using other methods?</div>
            <!-- <p>{{ form }}</p> -->
            <div>
              <form class="tw-flex tw-flex-col" @submit.prevent="register(form)">
                <label for="email" class="tw-space-y-3">Email</label>
                <input type="email" class="input" v-model="form.email" />

                <label for="name" class="tw-space-y-3">Name</label>
                <input type="text" class="input" v-model="form.name" />

                <label for="username" class="tw-space-y-3">Username</label>
                <input type="text" class="input" v-model="form.username" />

                <label for="password" class="tw-space-y-3">Password</label>
                <input type="password" class="input" autocomplete="off" v-model="form.password" />

                <label for="password" class="tw-space-y-3">Confirm Password</label>
                <input
                  type="password"
                  class="input"
                  autocomplete="off"
                  v-model="form.password_confirmation"
                  />
                <span class="tw-text-red-500 tw-font-semibold" v-if="messages.length > 0"> {{ messages }}</span>
                <button class="login-btn mt-4 hover:tw-brightness-90 tw-text-white tw-border-0">Sign up</button>
              </form>
            </div>
          </div>
          <p class="tw-text-center">
            Already have an account? <RouterLink to="/" class="hover:!tw-text-green-500">Sign in</RouterLink>
          </p>
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
  height: 96vh;
  max-width: 100vw;
}

.card {
  /* Your card styles here */
  width: 23rem;
  max-width: 800px;
  background-color: #36393e;
  height: 40rem;
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
p a {
  color: #247ac0 !important;
  font-size: 14px;
  text-decoration: underline !important;
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
.card-body{
  color: white !important;
}
</style>
