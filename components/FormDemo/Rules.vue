<template>
    <div>
        <h3>普通用法</h3>
        <el-divider></el-divider>
        <bee-form :option="option" v-model="obj" @submit="submit" @error="error"></bee-form>

        <h3>自定义验证</h3>
        <el-divider></el-divider>
        <bee-form  v-model="obj" :option="option1" @submit="submit" @error="error"></bee-form>
    </div>
</template>

<script>
import { Message } from "element-ui";
export default {
    data() {
      var validatePass = (rule, value, callback)=> {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback)=>{
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.obj.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        obj:{
          name:'张三',
        },
        option:{
          column:[
             {
              label:'姓名',
              prop:'name',
              rules: [{
                required: true,
                message: "请输入姓名",
                trigger: "blur"
              }]

            }, {
              label:'性别',
              prop:'sex',
              rules: [{
                required: true,
                message: "请输入性别",
                trigger: "blur"
              }]
            }
          ]
        },
        option1:{
          column:[
             {
              label:'姓名',
              prop:'name',
              rules: [{
                required: true,
                message: "请输入姓名",
                trigger: "blur"
              }]

            },{
              label:'性别',
              prop:'sex',
              rules: [{
                required: true,
                message: "请输入性别",
                trigger: "blur"
              }]
            }, {
              label:'密码',
              prop:'password',
              type:'password',
              rules: [{ validator: validatePass, trigger: 'blur' }]
            }, {
              label:'确认密码',
              prop:'oldpassword',
              type:'password',
              rules: [{ validator: validatePass2, trigger: 'blur' }]
            }
          ]
        }
      };
    },
    methods: {
     submit(form,done){
       Message.success(JSON.stringify(form));
       done()
     },
     error(err){
       Message.success('请查看控制台');
       console.log(err)
     }
    }
}
</script>