import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import Home from './components/Home.vue';
import TheNavbar from './components/nav/TheNavbar.vue';
import Contact from './components/contact/Contact.vue';
import About from './components/about/About.vue';
import Projects from './components/projects/Projects.vue';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/projects',
            component: Projects,
        },
        {
            path: '/contact',
            component: Contact,
        },
        {
            path: '/about',
            component: About,
        }
    ],
});

app.use(router);
app.component('TheNavbar', TheNavbar);
app.mount('#app')
