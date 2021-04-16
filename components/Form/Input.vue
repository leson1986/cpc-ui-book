<template>
    <div>
        <bee-input v-model="form" placeholder="请输入内容"></bee-input>
    </div>
</template>

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
