import cCheckbox from './src/checkbox.vue';

cCheckbox.install = function(Vue, opts = {}) {
    Vue.component(cCheckbox.name, cCheckbox);
};

export default cCheckbox;