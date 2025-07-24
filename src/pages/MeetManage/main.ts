import { createApp } from 'vue'
import MeetManage from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(MeetManage)
app.use(createPinia())
app.mount('#app')
