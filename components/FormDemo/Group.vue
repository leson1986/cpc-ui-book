<template>
    <div>
        <h3>普通用法</h3>
        <el-divider></el-divider>
        <bee-form :option="option" v-model="form" @submit="handleSubmit">
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
       form:{
          text:'文本',
          text1:'文本1',
          text2:'文本2',
          text3:'文本3',
       },
       option:{
          column:[{
                label: '内容',
                prop: 'text',
          }],
          group:[
            {
              icon:'el-icon-info',
              label: '分组1',
              collapse:false,
              prop: 'group1',
              column: [{
                label: '内容1',
                prop: 'text1',
              }]
            },{
              icon:'el-icon-info',
              label: '分组2',
              arrow:false,
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
    }
  }
}
</script>
