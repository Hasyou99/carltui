<template>
    <div class="demo">
        <h3>Tooltip 提示框</h3>

        <h4>Use</h4>
        <pre>&lt;Tooltip content="这是提示内容">&lt;c-button>上左&lt;/c-button>&lt;/Tooltip></pre>
        <h4>说明：</h4>
        <p>1、由于组件的原因，输入结果必须要包含在一个标签里，因此上面的输出结果为：<br>
            &lt;div class="c-tooltip">&lt;c-button>上左&lt;/c-button>&lt;/div><br>
            并且位置计算是以c-tooltip为参照对象，如是组件内的标签包含了margin等样式，最后显示结果会有所偏移。
        </p>
        <p>2、根据浏览器自适应，提法语不会超出屏幕外</p>
        <h3>1、基本用法</h3>
        <div class="tooltip-demo">
            <div class="top">
                <c-tooltip content="这是提示内容这是提示内容" ><c-button>上左</c-button></c-tooltip>
                <c-tooltip content="这是提示内容这是提示内容" direction="top"><c-button>上边</c-button></c-tooltip>
                <c-tooltip content="这是提示内容" direction="top-right"><c-button>上右</c-button></c-tooltip>
            </div>
            <div class="center">
                <c-tooltip direction="left">
                    <p slot="content">这是提示内容</p>
                    <c-button>左边</c-button>
                </c-tooltip>
                <c-button></c-button>
                <c-tooltip direction="right" content="这是提示内容">
                    <c-button>右边</c-button>
                </c-tooltip>
            </div>
            <div class="bottom">
                <c-tooltip direction="bottom-left" content="这是提示内容"><c-button>下左</c-button></c-tooltip>
                <c-tooltip direction="bottom" content="这是提示内容"><c-button>下边</c-button></c-tooltip>
                <c-tooltip direction="bottom-right" content="这是提示内容"><c-button>下右</c-button></c-tooltip>
            </div>
        </div>
        <h4>2、多文字自动换行</h4>
        <p>可通过设置最大宽度自动换行</p>
        <p>&nbsp;</p>
        <div class="tooltip-demo">
            <div class="top">
                <c-tooltip content="提示语的左边位置跟当前标签对齐，如提示语X轴位置到浏览器右边的距离小于最大宽，将以最小宽显示并换行" :maxWidth="500"><c-button>上左</c-button></c-tooltip>
                <c-tooltip content="上边提示是根据是根据当前标签中间位置，向左偏移50%实现居中，如果当前标签到浏览器右边的距离小于最大宽时，实际显示宽为到边浏览器右边的距离，并不是最大宽" direction="top"><c-button>上边</c-button>
                </c-tooltip>
                <c-tooltip content="这里跟上左类型，计算的是到浏览器左边的距离" direction="top-right" :maxWidth="200"><c-button>上右</c-button>
                </c-tooltip>
            </div>
            <div class="center">
                <c-tooltip direction="left" :maxWidth="500">
                    <p slot="content">受当前标签到浏览器左边的距离影响</p>
                    <c-button>左边</c-button>
                </c-tooltip>
                <c-button></c-button>
                <c-tooltip direction="right" content="受当前标签到浏览器左边的距离影响" :maxWidth="200">
                    <c-button>右边</c-button>
                </c-tooltip>
            </div>
            <div class="bottom">
                <c-tooltip direction="bottom-left" content="这是提示内容，如果内容超过设定的最大宽时则自动换行。" :maxWidth="200"><c-button>下左</c-button>
                </c-tooltip>
                <c-tooltip direction="bottom" content="这是提示内容，如果内容超过设定的最大宽时则自动换行。如果内容超过设定的最大宽时则自动换行"><c-button>下边</c-button>
                </c-tooltip>
                <c-tooltip direction="bottom-right" content="这是提示内容，如果内容超过设定的最大宽时则自动换行。这是提示内容，如果内容超过设定的最大宽时则自动换行。"><c-button>下右</c-button>
                </c-tooltip>
            </div>
        </div>
        <h4>3、特殊情况</h4>
        <p>同一项目存在多种不同效果时，将鼠标移到下面两个icon试试效果</p>
        <p>&nbsp;</p>
        <div class="tooltip-demo">
            <c-tooltip content="这里是提示文字，因为icon比较小，这个方向箭头明显是没有对齐的"><i class="icon">?</i></c-tooltip>
            <c-tooltip content="这里是提示文字。解决的办法就是添类名，修改样式。这里顺便把外观也给改下" className="align"><i class="icon">?</i></c-tooltip>
        </div>

        <h4>4、延时消失</h4>
        <p>传参数据单位为ms，使用  :delay='5000'  传参</p>
        <div class="tooltip-demo">
            <c-tooltip content="这里是提示文字，鼠标离开后5s后消失" :delay='5000'><c-button>5s后消失</c-button></c-tooltip>
        </div>
       
        <h3>API</h3>
        <table class="c_table">
            <tr>
                <th>参数</th>
                <th>默认</th>
                <th>说明</th>
            </tr>
            <tr>
                <td>content</td>
                <td>String</td>
                <td>显示的内容。支持slot传内容，参数形式优先显示</td>
            </tr>
            <tr>
                <td>className</td>
                <td>String</td>
                <td>添加的类名</td>
            </tr>
            <tr>
                <td>direction</td>
                <td>String</td>
                <td>显示方向。分top-left、top、top-right、left、right、bottom-left、bottom、bottom-right共8个方向</td>
            </tr>
            <tr>
                <td>maxWidth</td>
                <td>Number｜500</td>
                <td>最大显示宽</td>
            </tr>
            <tr>
                <td>delay</td>
                <td>Number｜200</td>
                <td>延时关闭时间，单位毫秒。主要是为了能让鼠标移到提示文字上面，实现点链接等</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {},
  methods: {
    click() {}
  },
  computed: {},
  mounted() {},
  filters: {}
};
</script>
<style scoped>
.tooltip-demo {
  width: 350px;
  margin-left: 100px;
  text-align: center;
}


.center {
  padding: 40px 0;
  overflow: hidden;
}

.c-tooltip {
  margin: 0 5px;
}
.tooltip-demo .icon {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-style: normal;
  background: #ddd;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
}
/**/
.tooltip.align {
  background: #f60;
}
.tooltip.align:before {
    left: 7px;
  border-top-color: #f60;
}
</style>