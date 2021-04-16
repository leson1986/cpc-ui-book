
<template>
    <div>
        <h3>普通用法</h3>
        <el-divider></el-divider>
        <bee-crud
        :data="data"
        :option="option"
        :page.sync="page"
        @on-load="onLoad"
        ></bee-crud>

        <h3>自定义分页</h3>
        <el-divider></el-divider>
        <bee-crud
        :data="data"
        :option="option"
        :page.sync="page1"
        @size-change="sizeChange"
        @current-change="currentChange"
        ></bee-crud>
    </div>
</template>
<script>
import { Message } from "element-ui";
  export default {
    data() {
      return {
        page1: {
          currentPage: 1,
          total: 0,
          layout: "total,pager,prev, next",
          background:false,
          pageSize: 10
        },
        page: {
           pageSize: 20,
           pagerCount:5
        },
        data: [],
        option:{
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
    created(){
      this.getList()
    },
    methods: {
      getList(){
        this.page1.total=40;
        if(this.page1.currentPage===1){
          this.data=[{
            name:'张三',
            sex:'男'
          }]
        }else if(this.page1.currentPage==2){
          this.data=[{
            name:'李四',
            sex:'女'
          }]
        }
      },
      onLoad(page){
        Message.success('分页信息:'+JSON.stringify(page));
        this.page.total=40;
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
      sizeChange(val){
        this.page1.currentPage=1;
        this.page1.pageSize=val;
        this.getList();
        Message.success('行数'+ val);
      },
      currentChange(val){
        this.page1.currentPage=val;
        this.getList();
        Message.success('页码'+val);
      },
    }
  };
</script>
