import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

const store = createPinia()
store.use(piniaPluginPersistedstate)

axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.withCredentials = true
await axios.get('/sanctum/csrf-cookie')

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')

