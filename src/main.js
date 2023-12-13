import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'

const app = createApp(App)
app.provide('today', new Date().toISOString().split('T')[0])    // 애플리케이션을 구성하는 모든 컴포넌트는 today를 inject하여 사용 가능
app.mount('#app')