<template>
    
    <div>
        <h3>InputNumber input计数器</h3>
        <c-input-number v-model="inumber" :step='2' :max='10' :min='0'></c-input-number>

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
    name: "value",
    desc: "绑定值",
    type: "number",
    select: "--",
    default: "--"
  },
  {
    name: "min",
    desc: "设置计数器允许的最小值",
    type: "number",
    select: "--",
    default: '--'
  },
  {
    name: "max",
    desc: "设置计数器允许的最大值",
    type: "number",
    select: "--",
    default: '--'
  },
  {
    name: "step",
    desc: "计数器步长",
    type: "number",
    select: "--",
    default: '1'
  },
  {
    name: "disabled",
    desc: "是否禁用计数器",
    type: "boolean",
    select: "--",
    default: "false"
  }
];
export default {
  data() {
    return {
      inumber: 2,
      trdata:data
    };
  },
  watch: {
    inumber() {
      console.log(this.inumber, 1234);
    }
  }
};
</script>
