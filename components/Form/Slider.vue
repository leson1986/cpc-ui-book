<template>
    <div>
        {{form}}
        <br>
        <br>
        <bee-slider v-model="form" :max="100" :min="20"></bee-slider>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form: 44,
      };
    }
}
</script>
