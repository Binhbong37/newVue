import Vue from 'vue';

import router from './routes';

import App from './App.vue';
Vue.filter('toUpperCase', (value) => {
    return value.toUpperCase();
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
