import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { Container, Aside, Main, CollapseTransition, Pagination, Dialog, Divider, ButtonGroup, Drawer, Transfer, notify } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import Treetable from '../components/Treetable/index.vue';

import README from '../components/Treetable/README.md';

Vue.component('el-container', Container)
Vue.component('el-aside', Aside)
Vue.component('el-main', Main)
Vue.component('el-collapse-transition', CollapseTransition)
Vue.component('el-pagination', Pagination)
Vue.component('elDialog', Dialog)
Vue.component('el-divider', Divider)
Vue.component('el-button-group', ButtonGroup)
Vue.component('el-drawer', Drawer)
Vue.component('el-transfer', Transfer)
// Vue.component('el-drawer', Drawer)
Vue.component('notify', notify)


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
