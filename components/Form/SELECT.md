

## Select属性

<details>
<summary>SHOW CODE</summary>

```html
<el-row :span="24">
            <el-col :span="24">
                值:{{ form }}<br />
                <avue-select
                    v-model="form"
                    placeholder="请选择内容"
                    type="tree"
                    :dic="dic"
                ></avue-select>
            </el-col>
            <el-col :span="24"></el-col>
            <el-col :span="24">
                值:{{ form1 }}<br />
                <avue-select
                    multiple
                    v-model="form1"
                    placeholder="请选择内容"
                    type="tree"
                    :dic="dic"
                ></avue-select>
            </el-col>
        </el-row>

<script>
export default {
    data() {
        return {
            form: "",
            form1: [0, 1],
            dic: [
                {
                    label: "选项1",
                    value: 0,
                },
                {
                    label: "选项2",
                    value: 1,
                },
            ],
        };
    },
};
</script>
```

</details>

### Props

| 参数                 | 说明                                           | 类型       | 可选值        | 默认值   |
|--------------------|----------------------------------------------|----------|------------|-------|
| cascaderItem       | 级联的子节点prop                                   | Array    | -          | -     |
| cascaderIndex      | 级联的默认选项                                      | Number   | -          | -     |
| multiple           | 多选                                           | Boolean  | true/false | false |
| tags               | 多选时是否将选中值按文字的形式展示                            | Boolean  | true/false | false |
| allowCreate        | 是否允许用户创建新条目，需配合 filterable 使用                | Boolean  | true/false | false |
| filterable         | 是否可搜索                                        | Boolean  | true/false | false |
| remote             | 是否为远程搜索                                      | Boolean  | true/false | false |
| remoteMethod       | 远程搜索方法                                       | Function | —          | —     |
| defaultFirstOption | 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用 | Boolean  | true/false | false |
| loadingText        | 远程加载时显示的文字                                   | String   | —          | 加载中   |

