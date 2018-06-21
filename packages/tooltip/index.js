import cTooltip from './src/tooltip.vue';

cTooltip.install = function(Vue, opts = {}) {
    Vue.component(cTooltip.name, cTooltip);
};

export default cTooltip;