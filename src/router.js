import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import Contact from './components/contact/Contact.vue';
import About from './components/about/About.vue';
import Projects from './components/projects/Projects.vue';
import Project from './components/projects/each/Project.vue';
import ProjectDetails from './components/projects/each/ProjectDetails.vue';

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
            beforeEnter(to, from, next) {
                next();
            }
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
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return {
            left: 0,
            top: 0,
            behavior: 'smooth'
        }
    }
});

router.beforeEach(function(to, from, next) {
    next();
});

export default router;