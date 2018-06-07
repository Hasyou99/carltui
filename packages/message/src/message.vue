<template>
  <transition name="c-message-fade">
    <div v-if='show'
      :class="[
        'c-message',
        type && !iconClass ? `c-message--${ type }` : '',
        center ? 'is-center' : '']"
    >
      <i :class="iconClass" class='iconfont' v-if="iconClass"></i>
      <i :class="typeClass" class='iconfont' v-else></i>
      <slot>
        <p class="c-message__content">{{ message }}</p>
      </slot>
    </div>
  </transition>
</template>

<script type="text/babel">
  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  };

  export default {
    data() {
      return {
        show:false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        timer: null,
        center: false
      };
    },

    computed: {
      typeClass() {
        return this.type && !this.iconClass
          ? `c-message__icon c-icon-${ typeMap[this.type] }`
          : '';
      }
    },


    methods: {
      startTimer() {
        this.show = true;
        if(this.timer){
            clearTimeOut(this.timer)
        }else{
            this.timer = setTimeout(()=>{
                this.show = false
            }, this.duration);
        }
      },
    },
    mounted() {
      this.startTimer();
    }
  };
</script>
