import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/popper.min.js'
import App from './App.vue'
import { MaskInput } from 'vue-3-mask'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.component('MaskInput', MaskInput) // plugin
app.mount('#app')
