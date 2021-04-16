## Checkbox属性

<details>
<summary>SHOW CODE</summary>

```html
<el-row :span="24">
  <el-col :span="6">
     值:{{form}}<br>
    <bee-checkbox v-model="form" placeholder="请选择内容" :dic="dic"></bee-checkbox>
  </el-col>
  <el-col :span="24"></el-col>
  <el-col :span="6">
     值:{{form1}}<br>
    <bee-checkbox all v-model="form1" placeholder="请选择内容" :dic="dic"></bee-checkbox>
  </el-col>
</el-row>

<script>
export default {
    data() {
      return {
        form:[0,1],
        form1:[],
        dic:[{
          label:'选项1',
          value:0
        },{
          label:'选项2',
          value:1
        }]
      }
    }
}
</script>
```

</details>

### Props

| 参数        | 说明                   | 类型      | 可选值        | 默认值   |
|-----------|----------------------|---------|------------|-------|
| all | 是否启动全选               | Boolean | true/false | false |
| border    | 是否显示边框               | Boolean | —          | false |
| button    | 按钮组类型                | Boolean | —          | false |
| min       | 可被勾选的 checkbox 的最小数量 | Number  | —          | —     |
| max       | 可被勾选的 checkbox 的最大数量 | Number  | —          | —     |



