## 辅助提示语
填写表单鼠标放入填写区域时对应的辅助提示语

<details>
<summary>SHOW CODE</summary>

```html
<template>
    <div>
        <h3>普通用法</h3>
        <el-divider></el-divider>
        <bee-form :option="option" v-model="form"></bee-form>
    </div>
</template>

<script>
export default {
  data(){
    return {
       form:{
          text1:'文本1',
          text2:'文本2',
       },
       option:{
          column: [{
            label: '内容1',
            prop: 'text1',
            tip:'我是一个默认提示语',
          },{
            label: '内容2',
            prop: 'text2',
            tip:'我是一个左边提示语',
            tipPlacement:'left',
          }]
       }
    }
  }
}
</script>




```

</details>
