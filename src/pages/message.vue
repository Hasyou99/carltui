<template>
    <div>
        <h3>Message 消息提示</h3>

        <div>
            <c-button type='success' @click="$message.success('成功提示')">成功按钮</c-button>
            <c-button type='info' @click="$message.info({message:'消息提示',iconClass:'c-icon-bell',center:true})">信息按钮</c-button>
            <c-button type='error' @click="$message.error('错误提示')">删除按钮</c-button>
             <c-button type='warning' @click="$message.warning('警告提示')">警告按钮</c-button>
        </div>

        <h3>使用规则</h3>
        <div>第一种：this.$message[type](options)</div>
        <div>第二种：this.$message(options),其中options={type:'success',message:'消息提示',
                iconClass:'c-icon-bell',center:true,duration:2000}</div>


        <h3>参数说明</h3>
        <table class="table">
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
    desc: "类型",
    type: "string",
    select: "success,info,warning,error",
    default: "info"
  },
  {
    name: "message",
    desc: "提示内容",
    type: 'string',
    select: "--",
    default: '--'
  },
  {
    name: "duration",
    desc: "延时时间,单位毫秒",
    type: "Number",
    select: "--",
    default: 3000
  },
  {
    name: "iconClass",
    desc: "图标类型",
    type: "string",
    select: "--",
    default: "--"
  },
  {
    name: "center",
    desc: "是否居中,默认left",
    type: "Boolean",
    select: "--",
    default: false
  }
];
export default {
  data() {
    return {
      trdata: data
    };
  }
};
</script>