<template>
    <div>
        {{form}}<br><br>
         <bee-radio v-model="form" :dic="dic"></bee-radio>
    </div>
</template>

<script>

export default {
    data() {
      return {
        form:0,
        dic:[{
          label:'选项1',
          value:0
        },{
          label:'选项2',
          value:1
        }]
      }
    }
}
</script>
