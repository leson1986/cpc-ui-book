

## Switch属性

<details>
<summary>SHOW CODE</summary>

```html
<el-row :span="24">
    <el-col :span="24">
        值:{{ form }}<br />
        <bee-switch v-model="form" :dic="dic"></bee-switch>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="24">
        颜色值:{{ form }}<br />
        <bee-switch
            active-color="#13ce66"
            inactive-color="#ff4949"
            v-model="form"
            :dic="dic"
        ></bee-switch>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="24">
        图标值:{{ form }}<br />
        <bee-switch
            active-icon-class="el-icon-s-tools
"
            inactive-icon-class="el-icon-setting"
            v-model="form"
            :dic="dic"
        ></bee-switch>
    </el-col>
</el-row>

<script>
export default {
    data() {
        return {
            form: 1,
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

| 参数                | 说明                                       | 类型     | 可选值 | 默认值     |
|-------------------|------------------------------------------|--------|-----|---------|
| len               | switch 的宽度（像素）                           | Number | —   | 40      |
| activeIconClass   | switch 打开时所显示图标的类名，设置此项会忽略 active-text   | String | —   | —       |
| inactiveIconClass | switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text | String | —   | —       |
| activeColor       | switch 打开时的背景色                           | String | —   | #409EFF |
| inactiveColor     | switch 关闭时的背景色                           | String | —   | #C0CCDA |

