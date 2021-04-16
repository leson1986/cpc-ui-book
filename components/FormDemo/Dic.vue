<template>
    <div>
        <h3>普通用法</h3>
        <el-divider></el-divider>
        <bee-form :option="option" v-model="form" @submit="handleSubmit"></bee-form>
    </div>
</template>

<script>
import { Message } from "element-ui";
let baseUrl = 'https://cli.avuejs.com/api/area';
export default {
  data(){
    return {
       form:{
          text:'',
       },
       option:{
          column: [{
            label: '字典',
            prop: 'text',
            props: {
              label: 'name',
              value: 'code'
            },
            dicData:[{
              name:'自定义字典',
              code:-1
            }], 
            dicUrl: `${baseUrl}/getProvince`,
            dicMethod:'get',
            dicQuery:{
              a:1
            },
            span:24,
            type:'select'
          }]
       }
    }
  },
  methods:{
    handleSubmit(form){
       Message.success(JSON.stringify(this.form))
    }
  }
}
</script>
