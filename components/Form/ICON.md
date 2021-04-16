## Icon属性

<details>
<summary>SHOW CODE</summary>

```html
<bee-input-icon v-model="form" placeholder="请选择图标" :icon-list="iconList"></bee-input-icon>

<script>
export default {
    data() {
      return {
        form:'el-icon-info',
        iconList: [{
          label: '基本图标',
          list: ['el-icon-info', 'el-icon-error', 'el-icon-error', 'el-icon-success', 'el-icon-warning', 'el-icon-question']
        },{
          label: '方向图标',
          list: ['el-icon-info', 'el-icon-back', 'el-icon-arrow-left', 'el-icon-arrow-down', 'el-icon-arrow-right', 'el-icon-arrow-up']
        }, {
          label: '符号图标',
          list: ['el-icon-plus', 'el-icon-minus', 'el-icon-close', 'el-icon-check']
        }]
      }
    }
}
</script>
```

</details>

### Props

| 参数       | 说明   | 类型    | 可选值 | 默认值 |
|----------|------|-------|-----|-----|
| iconList | 图标数组 | Array | -   | -   |


