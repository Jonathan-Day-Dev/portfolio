import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import Navbar from './components/UX/Navbar.vue'
import TheBanner from './components/banner/TheBanner.vue';

import Home from './components/Home.vue';
import Contact from './components/contact/Contact.vue';
import About from './components/about/About.vue';
import Projects from './components/projects/Projects.vue';
import Project from './components/projects/each/Project.vue';
import ProjectDetails from './components/projects/each/ProjectDetails.vue';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home,
        },
        {
            name: 'projects',
            path: '/projects',
            component: Projects,
            children: [
                {
                    name: 'project',
                    path: ':projectId',
                    component: Project,
                    props: true
                },
                {
                    name: 'projectDetails',
                    path: 'd/:projectId',
                    component: ProjectDetails,
                    props: true
                }
            ]
        },
        {
            name: 'contact',
            path: '/contact',
            component: Contact,
        },
        {
            name: 'about',
            path: '/about',
            component: About,
        },
        {
            path: '/:notFound(.*)',
            redirect: '/'
        }
    ],
});

app.use(router);
app.component('Navbar', Navbar);
app.component('TheBanner', TheBanner);
app.mount('#app')
