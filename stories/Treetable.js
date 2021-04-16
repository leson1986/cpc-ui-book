import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import 'element-ui/lib/theme-chalk/index.css'


import Treetable from '../components/Treetable/index.vue';
import README from '../components/Treetable/README.md';

storiesOf('左树右表', module)
  .addParameters({
    readme: {
      content: `<!-- PROPS -->`,
      sidebar: README,
    },
  })
  .add('员工选择', () => {
    return {
      components: {
        Treetable,
      },
      template: `<Treetable/>`,
    };
  });
