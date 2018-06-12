<template>
    <div class="c_input-number">
        <i class="iconfont c-icon-jianhao c_input-number-btn"
            :class="{'is-disabled':inputValue=== min || disabled}" @click.stop="decrease"></i>
        <input class="c_input-number-origal" :value="msg" 
            :max='max' :min='min' :disabled='disabled' :class="{'is-disabled': disabled}"/>
        <i class="iconfont c-icon-jiahao1 c_input-number-btn" @click.stop="add" 
            :class="{'is-disabled':inputValue=== max || disabled}"></i>
    </div>
</template>

<script>
    export default {
        name:'cInputNumber',
        data(){
            return {
                inputValue:this.msg,
            }
        },
        props:{
            msg:{  //接受v-model绑定的值
                type:Number,
            },
            step:{  //每次增加或减少的数
                type:Number,
                default:1,
            },
            max:{
                type:Number,
            },
            min:{
                type:Number,
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        model:{
            prop:'msg',
            event:'inputNum',
        },
        methods:{
            decrease(){
                if(this.inputValue===parseInt(this.min,10)||this.disabled) return false;
                this.inputValue -= this.step;
                this.$emit('inputNum',this.inputValue);
            },
            add(){
                if(this.inputValue===parseInt(this.max,10)||this.disabled) return false;
                this.inputValue += this.step;
                this.$emit('inputNum',this.inputValue);
            },
        },
        mounted(){
            console.log(this.model,11)
        }
    }
</script>
