/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

window.Event = new Vue();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('side-menu', require('./components/SideMenu.vue').default);
Vue.component('menu-button', require('./components/MenuButton.vue').default);
Vue.component('star-rating', require('./components/StarRating.vue').default);
Vue.component('modal-button', require('./components/ModalButton.vue').default);
Vue.component('login-modal', require('./components/LoginModal.vue').default);
Vue.component('register-modal', require('./components/RegisterModal.vue').default);
Vue.component('inline-svg', require('./components/InlineSvg.js').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
