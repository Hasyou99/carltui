import cValidate from './validate.vue'
cValidate.install = (vue, opts = {}) => {
    vue.component(cValidate.name, cValidate)

}
export default cValidate