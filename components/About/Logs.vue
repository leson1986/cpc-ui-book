<template>
  <div>
    <slot></slot>
  </div>
</template>

<docs>

## Vue docs blocks 

商业组件集

<!-- PROPS -->

</docs>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style>
.button {
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
  padding: 8px 12px;
  outline: none;

  border-width: 2px;
  border-style: solid;
  border-color: black;

  border-radius: 8px;
  color: rgba(0, 0, 0, 0.96);
}

.button:hover {
  background: yellow;
  border-width: 3px;

  padding: 7px 11px;
}

.button:active {
  background: yellow;
  border-width: 4px;

  padding: 6px 10px;
}

.button_success {
  border-color: green;
}

.button_alert {
  border-color: red;
}

.button_warning {
  border-color: orange;
}
</style>