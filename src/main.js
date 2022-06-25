import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css'
import 'animate.css/animate.compat.css'
import '@/common/styles/index.scss'
import http from '@/http/api.js'
import utils from '@/utils/tools.js'
const app = createApp(App);

app.config.globalProperties.$http = http;
app.config.globalProperties.$utils = utils;
console.log(app.config.globalProperties);
app.use(router).use(ElementPlus).mount('#app')
