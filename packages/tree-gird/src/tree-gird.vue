
<template>
    <div class='table'>
        <table v-if="initItems.length">
            <thead>
                <th v-for="(column) in columns" :key="column.title">
                    <label>
                        {{ column.title }}
                    </label>
                </th>
            </thead>
            <tbody>
                <tr v-for="(item) in initItems" :key="item.id" 
                    v-if="show(item)" :class="{actived:selectedId.includes(item.id)}">
                    <td v-for="(column,idx) in columns" :key="column.key"
                      :style="{'text-align':idx===0?'left':'center'}"  @click="RowClick(item,idx)">
                        <label>
                            <span v-if="idx===0"  @click.stop="toggle(item)">
                                <i class="blank" :style="{'width':(item.depth-1)*14+'px'}" v-if="item.depth!==1"></i>
                                <i v-if="item.children&&item.children.length>0" class="iconfont" 
                                    :class="{'c-icon-xiangxia2':!item.expanded,'c-icon-xiangyou1':item.expanded }"></i>
                                <i v-else class="blank"></i>
                            </span> 
                            {{renderBody(item,column) }}
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
//获取idx
const getArrIndex = function(arr, obj) {
    let index = null,
        key = Object.keys(obj)[0];
    arr.every((v, i) => {
        if (v[key] === obj[key]) {
            index = i;
            return false;
        }
        return true;
    });
    return index;
};

export default {
  name: 'cTreeGrid',
  props: {
    columns: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      initItems: [], //处理后数据数组,
      selectedId:[], //选中行
    };
  },
  watch: {
    items(val){
      this.init(val,1 ,null);
       console.log(this.initItems,'this')
    }
  },
  methods: {
    //  隐藏显示
    show(item) {
      return (
        (item.isShow && item.parent && item.parent.expanded) || item.depth === 1
      );
    },
    // 点击某一行,获取数据
    RowClick(data, idx) {
      if (idx === 0) return;
      this.$emit("row-click", data);
    },

    init(items, depth, parent){
      this.initItems = [];
      this.initData(items, depth, parent);
    },
    // 数据处理 增加自定义属性监听,数据变化更新
    initData(items, depth, parent) {
      items.forEach((item, index) => {
        item = Object.assign({}, item, {
          parent: parent, //记录其父级
          depth: depth //记录层级深度
        });
        item.isShow = true;
        this.initItems.push(item);
        if (item.children && item.children.length) {
          item.expanded = true;
          this.initData(item.children, depth + 1, item);
        }
      });
    },
    //折叠转换
    toggle(item) {
      item.children && item.children.length && item.expanded
        ? this.close(item)
        : this.open(item);
    },
    //打开所有的child
    open(item) {
      item.children &&
        item.children.forEach(child => {
          let temp = this.initItems.find(v => v.id == child.id),
            idx = getArrIndex(this.initItems, temp);
          this.$set(this.initItems[idx], "isShow", true);
          this.$set(this.initItems[idx].parent, "expanded", true);
          if (child.children && child.children.length) {
            this.open(child);
          }
        });
    },
    //隐藏所有的child
    close(item) {
      item.children &&
        item.children.forEach(child => {
          let temp = this.initItems.find(v => v.id == child.id),
            idx = getArrIndex(this.initItems, temp);
          //设置所有child的是否显示，且将child的parent的expand改为需要的值
          this.$set(this.initItems[idx], "isShow", false);
          this.$set(this.initItems[idx].parent, "expanded", false);
          if (child.children && child.children.length) {
            this.close(child);
          }
        });
    },
    OrgStatus(val){
        val = parseInt(val,10);
        if(val>2 || val<0) return '--';
        return ['启用','停用'][val-1];
    },
    // 返回内容
    renderBody(row, column, index) {
    //   //过滤状态和时间
    //   if(column.key==='create_time') return util.parseDateFromUnix(row[column.key])||'--';
    //   if(column.key==='org_status') return this.OrgStatus(row[column.key]);
      return row[column.key]|| '--';
    }
  },
};
</script>
<style lang='scss' scoped>
$tableBg: #fafafa #fff #d3e8fd #c8e8f4; //间隔颜色  选中的背景颜色    hover背景  
$tableHeaderBg: #e0e0e0; //表头颜色
.table {
  flex: 1;
  overflow: auto;
  width: inherit;
  height: 100%;
  margin-bottom: 1.6rem;
  background-color: #fff;
  font-weight: normal;
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 0.5rem;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #c2c2c2;
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(100, 100, 100, 0.1);
  }

  th {
    position: sticky;
    height: 38px;
    z-index: 1;
    top: -1px;
    background-color: nth($tableHeaderBg,1);
    border: {
      left: 1px solid nth($tableBg, 4);
      top: 1px solid nth($tableBg, 1);
      bottom: 1px solid nth($tableBg, 4);
      right: 1px solid nth($tableBg, 1);
    }
  }
  td {
    cursor: pointer;
    border: {
      left: 1px solid nth($tableBg, 3);
      bottom: 1px solid nth($tableBg, 3);
      right: 1px solid nth($tableBg, 3);
    }
  }
  tr:nth-child(odd) {
    background-color: nth($tableBg, 1);
  }
  tbody tr:hover {
    background: nth($tableBg, 3);
  }
  tr {
    height: 38px;
  }
  tr.actived {
    background-color: nth($tableBg, 4);
  }
  th,
  td {
    white-space: nowrap;
    padding: 0 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.blank {
  display: inline-block;
  height: 14px;
  width: 14px;
}

label {
  margin: 0 8px;
  cursor: pointer;
}
</style>
