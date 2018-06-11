import cSelect from './select.vue'
cSelect.install = (vue, opts = {})=> {
  vue.component(cSelect.name, cSelect)

}
export default cSelect