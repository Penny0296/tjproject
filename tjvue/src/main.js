import { createApp } from 'vue'
// import App from './App.vue'
import Home from '@/components/Home.vue'
import router from '@/router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
 
 
 
import axios from '@/axios/index.js'
import VueAxios from 'vue-axios'

let app=createApp(Home)
app.use(router)
app.use(VueAxios, axios)
app.use(ElementPlus)

app.mount('#app')

