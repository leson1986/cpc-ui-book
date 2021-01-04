import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import FixedNav from '../components/FixedNav/index.vue';

import README from '../components/FixedNav/README.md';

Vue.component('el-Button', Button)

storiesOf('固定导航', module)
  .addParameters({
    readme: {
      content: `<!-- PROPS -->`,
      sidebar: README,
    },
  })
  .add('固定导航', () => {
    return {
      components: {
        FixedNav,
      },
      template: `<FixedNav/>`,
    };
  });
