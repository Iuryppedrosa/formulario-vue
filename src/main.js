import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/popper.min.js'
import App from './App.vue'
import { MaskInput } from 'vue-3-mask'

const app = createApp(App)
app.component('MaskInput', MaskInput)
app.mount('#app')
