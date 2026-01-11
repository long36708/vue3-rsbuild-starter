import { createApp } from 'vue'
import App from './App.vue'
import '~build/console'
import './index.css'

createApp(App).mount('#root')

// console log the build info
// console.log(`Build ${sha} at ${now}`)
