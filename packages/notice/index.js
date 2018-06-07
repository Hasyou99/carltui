import cNotice from './src/notice.vue';

cNotice.install = function(Vue, opts = {}) {
    Vue.component(cNotice.name, cNotice);
};

export default cNotice;