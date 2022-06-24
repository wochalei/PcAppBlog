import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css'
import 'animate.css/animate.compat.css'

import '@/common/styles/index.scss'
createApp(App).use(router).use(ElementPlus).mount('#app')
