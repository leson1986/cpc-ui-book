## Slider滑块

<details>
<summary>SHOW CODE</summary>

```html
<template>
    <div>
        <h3>普通用法</h3>
        <el-divider></el-divider>
        <bee-form v-model="form" :option="option" @submit="submit"></bee-form>
    </div>
</template>

<script>
import { Message } from "element-ui";

export default {
    data() {
      return {
        form:{},
        option:{
           labelWidth: 100,
            column: [{
                    label: "普通滑块",
                    prop: "pt",
                    max: 10,
                    type: 'slider',
                }, {
                    label: "格式化滑块",
                    max: 10,
                    prop: "pt",
                    type: 'slider',
                    formatTooltip: function(val) {
                        return '格式化的值' + val;
                    }
                }, {
                    label: "间隔点滑块",
                    prop: "pt",
                    type: 'slider',
                    step: 1,
                    max: 10,
                    showStops: true,
                }, {
                    label: "输入框滑块",
                    prop: "pt",
                    max: 10,
                    showInput: true,
                    type: 'slider',
                }, {
                    label: "范围滑块",
                    prop: "ptwf",
                    step: 1,
                    max: 10,
                    showStops: true,
                    range: true,
                    type: 'slider',
                }, {
                    label: "最大小值",
                    prop: "pt",
                    min: 3,
                    max: 10,
                    type: 'slider',
                }
            ]
        }
      };
    },
    methods: {
     submit(){
       Message.success('当前数据'+JSON.stringify(this.form))
     }
    }
}
</script>


```

</details>
