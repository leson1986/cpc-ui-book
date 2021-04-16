<template>
    <div>
        <h3>普通用法</h3>
        <el-divider></el-divider>
        <bee-form :option="option" v-model="obj"></bee-form>
    </div>
</template>

<script>
import { Message } from "element-ui";
export default {
 data() {
      return {
        obj: {
          name: '11'
        },
        data: [],
        option: {
          column: [{
            label: '姓名',
            prop: 'name',
            change: ({value,column}) => {
              Message.success('查看控制台')
              console.log('值改变',value,column)
            },
            click: ({value,column}) => {
              Message.success('查看控制台')
              console.log('点击事件',value,column)
            },
            focus: ({value,column}) => {
              Message.success('查看控制台')
              console.log('获取焦点',value,column)
            },
            blur: ({value,column}) => {
              Message.success('查看控制台')
              console.log('失去焦点',value,column)
            }
          }]
        }
      }
    }
}
</script>
