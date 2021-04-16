## Selection多选

<details>
<summary>SHOW CODE</summary>

```html

<template>
    <div>
        <h3>普通用法</h3>
        <el-divider></el-divider>
        <bee-crud ref="crud" :page.sync="page" :data="data" :option="option" @selection-change="selectionChange" @on-load="onLoad">
            <template slot="tip">
                <el-button type="text" size="small">
                自定义按钮
                </el-button>
                <span>自定义内容</span>
            </template>
        </bee-crud>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([data[1]])">选中第二行</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
    </div>
</template>
<script>
import { Message } from "element-ui";
export default {
    data() {
      return {
         page: {
          pageSize: 20,
          pagerCount:5
        },
        data: [],
        option:{
          selection: true,
           selectable:(row,index)=>{
            return index===1;
          },
          reserveSelection:true,
          align:'center',
          menuAlign:'center',
          column:[
             {
              label:'姓名',
              prop:'name'
            }, {
              label:'性别',
              prop:'sex'
            }
          ]
        },
      };
    },
    methods: {
      onLoad(page) {
        Message.success('分页信息:' + JSON.stringify(page))
        this.page.total = 200
        //模拟分页
        if (this.page.currentPage === 1) {
          this.data = [
            {
              id:1,
              name: '张三',
              sex: '男'
            },{
              id:2,
              name: '李四',
              sex: '女'
            }
          ]
        } else if (this.page.currentPage == 2) {
          this.data = [
            {
              id:3,
              name: '王五',
              sex: '女'
            },{
              id:4,
              name: '赵六',
              sex: '女'
            }
          ]
        }
      },
      selectionChange(list){
        Message.success('选中的数据'+ JSON.stringify(list));
      },
      toggleSelection(val){
        this.$refs.crud.toggleSelection(val);
      }
    }
}
</script>


```

</details>

