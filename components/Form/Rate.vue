<template>
    <div>
        {{form}}
        <br>
        <br>
        <bee-rate v-model="form"></bee-rate>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form: 4,
      };
    }
}
</script>
