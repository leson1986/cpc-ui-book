## Array属性

<details>
<summary>SHOW CODE</summary>

```html
 <bee-array v-model="form"></bee-array>

<script>

export default {
    data() {
      return {
        form: [
          '第一条',
          '第二条',
          '第三条',
          '第四条',
        ]
        
      };
    }
}
</script>
```

</details>

### Props

| 参数    | 说明   | 类型      | 可选值        | 默认值   |
|-------|------|---------|------------|-------|
| alone | 单个模式 | Boolean | true/false | false |


