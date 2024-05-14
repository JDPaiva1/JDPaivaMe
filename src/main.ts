import { createApp } from 'vue'
import App from './App.vue'
import posthogPlugin from './plugins/posthog'

import './assets/main.css'
import './assets/fonts.css'
import './assets/icons.css'

const app = createApp(App)

app.use(posthogPlugin)
app.mount('#app')
