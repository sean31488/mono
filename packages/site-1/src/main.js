import { createApp } from 'vue'
import App from './App.vue'
import SeanUIPlugin from '@sean/ui/global'

const app = createApp(App)
app.use(SeanUIPlugin)
app.mount('#app')
