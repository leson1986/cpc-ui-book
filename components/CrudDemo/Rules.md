## Rules校验

<details>
<summary>SHOW CODE</summary>

```html

<template>
    <div>
        <h3>普通用法</h3>
        <el-divider>配置验证字段的`rules`的数据对象即可，具体参考`element`中`form`表单校验的配置规则官方规则</el-divider>
        <bee-crud :data="data" :option="option" @row-save="rowSave" @row-update="rowUpdate" @error="error"></bee-crud>
        <h3>自定义验证</h3>
        <el-divider></el-divider>
        <bee-crud :data="data" v-model="obj" :option="option1" @row-save="rowSave" @row-update="rowUpdate" @error="error"></bee-crud>

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
        obj:{},
        data: [
          {
            name:'张三',
            sex:'男'
          }, {
            name:'李四',
            sex:'女'
          }
        ],
        option:{
          page:false,
          align:'center',
          menuAlign:'center',
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
          page:false,
          align:'center',
          menuAlign:'center',
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
              hide:true,
              rules: [{ validator: validatePass, trigger: 'blur' }]
            }, {
              label:'确认密码',
              prop:'oldpassword',
              hide:true,
              rules: [{ validator: validatePass2, trigger: 'blur' }]
            }
          ]
        }
      };
    },
    methods: {
      error(err){
        Message.success('请查看控制台');
        console.log(err)
      },
      rowSave(form,done){
        Message.success('新增数据'+ JSON.stringify(form));
        done();
      },
      rowUpdate(form,index,done){
        Message.success('编辑数据'+ JSON.stringify(form)+'数据序号'+index);
        done();
      },
    }
}
</script>


```

</details>
