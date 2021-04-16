## Map属性

<details>
<summary>SHOW CODE</summary>

```html
<bee-input-map :params="params" placeholder="请选择地图" v-model="form"></bee-input-map>

<script>
export default {
    data() {
      return {
        //高德初始化参数
        params:{
          zoom: 10,
          zoomEnable: false,
          dragEnable: false,
        },
        form:[ 113.10235504165291, 41.03624227495205, "内蒙古自治区乌兰察布市集宁区新体路街道顺达源广告传媒" ] ,
      };
    }
}
</script>
```

</details>

### Props

| 参数     | 说明         | 类型     | 可选值 | 默认值 |
|--------|------------|--------|-----|-----|
| params | 高德地图的初始化参数 | Object | -   | -   |


