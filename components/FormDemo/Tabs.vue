
<template>
    <div>
        <h3>普通用法</h3>
        <el-divider></el-divider>
        <el-button @click="tabs=!tabs">转化</el-button><br /><br />
        <bee-form @tab-click="handleTabClick" :option="option" v-model="form" @submit="handleSubmit">
            <template slot="group1Header">
                <h4>自定义表头</h4>
            </template>
        </bee-form>
    </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  data(){
    return {
       tabs:true,
       form:{
          text:'文本',
          text1:'文本1',
          text2:'文本2',
          text3:'文本3',
       },
    }
  },
  computed:{
    option(){
      return {
          tabs:this.tabs,
          tabsActive:2,
          column: [{
            label: '内容1',
            prop: 'text1',
          }],
          group:[
            {
              icon:'el-icon-info',
              label: '分组1',
              prop: 'group1',
              column: [{
                label: '内容1',
                prop: 'text1',
              }]
            },{
              icon:'el-icon-info',
              label: '分组2',
              prop: 'group2',
              column: [{
                label: '选项卡2',
                prop: 'text2',
              }, {
                label: '选项卡3',
                prop: 'text3',
              }]
            }
          ]
       }
    }
  },
  created(){
    this.option1 = Object.assign(this.deepClone(this.option),{
      card:true
    })
  },
  methods:{
    handleSubmit(form){
       Message.success(JSON.stringify(this.form))
    },
    handleTabClick(tabs,event){
      Message.success('序号为:'+tabs.index)
    }
  }
}
</script>

