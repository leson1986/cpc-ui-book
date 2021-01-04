<template>
    <div>
        <bee-form v-model="form" :option="option" @submit="submit"></bee-form>
    </div>
</template>

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
