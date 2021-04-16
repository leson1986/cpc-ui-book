## Table属性

<details>
<summary>SHOW CODE</summary>

```html
<bee-input-table :props="props" :column="column" :on-load="onLoad" v-model="form" placeholder="请选择数据"></bee-input-table>
<bee-input-table :props="props" :column="column" :formatter="formatter" :on-load="onLoad" v-model="form" placeholder="请选择数据"></bee-input-table>

<script>
import { Message } from "element-ui";
export default {
    data() {
      return {
        column:{
          children:{
            border: true,
            column: [{
              label: '姓名',
              width: 120,
              search:true,
              prop: 'name'
            }, {
              label: '性别',
              search:true,
              prop: 'sex'
            }],
          },
        },
        props: {
          label: 'name',
          value: 'id'
        },
        form:'0'
      }
    },
    methods:{
      formatter(row){
        if(!row.name) return ''
        return row.name + '-' + row.sex
      },
      onLoad({ page, value,data }, callback){
        //首次加载去查询对应的值
        if (value) {
          Message.success('首次查询'+value)
          callback({
            id: '0',
            name: '张三',
            sex: '男'
          })
          return
        }
        if(data){
          Message.success('搜索查询参数'+JSON.stringify(data))
        }
        if(page){
          Message.success('分页参数'+JSON.stringify(page))
        }
        //分页查询信息
        callback({
          total: 2,
          data: [{
            id: '0',
            name: '张三',
            sex: '男'
          }, {
            id: '1',
            name: '李四',
            sex: '女'
          }]
        })
      }
    }
}
</script>
```

</details>

### Column

| 参数        | 说明             | 类型       | 可选值 | 默认值 |
|-----------|----------------|----------|-----|-----|
| formatter | 展示数据格式化        | Function | -   | -   |
| onLoad    | 首次加载数据、查询、翻页方法 | Function | -   | -   |


