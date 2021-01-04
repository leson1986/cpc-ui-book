<template>
    <div>
        <h3>基础表单</h3>

        <bee-form :option="option" v-model="obj" @submit="submit">
            <template slot-scope="scope" slot="name">
                <bee-input
                    :disabled="scope.disabled"
                    :label="scope.column.label"
                    v-model="obj.name"
                ></bee-input>
            </template>
            <template slot-scope="scope" slot="test">
                <el-tag>测试自定义内容</el-tag>
            </template>
            <template slot="cascaderType" slot-scope="{ node, data }">
                <span>{{ data.label }}</span>
                <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            </template>
            <span
                class="el-tree-node__label"
                slot-scope="{ item }"
                slot="treeType"
            >
                <span>
                    <i class="el-icon-user-solid"></i>
                    {{ item.label }}
                </span>
            </span>
        </bee-form>

        <bee-crud :option="option2" :data="data"></bee-crud>
        <bee-form :option="option2" v-model="form"></bee-form>

    </div>
</template>

<script>
let baseUrl = "https://cli.avuejs.com/api/area";
import { Message } from "element-ui";

export default {
    name: "Form",
    data() {
        return {
            data: [],
            obj3: {
                dynamic: [
                    {
                province: "110000",
                city: "110100",
                area: "110101",
                    },
                    {
                province: "110000",
                city: "110100",
                area: "110101",
                    },
                ],
            },
            option3: {
                labelWidth: 110,
                column: [
                    {
                        label: "输入框",
                        prop: "input",
                        span: 12,
                        row: true,
                    },
                    {
                        label: "子表单",
                        prop: "dynamic",
                        type: "dynamic",
                        span: 24,
                        children: {
                            align: "center",
                            headerAlign: "center",
                            column: [
                                {
                                    label: "省份",
                                    prop: "province",
                                    type: "select",
                                    props: {
                                        label: "name",
                                        value: "code",
                                    },
                                    cascaderItem: ["city", "area"],
                                    dicUrl: `${baseUrl}/getProvince`,
                                    dicFormatter: (res) => {
                                        return res.data; //返回字典的层级结构
                                    },
                                    rules: [
                                        {
                                            required: true,
                                            message: "请选择省份",
                                            trigger: "blur",
                                        },
                                    ],
                                },
                                {
                                    label: "文本框1",
                                    prop: "text1",
                                },
                                {
                                    label: "城市",
                                    prop: "city",
                                    type: "select",
                                    props: {
                                        label: "name",
                                        value: "code",
                                    },
                                    row: true,
                                    cascaderIndex: 0,
                                    dicUrl: `${baseUrl}/getCity/{{key}}?province={{province}}`,
                                    rules: [
                                        {
                                            required: true,
                                            message: "请选择城市",
                                            trigger: "blur",
                                        },
                                    ],
                                },
                                {
                                    label: "文本框2",
                                    prop: "text2",
                                },
                                {
                                    label: "文本框3",
                                    prop: "text3",
                                },
                                {
                                    label: "地区",
                                    prop: "area",
                                    type: "select",
                                    props: {
                                        label: "name",
                                        value: "code",
                                    },
                                    cascaderIndex: 0,
                                    dicUrl: `${baseUrl}/getArea/{{key}}?city={{city}}`,
                                    rules: [
                                        {
                                            required: true,
                                            message: "请选择地区",
                                            trigger: "blur",
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                ],
            },
            form: {
                province: "110000",
                city: "110100",
                area: "110101",
            },
            option2: {
                column: [
                    {
                        label: "省份",
                        prop: "province",
                        type: "select",
                        props: {
                            label: "name",
                            value: "code",
                        },
                        cascaderItem: ["city", "area"],
                        dicUrl: `${baseUrl}/getProvince`,
                        dicFormatter: (res) => {
                            return res.data; //返回字典的层级结构
                        },
                        rules: [
                            {
                                required: true,
                                message: "请选择省份",
                                trigger: "blur",
                            },
                        ],
                    },
                    {
                        label: "文本框1",
                        prop: "text1",
                    },
                    {
                        label: "城市",
                        prop: "city",
                        type: "select",
                        props: {
                            label: "name",
                            value: "code",
                        },
                        row: true,
                        cascaderIndex: 0,
                        dicUrl: `${baseUrl}/getCity/{{key}}?province={{province}}`,
                        rules: [
                            {
                                required: true,
                                message: "请选择城市",
                                trigger: "blur",
                            },
                        ],
                    },
                    {
                        label: "文本框2",
                        prop: "text2",
                    },
                    {
                        label: "文本框3",
                        prop: "text3",
                    },
                    {
                        label: "地区",
                        prop: "area",
                        type: "select",
                        props: {
                            label: "name",
                            value: "code",
                        },
                        cascaderIndex: 0,
                        dicUrl: `${baseUrl}/getArea/{{key}}?city={{city}}`,
                        rules: [
                            {
                                required: true,
                                message: "请选择地区",
                                trigger: "blur",
                            },
                        ],
                    },
                ],
            },
            obj: {
                checkbox: ["120000", "110000", "130000"],
            },
            option: {
                card: false,
                labelWidth: 110,
                column: [
                    {
                        label: "自定义测试",
                        prop: "test",
                        formslot: true,
                    },
                    {
                        label: "姓名",
                        prop: "name",
                        formslot: true,
                    },
                    {
                        label: "级别",
                        prop: "cascader",
                        type: "cascader",
                        changeOnSelect: true,
                        // multiple: true,
                        // filterable: true,
                        // checkStrictly: true,
                        typeslot: true,
                        dicData: [
                            {
                                label: "一级",
                                value: 3,
                                children: [
                                    {
                                        label: "一级1",
                                        value: 1,
                                    },
                                    {
                                        label: "一级2",
                                        value: 2,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: "树型",
                        prop: "tree",
                        type: "tree",
                        multiple: true,
                        typeslot: true,
                        checked: (data) => {
                            console.log(data);
                        },
                        nodeClick: (data) => {
                            console.log(data);
                        },
                        dicData: [
                            {
                                label: "测试1",
                                value: 0,
                                children: [
                                    {
                                        label: "测试0",
                                        value: 2,
                                    },
                                ],
                            },
                            {
                                label: "测试2",
                                value: 1,
                            },
                        ],
                    },
                    {
                        width: 120,
                        label: "开关",
                        prop: "switch",
                        type: "switch",
                        dicData: [
                            {
                                label: "关闭",
                                value: 0,
                            },
                            {
                                label: "开启",
                                value: 1,
                            },
                        ],
                    },
                    {
                        label: "默认值",
                        prop: "default",
                        value: "22",
                        rules: [
                            {
                                required: true,
                                message: "请输入数字",
                                trigger: "blur",
                            },
                        ],
                    },
                    {
                        label: "多选",
                        prop: "selects",
                        multiple: true,
                        type: "select",
                        dataType: "number",
                        dicData: [
                            {
                                label: "选项1",
                                value: 0,
                            },
                            {
                                label: "选项2",
                                value: 1,
                            },
                        ],
                    },
                    {
                        label: "数字",
                        prop: "number",
                        type: "number",
                        step: 10,
                        rules: [
                            {
                                required: true,
                                type: "number",
                                message: "请输入数字",
                            },
                        ],
                    },
                    {
                        label: "省份",
                        prop: "province",
                        type: "select",
                        props: {
                            label: "name",
                            value: "code",
                        },
                        cascaderItem: ["city", "area"],
                        dicUrl: `${baseUrl}/getProvince`,
                        rules: [
                            {
                                required: true,
                                message: "请选择省份",
                                trigger: "blur",
                            },
                        ],
                    },
                    {
                        label: "城市",
                        prop: "city",
                        type: "select",
                        props: {
                            label: "name",
                            value: "code",
                        },
                        row: true,
                        defaultIndex: 1,
                        dicFlag: false,
                        dicUrl: `${baseUrl}/getCity/{{key}}`,
                        rules: [
                            {
                                required: true,
                                message: "请选择城市",
                                trigger: "blur",
                            },
                        ],
                    },
                    {
                        label: "地区",
                        prop: "area",
                        type: "select",
                        props: {
                            label: "name",
                            value: "code",
                        },
                        defaultIndex: 1,
                        dicFlag: false,
                        dicUrl: `${baseUrl}/getArea/{{key}}`,
                        rules: [
                            {
                                required: true,
                                message: "请选择地区",
                                trigger: "blur",
                            },
                        ],
                    },
                    {
                        label: "多选",
                        prop: "checkbox",
                        type: "checkbox",
                        max: 5,
                        min: 2,
                        props: {
                            label: "name",
                            value: "code",
                        },
                        span: 24,
                        rules: [
                            {
                                type: "array",
                                required: true,
                                message: "请输入数字",
                            },
                        ],
                        dicUrl: `${baseUrl}/getProvince`,
                    },
                    {
                        label: "图标选择器",
                        prop: "icon",
                        type: "icon",
                        iconList: [
                            {
                                label: "基本图标",
                                list: [
                                    "el-icon-info",
                                    "el-icon-error",
                                    "el-icon-error",
                                    "el-icon-success",
                                    "el-icon-warning",
                                    "el-icon-question",
                                ],
                            },
                            {
                                label: "方向图标",
                                list: [
                                    "el-icon-back",
                                    "el-icon-arrow-left",
                                    "el-icon-arrow-down",
                                    "el-icon-arrow-right",
                                    "el-icon-arrow-up",
                                ],
                            },
                            {
                                label: "符号图标",
                                list: [
                                    "el-icon-plus",
                                    "el-icon-minus",
                                    "el-icon-close",
                                    "el-icon-check",
                                ],
                            },
                        ],
                    },
                ],
            },
        };
    },
    mounted() {
        this.obj = {
            switch: 1,
            selects: "0,1",
            name: "small",
            cascader: [3, 1],
            default: 10,
            tree: [2],
            province: "220000",
            city: "220700",
            area: "220702",
            icon: "el-icon-error",
        };
    },
    methods: {
        submit(form, done) {
            Message.success("3s后关闭");
            setTimeout(() => {
                done();
            }, 3000);
        },
    },
};
</script>
