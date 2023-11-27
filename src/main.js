import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const store = createPinia()
store.use(piniaPluginPersistedstate)

axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Content-Type'] = ['application/json', 'multipart/form-data']
axios.defaults.headers.common['Accept'] = ['application/json', 'multipart/form-data']
axios.defaults.withXSRFToken = true
axios.defaults.withCredentials = true
await axios.get('/sanctum/csrf-cookie')

import Echo from 'laravel-echo'

import Pusher from 'pusher-js'
window.Pusher = Pusher

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'ec1add393a7b068d96be',
  cluster: 'ap1',
  forceTLS: true
})

const options = {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true,
  filterToasts: (toasts) => {
    // Keep track of existing types
    const types = {}
    return toasts.reduce((aggToasts, toast) => {
      // Check if type was not seen before
      if (!types[toast.type]) {
        aggToasts.push(toast)
        types[toast.type] = true
      }
      return aggToasts
    }, [])
  }
}

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Toast, options)

app.mount('#app')
