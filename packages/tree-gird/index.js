import cTreeGird from './src/tree-gird.vue';

cTreeGird.install = function(Vue, opts = {}) {
    Vue.component(cTreeGird.name, cTreeGird);
};

export default cTreeGird;