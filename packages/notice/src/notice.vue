<template>
  <transition name="c_notice">
    <div class="c_notice-mask" v-if="isShow">
      <div class="c_notice-wrapper" v-if="isShow" >
        <div :class="`c_${type}-container`" :style="{'width':width,'height':height}">
          <div :class="`c_${type}-header`">
            <span>{{ header }}</span>
            <i class="iconfont c-icon-jiahao1" v-if="type==='modal'" @click="close"></i>
          </div>
          
          <div :class="`c_${type}-body`">
            <slot></slot>
          </div>

          <div :class="[{'center':center},`c_${type}-footer`]">
            <c-button type='cancel' @click="close">取消</c-button>
            <c-button type="primary" class="ml16" @click="handleSubmit">确定</c-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "cNotice",
  data() {
    return {
      isShow: false
    };
  },
  props: {
    header: {
      //标题头
      type: String,
      default: "提示"
    },
    center:{
      type: Boolean,
      default: false
    },
    type:{
      type: String,
      default: 'notice'
    },
    width:{
      type: String,
      default: '400px'
    },
    height:{
      type: String,
      default: '180px'
    }
  },
  methods: {
    open() {
      this.isShow = true;
    },
    close() {
      this.isShow = false;
    },
    handleSubmit(data) {
      this.$emit('noticeSubmit');
    }
  }
};
</script>
