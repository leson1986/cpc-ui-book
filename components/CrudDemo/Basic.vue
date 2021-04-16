<template>
    <div>
        <h3>普通用法</h3>
        <el-divider>该示例主要展示了表格丰富的显示效果</el-divider>
        <bee-crud :data="data" :option="option"></bee-crud>
        <h3>丰富表格</h3>
        <el-divider></el-divider>
        <el-row style="margin-bottom:20px;font-size:15px">
            <el-col :span="4">显示边框: <el-switch size="small" v-model="showBorder"> </el-switch></el-col>
            <el-col :span="4">显示斑马纹: <el-switch size="small" v-model="showStripe"> </el-switch></el-col>
            <el-col :span="4">显示索引: <el-switch size="small" v-model="showIndex"> </el-switch></el-col>
            <el-col :span="4">显示多选框: <el-switch size="small" v-model="showCheckbox"> </el-switch></el-col>
            <el-col :span="4">显示表头: <el-switch size="small" v-model="showHeader"> </el-switch></el-col>
            </el-row>
            <el-row style="margin-bottom:20px">
            <el-radio-group v-model="sizeValue">
                <el-radio label="small">默认</el-radio>
                <el-radio label="medium">medium</el-radio>
                <el-radio label="small">small</el-radio>
                <el-radio label="mini">mini</el-radio>
            </el-radio-group>
        </el-row>
        <bee-crud :data="data" :option="option0"></bee-crud>
        <h3>合并菜单</h3>
        <el-divider></el-divider>
        <bee-crud :data="data" :option="option1" v-model="obj" @date-change="dateChange">
            <template slot-scope="scope" slot="menuBtn">
                <el-dropdown-item divided @click.native="tip">自定义按钮</el-dropdown-item>
            </template>
            <template slot-scope="scope" slot="menu">
                <el-button size="small" @click.native="tip">自定义按钮</el-button>
            </template>
        </bee-crud>
        <h3>文本菜单</h3>
        <el-divider></el-divider>
        <bee-crud :data="data" :option="option2" v-model="obj" @date-change="dateChange">
            <template slot-scope="scope" slot="menu">
                <el-button type="text" size="small" @click.native="tip">自定义按钮</el-button>
            </template>
        </bee-crud>
        <h3>图标菜单</h3>
        <el-divider></el-divider>
        <bee-crud :data="data" :option="option3" v-model="obj" @date-change="dateChange">
            <template slot-scope="scope" slot="menu">
                <el-button size="small" @click.native="tip" icon="el-icon-share"></el-button>
            </template>
        </bee-crud>
    </div>
</template>

<script>
import { Message } from "element-ui";
  export default {
    data() {
      return {
        obj:{},
        data: [
          {
            name:'张三',
            sex:'男',
            date:'1994-02-23 00:00:00'
          }, {
            name:'李四',
            sex:'女',
            date:'1994-02-23 00:00:00'
          }, {
            name:'王五',
            sex:'女',
            date:'1994-02-23 00:00:00'
          }, {
            name:'赵六',
            sex:'男',
            date:'1994-02-23 00:00:00'
          }
        ],
        option:{
          title:'表格的标题',
          page:false,
          align:'center',
          menuAlign:'center',
          column:[
             {
              label:'姓名',
              prop:'name'
            }, {
              label:'性别',
              prop:'sex'
            },{
              label: "日期",
              prop: "date",
              type: "date",
              format: "yyyy-MM-dd hh:mm:ss",
              valueFormat: "yyyy-MM-dd hh:mm:ss",
            }
          ]
        },
        option1:{
          title:'表格的标题',
          menuType:'menu',
          dateBtn:true,
          dateDefault:true,
          page:false,
          align:'center',
          menuAlign:'center',
          column:[
             {
              label:'姓名',
              prop:'name',
            }, {
              label:'性别',
              prop:'sex'
            },{
              label: "日期",
              prop: "date",
              type: "date",
              format: "yyyy-MM-dd hh:mm:ss",
              valueFormat: "yyyy-MM-dd hh:mm:ss",
            }
          ]
        },
        option2:{
          title:'表格的标题',
          menuType:'text',
          page:false,
          align:'center',
          dateBtn:true,
          dateDefault:true,
          menuAlign:'center',
          column:[
             {
              label:'姓名',
              prop:'name'
            },
            {
              label:'性别',
              prop:'sex'
            },{
              label: "日期",
              prop: "date",
              type: "date",
              format: "yyyy-MM-dd hh:mm:ss",
              valueFormat: "yyyy-MM-dd hh:mm:ss",
            }
          ]
        },
        option3:{
          title:'表格的标题',
          menuType:'icon',
          page:false,
          align:'center',
          dateBtn:true,
          dateDefault:true,
          menuAlign:'center',
          column:[
             {
              label:'姓名',
              prop:'name'
            },
            {
              label:'性别',
              prop:'sex'
            },{
              label: "日期",
              prop: "date",
              type: "date",
              format: "yyyy-MM-dd hh:mm:ss",
              valueFormat: "yyyy-MM-dd hh:mm:ss",
            }
          ]
        },
        showBorder: false,
        showStripe: false,
        showHeader: true,
        showIndex: true,
        showCheckbox: false,
        showPage:false,
        sizeValue:'small',
      }
    },
     computed: {
       option0(){
         return{
            title:'表格的标题',
            border:this.showBorder,
            stripe:this.showStripe,
            showHeader:this.showHeader,
            size:this.sizeValue,
            index:this.showIndex,
            selection:this.showCheckbox,
            page:this.showPage,
            align:'center',
            menuAlign:'center',
            column:[
              {
                label:'姓名',
                prop:'name'
              },
              {
                label:'性别',
                prop:'sex'
              }
            ]
         }
       }
     },
    methods: {
      dateChange(date){
        Message.success(date);
      },
      tip(){
        Message.success('自定义按钮');
      }
    }
  }
</script>
