

## TREE Attributes :star:

<details>
<summary>SHOW CODE</summary>

```html
 <bee-form v-model="form" :option="option" @submit="submit"></bee-form>

<script>
let baseUrl = 'https://cli.avuejs.com/api/area'
const DIC=  [
      {
        label: '一级1',
        value: 1,
        children:[{
            label: '子类',
            value: 100,
        }]
      }, {
        label: '一级2',
        value: 2,
      },{
        label: '一级3',
        value: 3,
      }, {
        label: '一级4',
        value: 4,
      },{
        label: '一级5',
        value: 5,
      }, {
        label: '一级6',
        value: 6,
      },{
        label: '一级7',
        value: 7,
      }, {
        label: '一级8',
        value: 8,
      }, {
        label: '一级9',
        value: 9,
      }, {
        label: '一级10',
        value: 10,
      }
    ]
export default {
    data() {
      return {
        form:{
          tree1:1,
          tree2:[1,2]
        },
        option:{
          labelWidth: 120,
          column: [{
              label: '单选下拉',
              prop: 'tree1',
              filter:false,
              type: 'tree',
              dicData:DIC
          }, {
              label: '多选下拉',
              prop: 'tree2',
              type: 'tree',
              filterText:'搜索关键字制自定义',
              multiple:true,
              dicData:DIC,
          },{
            label:'懒加载',
            prop:'id',
            type:'tree',
            props: {
              label: 'name',
              value: 'code'
            },
            lazy:true,
            treeLoad: (node, resolve)=> {
              let stop_level = 2;
              let level = node.level;
              let data = node.data || {}
              let code = data.code;
              let list = [];
              let callback = () => {
                resolve((list || []).map(ele => {
                  return Object.assign(ele, {
                    leaf: level >= stop_level
                  })
                }));
              }
              if (level == 0) {
                axios.get(`${baseUrl}/getProvince`).then(res => {
                  list = res.data.data;
                  callback()
                })
              }
              if (level == 1) {
                axios.get(`${baseUrl}/getCity/${code}`).then(res => {
                  list = res.data.data;
                  callback()
                })
              } else if (level == 2) {
                axios.get(`${baseUrl}/getArea/${code}`).then(res => {
                  list = res.data.data;
                  callback()
                })
              }else{
                list=[]
                callback()
              }
            },
            nodeClick(data,node,doc) {
                alert(33)
            }
          }]
        }
      };
    }
}
</script>
```

</details>

## Props

| 参数                 | 说明                                                              | 类型              | 可选值      | 默认值      |
|---------------------|-------------------------------------------------------------------|--------------------|------------|----------|
| multiple            | 多选                                                             | Boolean                                                                                                         | true/false | false    |
| checkStrictly       | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为                               | false                                                                                                           | Boolean    | —        |
| accordion           | 是否每次只打开一个同级树节点展开                                               | Boolean                                                                                                         | —          | false    |
| defaultExpandAll    | 是否默认展开所有节点                                                     | Boolean                                                                                                         | —          | false    |
| expandOnClickNode   | 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 | Boolean                                                                                                         | -          | false    |
| defaultExpandedKeys | 默认展开的节点的 key 的数组                                               | Array                                                                                                           | —          | —        |
| defaultCheckedKeys  | 默认勾选的节点的 key 的数组                                               | Array                                                                                                           | —          | —        |
| filter              | 是否开启条件筛选                                                       | Boolean                                                                                                         | -          | true     |
| filterText          | 条件筛选提示语                                                        | String                                                                                                          | -          | 请输入搜索关键字 |
| iconClass           | 自定义树节点的图标                                                      | String                                                                                                          | -          | -        |
| leafOnly            | 子类全选时勾选值是否包含父类                                                 | Boolean                                                                                                         | -          | true     |
| parent              | 父类是否可以点击和选择                                                    | Boolean                                                                                                         | -          | true     |
| lazy                | 是否懒加载子节点，需与 load 方法结合使用                                        | Boolean                                                                                                         | —          | false    |
| treeLoad            | 加载子树数据的方法，仅当 lazy 属性为true 时生效                                  | Function(node, resolve)                                                                                         | —          | —        |
| nodeClick           | 节点被点击时的回调                                                      | 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。                                                           | —          | —        |
| checked             | 当复选框被点击的时候触发                                                   | 共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性 | —          | —        |
