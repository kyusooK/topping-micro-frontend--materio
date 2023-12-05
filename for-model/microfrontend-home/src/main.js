import App from '@/App.vue'
// import vuetify from '@/plugins/vuetify'
import router from '@/router'
import { createApp } from 'vue'
import axios from 'axios';
import { Icon } from '@iconify/vue';

axios.defaults.baseURL = ''


loadFonts()

const app = createApp(App)

app.config.globalProperties.$axios = axios;

// app.use(vuetify)


app.use(router)

app.component('Icon',Icon)

app.mount('#app')
