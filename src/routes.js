import Vue from 'vue';
import VueRouter from 'vue-router';
import Cart from './components/Cart.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: Cart },
        { path: '/about', component: About },
        { path: '/contact', component: Contact },
    ],
});

export default router;
