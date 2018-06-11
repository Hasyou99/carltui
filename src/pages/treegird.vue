<template>
    <div>
        <h3>tree-gird 树形表格</h3>

        <c-tree-grid ref="treegird"
            :items='treeData' 
            :columns='columns'
            @row-click='rowClick'
        ></c-tree-grid>


        <h3>数据结构</h3>
        <div>
            this.treeData = [
            {
                "id": "1",
                ...,
                "children": [
                    {
                        "id": "2",
                        ...,
                        "children": [],
                    },
                    {
                        "id": "6",
                        ...,
                    },
                ]
            }
        ];
        <span>其中，id属性必需，children为子数组</span>
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
export default {
    data() {
        return {
            columns: [{
                    //表头
                    title: "机构名称",
                    key: "org_name"
                },
                {
                    title: "机构简称",
                    key: "org_simplify_name"
                },
                {
                    title: "状态",
                    key: "org_status"
                },
                {
                    title: "创建人",
                    key: "create_user"
                },
                {
                    title: "创建时间",
                    key: "create_time"
                },
                {
                    title: "描述",
                    key: "org_describe"
                }
            ],
            treeData: [], //树形列表数据
            trdata:[{
                name: "columns",
                desc: "表头",
                type: "array",
                select: "--",
                default: "--"
            },
            {
                name: "treeData",
                desc: "表格内容",
                type: 'array',
                select: "--",
                default: '--'
            },]
        };
    },
    methods: { 
        rowClick(id){
            console.log(id)
        }
    },
    mounted(){
        this.treeData = [
        {
            "id": "1",
            "company_code": "tiger",
            "org_pid": "0",
            "org_name": "业务部门",
            "org_simplify_name": "业务",
            "org_status": "1",
            "org_describe": "",
            "create_user": "李大虎",
            "create_time": "1525856083",
            "children": [
                {
                    "id": "2",
                    "company_code": "tiger",
                    "org_pid": "1",
                    "org_name": "销售",
                    "org_simplify_name": "销售",
                    "org_status": "1",
                    "org_describe": "这不是描述哈哈哈哈",
                    "create_user": "李大虎",
                    "create_time": "1525856108",
                    "children": [
                        {
                            "id": "3",
                            "company_code": "tiger",
                            "org_pid": "2",
                            "org_name": "后期部门",
                            "org_simplify_name": "后期",
                            "org_status": "1",
                            "org_describe": "这是描述",
                            "create_user": "李大虎",
                            "create_time": "1525860489",
                            "children": [
                                {
                                    "id": "4",
                                    "company_code": "tiger",
                                    "org_pid": "3",
                                    "org_name": "维修部门",
                                    "org_simplify_name": "维修",
                                    "org_status": "1",
                                    "org_describe": "这是描述",
                                    "create_user": "李大虎",
                                    "create_time": "1525860541",
                                    "children": [
                                        {
                                            "id": "5",
                                            "company_code": "tiger",
                                            "org_pid": "4",
                                            "org_name": "保养部门",
                                            "org_simplify_name": "保养",
                                            "org_status": "1",
                                            "org_describe": "这是描述",
                                            "create_user": "李大虎",
                                            "create_time": "1525860610"
                                        }
                                    ]
                                },
                                {
                                    "id": "8",
                                    "company_code": "tiger",
                                    "org_pid": "3",
                                    "org_name": "上门部门",
                                    "org_simplify_name": "上门",
                                    "org_status": "1",
                                    "org_describe": "这是描述",
                                    "create_user": "李大虎",
                                    "create_time": "1525936419"
                                },
                                {
                                    "id": "9",
                                    "company_code": "tiger",
                                    "org_pid": "3",
                                    "org_name": "上门部门",
                                    "org_simplify_name": "",
                                    "org_status": "1",
                                    "org_describe": "这是描述",
                                    "create_user": null,
                                    "create_time": "1526031599"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "6",
                    "company_code": "tiger",
                    "org_pid": "1",
                    "org_name": "财务部门",
                    "org_simplify_name": "会计",
                    "org_status": "2",
                    "org_describe": "这不是描述哈哈哈哈",
                    "create_user": "李大虎",
                    "create_time": "1525860668"
                },
            ]
        }
        ];
        console.log(this.treeData)
    },
    activated(){
        this.$refs.treegird.init()
    }
};
</script>