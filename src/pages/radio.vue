<template>
    <div>
        <h3>Radio 单选框</h3>

        <div>
           <c-radio name="robot" value="I'm a robot" v-model="radio">
                I'm a robot
            </c-radio>
            <c-radio name="robot" value="0" disabled>
                I'm not a robot
            </c-radio>
            <c-radio name="robot" value="1" v-model="radio">
                1
            </c-radio>
            <c-radio name="robot" value="2" v-model="radio">
                2
            </c-radio>
            <c-radio name="robot" value="3" v-model="radio">
                3
            </c-radio>

           <span>v-model绑定后的值：</span> {{radio}}.
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
    default: "--"
  },
  {
    name: "class-name",
    desc: "class类名",
    type: 'string',
    select: "--",
    default: null
  },
  {
    name: "name",
    desc: "名字，用于单选",
    type: "string",
    select: "--",
    default: null
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
    desc: "是否必须",
    type: "boolean",
    select: "--",
    default: "false"
  }
];
export default {
  data() {
    return {
      trdata: data,
      radio:'1',
    };
  },
  watch:{
      radio(){
          console.log(this.radio,'radio')
      }
  }
};
</script>