import cRadio from './src/radio.vue';

cRadio.install = function(Vue, opts = {}) {
    Vue.component(cRadio.name, cRadio);
};

export default cRadio;