forEach: Model
fileName: router.js
path: microfrontend-home/src
---
import { createApp } from 'vue';
import Router from 'vue-router'

const app = createApp({});
app.use(Router);

import Home from './components/Home'

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
    ]
})

