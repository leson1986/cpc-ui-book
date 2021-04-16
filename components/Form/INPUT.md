

## Input属性

<details>
<summary>SHOW CODE</summary>

```html

 <bee-input v-model="form" placeholder="请输入内容"></bee-input>

<script>
import { withCssResources } from '@storybook/addon-cssresources'
export default {
    parameters: {
    cssresources: [
      {
        id: `bluetheme`,
        code: `<style>body { background-color: lightblue; }</style>`,
        picked: false,
        hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
      },
    ],
  },
  decorators: [withCssResources],
    data() {
      return {
        form: '我来测试',
        
      };
    }
}
</script>

```

</details>

### Column

| 参数                                  | 说明                      | 类型            | 可选值        | 默认值  |
|-------------------------------------|-------------------------|---------------|------------|------|
| append                              | 后面的辅助文字                 | String/Number | -          | -    |
| appendClick(type=search)            | 搜索点击事件                  | Function      | -          | -    |
| maxRows(type=textarea)              | 最大行/最大值                 | Number        | -          | 4    |
| minRows(type=textarea)              | 最小行/最小值                 | Number        | -          | 2    |
| prepend                             | 前面的辅助文字                 | String/Number | -          | -    |
| showPassword (type=password)v2.6.18 | 密码是否可见,当type=password有效 | Boolean       | true/false | true |
| showWordLimit                       | 是否显示输入字数统计              | String/Number | -          | -    |
| maxlength                           | 原生属性，最大输入长度             | Number        | —          | —    |
| minlength                           | 原生属性，最小输入长度             | Number        | —          | —    |
| prefix-icon                         | 输入框头部图标                 | String        | —          | —    |
| suffix-icon                         | 输入框尾部图标                 | String        | -          | —    |
