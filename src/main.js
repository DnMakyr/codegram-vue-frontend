import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


const store = createPinia()
store.use(piniaPluginPersistedstate)

axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Content-Type'] = ['application/json', 'multipart/form-data']
axios.defaults.headers.common['Accept'] = ['application/json', 'multipart/form-data']
axios.defaults.withCredentials = true
await axios.get('/sanctum/csrf-cookie')

const app = createApp(App)

app.use(vuetify)
app.use(store)
app.use(router)

app.mount('#app')

