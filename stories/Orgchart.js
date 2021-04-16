import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import Orgchart from '../components/Orgchart/index.vue';

import README from '../components/Orgchart/README.md';

Vue.component('el-Button', Button)

storiesOf('组织架构图', module)
  .addParameters({
    readme: {
      content: `<!-- PROPS -->`,
      sidebar: README,
    },
  })
  .add('组织架构图', () => {
    return {
      components: {
        Orgchart,
      },
      template: `<Orgchart/>`,
    };
  });
