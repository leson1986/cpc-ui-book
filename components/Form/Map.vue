<template>
    <div>
        {{form}}
        <br>
        <br>
        <bee-input-map :params="params" placeholder="请选择地图" v-model="form"></bee-input-map>
    </div>
</template>

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
