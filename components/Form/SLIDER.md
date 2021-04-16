## Slider属性

<details>
<summary>SHOW CODE</summary>

```html
<bee-slider v-model="form" :max="100" :min="20"></bee-slider>

<script>

export default {
    data() {
      return {
        form: 44,
        
      };
    }
}
</script>
```

</details>

### Props

| 参数            | 说明                  | 类型              | 可选值 | 默认值   |
|---------------|---------------------|-----------------|-----|-------|
| min           | 最小值                 | Number          | —   | 0     |
| max           | 最大值                 | Number          | —   | 100   |
| step          | 步长                  | Number          | —   | 1     |
| range         | 是否为范围选择             | Boolean         | —   | false |
| showInput     | 是否显示输入框，仅在非范围选择时有效  | Boolean         | —   | false |
| showStops     | 是否显示间断点             | Boolean         | —   | false |
| formatTooltip | 格式化 tooltip message | Function(value) | —   | —     |

