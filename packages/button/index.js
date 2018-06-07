/**
 * @author Alex
 * Date: 2018/06/07
 */
import cButton from './src/button.vue';

cButton.install = function(Vue) {
    Vue.component(cButton.name, cButton);
};

export default cButton;