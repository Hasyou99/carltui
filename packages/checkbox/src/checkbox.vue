
<template>
    <div class="c-checkbox">
        <input type="checkbox"
               :id="id"
               :name="name"
               :value="value"
               :required="required"
               :disabled="disabled"
               @change="onChange"
               :checked="state">
        <label :for="id">
            <slot name="input-box">
                <span class="input-box">
                    <!-- svg画对勾 表示选中 -->
                    <svg class="input-box-tick" viewBox="0 0 16 16">
                        <path fill="none" d="M2,6.2l3.8,3.4l9-8.8"></path>
                    </svg>
                    <!-- svg画横线 表示半选 -->
                    <!-- <svg class="input-box-tick" viewBox="0 0 16 16">
                        <path fill="none" d="M2,5.8 H12"></path>
                    </svg> -->
                </span>
            </slot>
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "input"
  },
  name: "cCheckbox",
  props: {
    id: {
      type: String,
      default: function() {
        return "checkbox-id-" + this._uid;
      }
    },
    name: {
      type: String,
      default: null
    },
    value: {
      default: null
    },
    modelValue: {
      default: undefined
    },
    checked: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    model: {}
  },
  computed: {
    state() {
      if (this.modelValue === undefined) {
        return this.checked;
      }
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.indexOf(this.value) > -1;
      }
      return !!this.modelValue;
    }
  },
  methods: {
    onChange() {
      this.toggle();
    },
    toggle() {
      let value;
      //绑定Array的时候返回数组集合
      if (Array.isArray(this.modelValue)) {
        value = this.modelValue.slice(0);
        this.state
          ? value.splice(value.indexOf(this.value), 1)
          : value.push(this.value);
      } else {
        //绑定string的时候返回布尔值
        value = !this.state;
      }
      this.$emit("input", value);
    }
  },
  watch: {
    checked(newValue) {
      if (newValue !== this.state) {
        this.toggle();
      }
    }
  },
  mounted() {
    if (this.checked && !this.state) {
      this.toggle();
    }
  }
};
</script>