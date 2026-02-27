import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)

// Setup Pinia
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
