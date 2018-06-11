<template>
  <label
    class="c_radio"
    :class="[
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    role="radio"
  >
    <span class="c_radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="c_radio__inner"></span>
      <input
        class="c_radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
      >
    </span>
    <span class="c_radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>

  export default {
    name: 'cRadio',

    inject: {
      elForm: {
        default: ''
      },

    },

    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String,
      border: Boolean,
    },

    data() {
      return {
        focus: false
      };
    },
    computed: {
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElRadioGroup') {
            parent = parent.$parent;
          } else {
            this._radioGroup = parent;
            return true;
          }
        }
        return false;
      },
      model: {
        get() {
          return this.value;
        },
        set(val) {
            this.$emit('input', val);
        }
      },
      
      isDisabled() {
        return this.disabled 
      },
    },

    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model);
        });
      }
    }
  };
</script>
