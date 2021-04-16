

## Cascader属性

<details>
<summary>SHOW CODE</summary>

```html
<el-row :span="24">
            <el-col :span="6">
                值:{{ form }}<br />
                <bee-cascader v-model="form" :dic="dic"></bee-cascader>
            </el-col>
            <el-col :span="24"></el-col>
            <el-col :span="6">
                仅显示最后一级值:{{ form }}<br />
                <bee-cascader
                    v-model="form"
                    :show-all-levels="false"
                    :dic="dic"
                ></bee-cascader>
            </el-col>
            <el-col :span="24"></el-col>
            <el-col :span="6">
                多选:{{ form }}<br />
                <bee-cascader
                    v-model="form"
                    multiple
                    :dic="dic"
                ></bee-cascader>
            </el-col>
            <el-col :span="24"></el-col>
            <el-col :span="6">
                选择任意一级选项:{{ form }}<br />
                <bee-cascader
                    v-model="form"
                    check-strictly
                    :dic="dic"
                ></bee-cascader>
            </el-col>
            <el-col :span="24"></el-col>
            <el-col :span="6">
                懒加载值:{{ form1 }}<br />
                <bee-cascader
                    lazy
                    :lazy-load="lazyLoad"
                    :props="props"
                    v-model="form1"
                ></bee-cascader>
            </el-col>
        </el-row>

<script>

export default {
    data() {
      return {
        form:[ "zhinan", "shejiyuanze", "yizhi" ],
        form1:[ "110000", "110100", "110101" ],
        props: {
          label: 'name',
          value: 'code'
        },
        dic:[{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
          }]
        }]
      }]
    }
  },
  methods:{
    lazyLoad(node, resolve) {
      let baseUrl = 'https://cli.avuejs.com/api/area'
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
      }
    }
  }
}
</script>
```

</details>

### Column

| 参数            | 说明                                                                                        | 类型       | 可选值           | 默认值   |
|---------------|-------------------------------------------------------------------------------------------|----------|---------------|-------|
| showAllLevels | 级联输入框中是否显示选中值的完整路径                                                                        | Boolean  | true/false    | true  |
| tags          | 多选模式下是否折叠Tag                                                                              | Boolean  | -             | false |
| separator     | 选项分隔符                                                                                     | String   | —             | -     |
| filterable    | 是否可搜索选项                                                                                   | Boolean  | —             | —     |
| filterMethod  | 自定义搜索逻辑，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中	function(node, keyword)             | Function | -             | -     |
| expandTrigger | 次级菜单的展开方式                                                                                 | String   | click / hover | click |
| multiple      | 是否多选                                                                                      | Boolean  | -             | false |
| checkStrictly | 是否严格的遵守父子节点不互相关联                                                                          | Boolean  | -             | false |
| emitPath      | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值                                      | Boolean  | -             | true  |
| lazy          | 是否动态加载子节点，需与 lazyLoad 方法结合使用                                                              | Boolean  | -             | false |
| lazyLoad      | 加载动态数据的方法，仅在 lazy 为 true 时有效	function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用) | Function | -             | -     |

