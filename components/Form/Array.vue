<template>
    <div>
        <div>{{form}}</div>
        <br/>
        <div>alone: true</div>
        <br/>
        <bee-array v-model="form" :alone="false"></bee-array>
        <br/>
        <br/>
        <div>alone: false</div>
        <br/>
        <bee-array v-model="form" :alone="true"></bee-array>
    </div>
</template>

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
