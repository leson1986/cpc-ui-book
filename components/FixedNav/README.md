## FixedNav Attributes :star:
```js
import { BeeFixedNav } from 'bee-home';
```
<details>
<summary>SHOW CODE</summary>

```html
<h3>固定导航</h3>
<h6>说明：可置顶，可置底，结合项目公共组件d2-container使用</h6>
<bee-fixed-nav :button-list="buttonList"></bee-fixed-nav>
<bee-fixed-nav align="left" :button-list="buttonList"></bee-fixed-nav>
<bee-fixed-nav align="right" :button-list="buttonList"></bee-fixed-nav>

<script>
import { Notification } from "element-ui";
export default {
    data() {
        return {
            
        };
    },
    computed: {
        buttonList() {
            return [
                {
                    label: "按钮1",
                },
                {
                    label: "按钮2",
                    icon: "",
                    type: "success",
                    size: "small",
                    disabled: "disabled",
                    fun: (i) => {
                        this.buttonClick(i)

                    },
                },
                {
                    label: "",
                    icon: "el-icon-message",
                    type: "danger",
                    size: "mini",
                    fun: (i) => {
                        this.buttonClick(i)

                    },
                },
            ];
        },
    },
    methods: {
        buttonClick(index) {
            Notification({
                showClose: true,
                message: "索引" + JSON.stringify(index),
                type: "success",
            });
        }
    }
};
</script>

```

</details>

## Props
|参数|说明|类型|可选值|默认值|
|----------------------|--------------------------------|:--------:|:------------:|:------:|
|buttonList|按钮列表|Array|—|见DefaultProps|
|align|位置|String|left / center / right | center |

## DefaultProps

|参数|说明|类型|可选值|默认值|
|----------------------|--------------------------------|:--------:|:------------:|:------:|
|size|尺寸|String|medium / small / mini|—|
|type|类型|String|primary / success / warning / danger / info / text|—|
|icon|图标类名，具体使用参考element-ui|String|—|—|
|disabled|是否禁用状态|Boolean|—|false|
|fun|点击按钮回调函数，返回参数index|Function(index)|—|-|

