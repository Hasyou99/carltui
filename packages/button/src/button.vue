<template>
  <button
    @click.stop.prevent="$emit('click')"
    class="c_button"
    :disabled="disabled"
    :class="[
    'c_button--'+type,
    {'is-disabled': disabled, 'is-round': round},
    ]"
  >
    <i v-if="icon !== ''" class="iconfont" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'cButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      disabled: Boolean,
      round: Boolean
    },
  }
</script>
