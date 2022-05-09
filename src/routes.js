import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './components/HomePage.vue';
import Users from './components/users/Users.vue';
import Contact from './components/Contact.vue';
import UserEdit from './components/users/UserEdit.vue';
import UserDetail from './components/users/UserDetail.vue';
import Index from './components/users/Index.vue';

Vue.use(VueRouter);

let routes = [
    { path: '/', name: 'homePage', component: HomePage },
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
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
