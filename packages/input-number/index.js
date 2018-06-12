import cInputNumber from './src/input-number.vue';

cInputNumber.install = function(Vue, opts = {}) {
    Vue.component(cInputNumber.name, cInputNumber);
};

export default cInputNumber;