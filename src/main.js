import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

//import TheNavbar from './components/nav/TheNavbar.vue';
import Navbar from './components/UX/Navbar.vue'
import TheBanner from './components/banner/TheBanner.vue';

import Home from './components/Home.vue';
import Contact from './components/contact/Contact.vue';
import About from './components/about/About.vue';
import Projects from './components/projects/Projects.vue';
import Project from './components/projects/each/Project.vue';

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
        },
        {
            path: '/projects/:projectId',
            component: Project
        }
    ],
});

app.use(router);
app.component('Navbar', Navbar);
app.component('TheBanner', TheBanner);
app.mount('#app')
