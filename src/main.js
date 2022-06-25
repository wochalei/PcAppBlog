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
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App);

app.config.globalProperties.$http = http;
app.config.globalProperties.$utils = utils;
console.log(app.config.globalProperties);
app.use(router).use(ElementPlus).use(VMdPreview).mount('#app')
