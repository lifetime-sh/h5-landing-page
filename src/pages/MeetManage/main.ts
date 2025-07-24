import { createApp } from 'vue'
import MeetManage from './index.vue'
import { createPinia } from 'pinia'

const app = createApp(MeetManage)
app.use(createPinia())
app.mount('#app')
