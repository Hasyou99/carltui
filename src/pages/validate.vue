<template>
    <div>
       <div>
         <h3>验证</h3>
           <c-validate  v-on:validate='result' size='4'/>

       </div>
        <br>

        <div class='code' ref="code">
          <code style='color:#aaa'>

           &lt;template&gt;<br>
                &nbsp;&lt;c-validate v-on:validate='result'  size='4' width='200' /&gt;<br>
            &lt;/template&gt;<br>
            &lt;script&gt;<br>
            export default {<br>
             &nbsp; data () {<br>
               &nbsp;&nbsp; return {<br>
                &nbsp;&nbsp;}<br>
              &nbsp;},<br>
              &nbsp;methods:{<br>
               &nbsp;&nbsp; result(data){<br>
                &nbsp;&nbsp;&nbsp;  alert('验证结果为：'+data)<br>
               &nbsp;&nbsp; }<br>
             &nbsp; },<br>
            }<br>
            &lt;/script&gt;
          </code>
        </div>
        <div style='text-align:center;border:1px solid #eaeefb;border-bottom-left-radius: 4px; border-bottom-right-radius: 4px;padding:5px 0'>
          <span  @click='showCode' style='cursor:pointer'> {{showcode?'∨显示代码':'∧隐藏代码'}}</span>
        </div>

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
    name: "cantype",
    desc: "验证类型（非必须）",
    type: "String",
    select: "blend number letter",
    default: "blend"
  },
  {
    name: "size",
    desc: "验证字符个数（非必填）",
    type: 'String Number',
    select: "--",
    default: '5'
  },
  {
    name: "width",
    desc: "验证区域宽度（非必填）",
    type: "String Number",
    select: "--",
    default: '200'
  },
  {
    name: "validate",
    desc: "callback",
    type: "Fucntion",
    select: "--",
    default: "--"
  },

];
export default {
  data() {
    return {
      trdata: data,
      showcode:true
    };
  },
  methods:{
    result(data){
      this.$message('验证结果为：'+data)
    },
    showCode(){
      console.log(this.showcode)
      console.log(this.$refs)
        this.showcode?this.$refs.code.style.height='360px':this.$refs.code.style.height='0'
        this.showcode = !this.showcode;
    }
  },
};
</script>
<style >
    .code{
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      overflow: hidden;
      height: 0;
      transition: height .5s;

    }
</style>