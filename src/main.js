import { createApp } from 'vue';

import Navbar from './components/UX/Navbar.vue'
import TheBanner from './components/banner/TheBanner.vue';

import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router);
app.component('Navbar', Navbar);
app.component('TheBanner', TheBanner);
app.mount('#app')
