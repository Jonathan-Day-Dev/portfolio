import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

import TheNavbar from './components/nav/TheNavbar.vue';

app.component('TheNavbar', TheNavbar);

app.mount('#app')
