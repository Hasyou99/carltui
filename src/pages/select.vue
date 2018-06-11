<template>
    <div>
       <div>
         <h3>select 选择框</h3>
           <span>打款用途</span>
          <c-select
          placeholder='请输入打款用途并查询'
          :optionsList='lists'
          optionTitle='打款用途'
          @checkedMessage='showMesage'
          multiple
          ></c-select>
       </div>
        <br>

        <div class='code' ref="code">
          <code style='color:#aaa'>
           &nbsp;&lt;c-select <br>
             &nbsp;&nbsp; placeholder='请输入打款用途并查询'<br>
              &nbsp;&nbsp;:optionsList='lists'<br>
             &nbsp;&nbsp; optionTitle='打款用途'<br>
             &nbsp;&nbsp; @checkedMessage='showMesage'<br>
            &nbsp;&nbsp;  multiple<br>
        &nbsp;  &gt;&lt;/c-select&gt;<br>
            <br>
           &nbsp;   &lt;script&gt;  <br>
          &nbsp;    export default {  <br>
          &nbsp;  &nbsp;      data() {  <br>
           &nbsp;  &nbsp;  &nbsp;       return {  <br>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;        lists: [ {key:1,title:'整车采购'},......]  <br>
           &nbsp;  &nbsp;  &nbsp;       }  <br>
           &nbsp;  &nbsp;     },  <br>
             &nbsp;  &nbsp; methods:{<br>
           &nbsp;  &nbsp; &nbsp;  showMesage(data){<br>
             &nbsp;  &nbsp; &nbsp;  &nbsp;  console.log('收到信息',data);<br>
           &nbsp;  &nbsp; &nbsp;   }<br>
           &nbsp;  &nbsp;   }<br>
           &nbsp;   }  <br>
          &nbsp;    &lt;/script&gt;
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
    name: "placeholder",
    desc: "提示",
    type: "String",
    select: "anyString",
    default: "--"
  },
  {
    name: "optionsList",
    desc: "option数组",
    type: 'Array',
    select: "--",
    default: '--'
  },
  {
    name: "optionTitle",
    desc: "option标题",
    type: "String",
    select: "--",
    default: '--'
  },
  {
    name: "checkedMessage",
    desc: "callback",
    type: "Fucntion",
    select: "--",
    default: "--"
  },
  {
    name: "multiple",
    desc: "是否开启多选",
    type: "--",
    select: "--",
    default: "false"
  }
];
export default {
  data() {
    return {
      trdata: data,
       lists:[
        {key:1,title:'整车采购'},
        {key:2,title:'保证金'},
        {key:3,title:'批量采购'},
        {key:4,title:'购车金'},
        {key:5,title:'押金'},
        {key:6,title:'维修金'},
        {key:7,title:'维修单'},
        {key:8,title:'故障单'},
        {key:9,title:'备购'},
        {key:10,title:'采购'},
        {key:11,title:'采购'},
        {key:12,title:'采购'},
        {key:13,title:'采购'},
        {key:14,title:'采购'},
        {key:15,title:'采购'},
        {key:16,title:'件采购'},
        {key:17,title:'车车车'},
        {key:25,title:'件采购'},
        {key:26,title:'件采购'},
        {key:27,title:'备件采购'},
        {key:28,title:'件采购'},
      ],
      showcode:true
    };
  },
  methods:{
    showMesage(data){
      console.log('收到信息',data);
    },
    showCode(){
      console.log(this.showcode)
      console.log(this.$refs)
        this.showcode?this.$refs.code.style.height='500px':this.$refs.code.style.height='0'
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
      transition: height .2s;

    }
</style>