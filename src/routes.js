import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './components/HomePage.vue';
import Users from './components/users/Users.vue';
import Contact from './components/Contact.vue';
import UserEdit from './components/users/UserEdit.vue';
import UserDetail from './components/users/UserDetail.vue';
import Index from './components/users/Index.vue';

import Header from './components/layout/Header.vue';
import Error404 from './components/404.vue';

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        name: 'homePage',
        components: {
            default: HomePage,
            header: Header,
        },
    },
    { path: '/contact', name: 'contact', component: Contact },
    {
        path: '/users',
        name: 'users',
        component: Users,
        children: [
            { path: '', name: 'Index', component: Index },
            { path: ':id', name: 'userDetail', component: UserDetail },
            { path: ':id/edit', name: 'userEdit', component: UserEdit },
        ],
    },
    { path: '/404', name: 'notFound', component: Error404 },
    { path: '*', redirect: '/404' },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
