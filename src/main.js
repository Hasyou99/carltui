// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';

import carltUI from '../packages/index'
import '../packages/theme-default/src/index.scss';

// import demoBlock from './components/demo-block.vue';
// Vue.component('demo-block', demoBlock);

Vue.use(carltUI)

Vue.config.productionTip = false;

console.log(carltUI, carltUI.Message, 123)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})