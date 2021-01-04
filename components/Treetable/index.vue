<template>
    <div>
        <h3>员工选择（又名左树右表）</h3>
        <h6>说明：项目案例为“员工选择”，也可以用作同样结构的其他选择公共组件</h6>
        <el-button @click="handleDialog(0)">弹框单选</el-button>
        <el-dialog
            title="员工选择"
            :visible.sync="box1"
            v-dialogdrag
            class="bee-dialog"
            width="60%"
            top="8vh"
        >
            <div style="height: 65vh; overflow: auto">
                <bee-tree-table
                    :column="column"
                    :treeData="treeData"
                    :curdData="curdData"
                    :page.sync="page"
                    :width="280"
                    @node-click="handleTreeNode"
                    @current-row="handleCurrentRow"
                    @crud-load="handleCrudLoad"
                    @search="handleSearch"
                ></bee-tree-table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="box = false">取 消</el-button>
                <el-button type="primary" @click="box = false">确 定</el-button>
            </span>
        </el-dialog>&nbsp;&nbsp;&nbsp;<el-button @click="handleDialog(1)">弹框多选</el-button>
        <el-dialog
            title="员工选择"
            :visible.sync="box2"
            v-dialogdrag
            class="bee-dialog"
            width="60%"
            top="8vh"
        >
            <div style="height: 65vh; overflow: auto">
                <bee-tree-table
                    :column="column"
                    :treeData="treeData"
                    :curdData="curdData"
                    :multiple="true"
                    :valProps="props"
                    :page.sync="page"
                    :width="300"
                    placeholder="请输入员工姓名或员工号"
                    @node-click="handleTreeNode"
                    @crud-load="handleCrudLoad"
                    @search="handleSearch"
                    @close-tag="handleCloseTag"
                >
                </bee-tree-table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="box = false">取 消</el-button>
                <el-button type="primary" @click="box = false">确 定</el-button>
            </span>
        </el-dialog>
        <h4>单选</h4>
        <bee-tree-table
            :column="column"
            :treeData="treeData"
            :curdData="curdData"
            :page.sync="page"
            :width="280"
            @node-click="handleTreeNode"
            @current-row="handleCurrentRow"
            @crud-load="handleCrudLoad"
            @search="handleSearch"
        ></bee-tree-table>
        <h4>多选</h4>
        <bee-tree-table
            :column="column"
            :treeData="treeData"
            :curdData="curdData"
            :multiple="true"
            :valProps="props"
            :page.sync="page"
            :width="300"
            placeholder="请输入员工姓名或员工号"
            @node-click="handleTreeNode"
            @crud-load="handleCrudLoad"
            @search="handleSearch"
            @close-tag="handleCloseTag"
        >
        </bee-tree-table>
    </div>
</template>

<script>
import { Message, Notification } from "element-ui";

const staffData = [
    { id: '1', name: '用户 1', code: '123123', post: '前端开发', dept: '技术部' },
    { id: '2', name: '用户 2', code: '123123', post: '前端开发', dept: '技术部2'  },
    { id: '3', name: '用户 3', code: '123123', post: '前端开发', dept: '技术部3'  },
    { id: '4', name: '用户 4', code: '123123', post: '前端开发', dept: '技术部4'  }
]
export default {
    data() {
        return {
            box1: false,
            box2: false,
            page: {
                pageSize: 20,
                pagerCount: 5,
            },
            column: [
                {
                    label: "员工姓名",
                    prop: "name",
                },
                {
                    label: "工号",
                    prop: "code",
                },
                {
                    label: "部门",
                    prop: "dept",
                },
                {
                    label: "岗位",
                    prop: "post",
                },
            ],
            treeData: [
                {
                    value: 0,
                    label: "一级部门",
                    children: [
                        {
                            value: 1,
                            label: "一级部门1",
                        },
                        {
                            value: 2,
                            label: "一级部门2",
                        },
                        {
                            value: 3,
                            label: "一级部门3",
                        },
                        {
                            value: 4,
                            label: "一级部门4",
                        },
                    ],
                },
            ],
            curdData: [],
            props: {
                label: 'name'
            }
        };
    },
    mounted() {
        this.loadCrudData()
    },
    methods: {
        handleDialog(type) {
            type ? (this.box2 = true) : (this.box1 = true);
        },
        loadCrudData() {
            this.$nextTick(()=> {
                setTimeout(()=> {
                    this.curdData = staffData;
                    this.page.total = 30;
                }, 500)
            })
        },
        handleCrudLoad(page) {
            this.page.currentPage = page.currentPage
            this.loadCrudData()
        },
        handleTreeNode(data) {// 左树节点点击事件
            Message.success(JSON.stringify(data));
        },
        handleCurrentRow(val) {// 表格行单击
            Notification({
                showClose: true,
                message: "单选" + JSON.stringify(val),
                type: "success",
            });
        },
        handleSearch(params) { // 查询
            Notification({
                showClose: true,
                message: "查询结果" + JSON.stringify(params),
                type: "success",
            });
        },
        handleCloseTag(data) { // 关闭标签
            Message.success(JSON.stringify(data));
        }
    },
};
</script>
