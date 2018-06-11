<template>
    <div>
        <h3>Notice  &&  Modal</h3>

        <div>
            <c-button type='primary' @click="getNotice" >notice</c-button>
            <c-button type='primary' @click="getModal" >modal</c-button>
        </div>

        <c-notice ref="cnotice" @noticeSubmit='notSubmit'>
            <p>
                <i class="iconfont c-icon-question" style="font-size:16px"></i>
                确定删除此选项嘛？
            </p>
        </c-notice>
        <c-notice width='500px' height='300px' ref="cmodal" type='modal' center @noticeSubmit='nSubmit'>
            <div>111</div>
            <div>111</div>
            <div>1112</div>
            <div>22</div>
            <div>33</div>
            <div>33</div>
            <div>111</div>
            <div>111</div>
            <div>1112</div>
            <div>22</div>
            <div>33</div>
            <div>33</div>
            <div>111</div>
            <div>111</div>
            <div>1112</div>
            <div>22</div>
            <div>33</div>
            <div>33</div>
            <div>111</div>
            <div>111</div>
            <div>1112</div>
            <div>22</div>
            <div>33</div>
            <div>33</div>
            <div>111</div>
            <div>111</div>
            <div>1112</div>
            <div>22</div>
            <div>33</div>
            <div>33</div><div>111</div>
            <div>111</div>
            <div>1112</div>
            <div>22</div>
            <div>33</div>
            <div>33</div>
        </c-notice>

        <h3>使用规则</h3>
        


        <h3>参数说明</h3>
        <table class="c_table">
            <thead>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) in trdata" :key="index">
                    <td>{{item.name}}</td>
                     <td>{{item.desc}}</td>
                      <td>{{item.type}}</td>
                       <td>{{item.select}}</td>
                        <td>{{item.default}}</td>
                </tr>
            </tbody>
        </table>


    </div>
</template>
<script>
let data = [
    {
    name: "type",
    desc: "提示框的类型",
    type: "string",
    select: "modal,notice",
    default: "notice"
  },
  {
    name: "header",
    desc: "提示的头部title",
    type: "string",
    select: "--",
    default: "提示"
  },
  {
    name: "center",
    desc: "footer的按钮是否居中",
    type: "Boolean",
    select: "--",
    default: 'false'
  },
  {
    name: "width",
    desc: "container宽度",
    type: "string",
    select: "--",
    default: '420px'
  },
  {
    name: "height",
    desc: "container高度",
    type: "string",
    select: "--",
    default: '180px'
  },
  {
    name: "slot",
    desc: "插槽内的内容",
    type: 'all',
    select: "--",
    default: '--'
  },
  {
    name: "noticeSubmit",
    desc: "点击确定后emit出来的事件，用于父组件监听",
    type: 'EVENTS',
    select: "--",
    default: '--'
  },
];
export default {
  data() {
    return {
      trdata: data
    };
  },
  methods:{
      getNotice(){
          this.$refs.cnotice.open();
      },
      getModal(){
          this.$refs.cmodal.open();
      },
      nSubmit(){
           this.$refs.cmodal.close();
      },
      notSubmit(){
          this.$refs.cnotice.close();
      },
  }
};
</script>