<template>
    <div>
        <h3>Radio 单选框</h3>

        <div>
            <c-checkbox v-model="checkbox"></c-checkbox>
        </div>
        <div>
           <c-checkbox name="" value="I'm a robot" v-model="checkbox" className="inputbox">
               <span slot="input-box">
                    [..]
                </span>
                I'm a robot
            </c-checkbox>
            <c-checkbox name="" value="0" disabled>
                I'm not a robot
            </c-checkbox>
            <c-checkbox name="robot" value="1" v-model="checkbox">
                1
            </c-checkbox>
            <c-checkbox name="robot" value="2" v-model="checkbox">
                2
            </c-checkbox>
            <c-checkbox name="robot" value="3" v-model="checkbox">
                3
            </c-checkbox>

           <div>v-model绑定后的值：{{checkbox}}.</div> 
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
    name: "id",
    desc: "id",
    type: "string",
    select: "--",
    default: "checkbox-id-(_uid)"
  },
  {
    name: "name",
    desc: "名字，用于多选",
    type: "string",
    select: "--",
    default: 'null'
  },
  {
    name: "v-model",
    desc: "数据绑定",
    type: "string||boolean",
    select: "--",
    default: "--"
  },
  {
    name: "value",
    desc: "数据绑定后，选中的值",
    type: "string||boolean",
    select: "--",
    default: "--"
  },
  {
    name: "checked",
    desc: "是否被选中",
    type: "boolean",
    select: "--",
    default: "false"
  },
  {
    name: "disabled",
    desc: "不可用状态",
    type: "boolean",
    select: "--",
    default: "false"
  },
  {
    name: "required",
    desc: "在表单提交时是否必须",
    type: "boolean",
    select: "--",
    default: "false"
  },
  {
    name: "slot='input-box'",
    desc: "插槽，改变复选框的样式，可插入任意样式",
    type: "html||vue",
    select: "--",
    default: "null"
  }
];
export default {
  data() {
    return {
      trdata: data,
      checkbox:["1"],
      cname:''
    };
  },
  watch:{
      checkbox(){
          console.log(this.checkbox,'checkbox')
      },
       cname(){
          console.log(this.cname,'cname')
      }
  }
};
</script>
