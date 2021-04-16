import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import HighUpload from '../components/HighUpload/index.vue';

import README from '../components/HighUpload/README.md';

Vue.component('el-Button', Button)

storiesOf('上传', module)
  .addParameters({
    readme: {
      content: `<!-- PROPS -->`,
      sidebar: README,
    },
  })
  .add('上传', () => {
    return {
      components: {
        HighUpload,
      },
      template: `<HighUpload/>`,
    };
  });
