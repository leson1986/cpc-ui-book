## HighUpload Attributes :star:
```js
import { BeeHighUpload } from 'bee-home';
```
<details>
<summary>SHOW CODE</summary>

```html
<bee-high-upload></bee-high-upload>

<script>
import { Notification } from "element-ui";
export default {
    data() {
        return {
        };
    },
};
</script>

```

</details>

## Props
|参数|说明|类型|可选值|默认值|
|----------------------|--------------------------------|:--------:|:------------:|:------:|
|uploadType|上传的类型，‘normal’单个或批量上传，‘table’表格文件上传|String|normal / table|normal|
|action|请求url|String|||
|autoUpload|是否自动上传|Boolean|false / true| true |
|isDetail|是否显示上传|Boolean|false / true| false |
|accept|支持的文件格式 例："image/gif,image/jpeg"|String||.doc,.docx,.xls,.xlsx,.csv,.pdf,.ppt,.pptx,.jpg,.jpeg,.png|
|limit|限制上传的个数|Number|1-无穷大|3|
|multiple|是否能批量上传|Boolean|false / true| true |
|token|token|String|||
|size|限制图片上传的大小|Number|| 10 |
|title|提示标题|String|| 上传附件 |
|value|绑定值|Array|| [] |


