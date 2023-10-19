import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.withCredentials = true
// await axios.get('/sanctum/csrf-cookie')


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
