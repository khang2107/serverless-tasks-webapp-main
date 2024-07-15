import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

axios.defaults.baseURL = "https://r2k7hp11p5.execute-api.ap-southeast-2.amazonaws.com/v1"

createApp(App).use(router).mount('#app')
