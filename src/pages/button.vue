<template>
    <div>
        <h3>Button 按钮</h3>

        <div>
            <c-button>默认按钮</c-button>
            <c-button type='primary'>主要按钮</c-button>
            <c-button type='success'>成功按钮</c-button>
            <c-button type='info'>信息按钮</c-button>
            <c-button type='cancel'>取消按钮</c-button>
            <c-button type='error'>删除按钮</c-button>
             <c-button type='warning'>警告按钮</c-button>
        </div>

        <div style="margin-top:16px;">
            <c-button round>圆形按钮</c-button>
            <c-button type='primary' round>主要按钮</c-button>
            <c-button type='success' round>成功按钮</c-button>
            <c-button type='info' round>信息按钮</c-button>
            <c-button type='cancel' round>取消按钮</c-button>
            <c-button type='error' round>删除按钮</c-button>
            <c-button type='warning' round>警告按钮</c-button>
        </div>

        <div style="margin-top:16px;">
            <c-button round icon='c-icon-star'>圆形按钮</c-button>
            <c-button type='primary' icon='c-icon-jiahao1' round>主要按钮</c-button>
            <c-button type='success' icon='c-icon-xiangxia5' round></c-button>
            <c-button type='info' icon='c-icon-xiangxia5'></c-button>
            <c-button type='cancel' icon='c-icon-xiangxia5'></c-button>
            <c-button type='error' icon='c-icon-xiangxia5'></c-button>
            <c-button type='warning' icon='c-icon-xiangxia5'></c-button>
        </div>

        <div style="margin-top:16px;">
            <c-button disabled>默认按钮</c-button>
            <c-button disabled type='primary'>默认按钮</c-button>
            <c-button disabled type='success'>成功按钮</c-button>
            <c-button disabled type='info'>信息按钮</c-button>
            <c-button disabled type='cancel'>取消按钮</c-button>
            <c-button disabled type='error'>删除按钮</c-button>
            <c-button disabled type='warning'>警告按钮</c-button>
        </div>

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
    select: "default,primary,success,info,warning,error,cancel",
    default: "default"
  },
  {
    name: "round",
    desc: "圆形",
    type: 'Boolean',
    select: "--",
    default: false
  },
  {
    name: "disabled",
    desc: "不可用",
    type: "Boolean",
    select: "--",
    default: false
  },
  {
    name: "icon",
    desc: "图标类型",
    type: "string",
    select: "--",
    default: "--"
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