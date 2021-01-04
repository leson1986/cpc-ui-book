import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  Input,
  Form,
  FormItem,
  Row,
  Col, 
  Collapse, 
  CollapseItem, 
  Tooltip, 
  Tag, 
  Tabs, 
  Cascader, 
  Select, 
  Option, 
  Tree, 
  Switch, 
  Scrollbar, 
  TabPane,
  Button,
  Dialog,
  CheckboxGroup,
  InputNumber,
  Table,
  TableColumn
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import BeeForm from '../components/Form/Form.vue';
import BeeTree from '../components/Form/Tree.vue';

import README from '../components/Form/README.md';
import TREE from '../components/Form/TREE.md';

Vue.component('el-form', Form)
Vue.component('el-form-item', FormItem)
Vue.component('el-input', Input)
Vue.component('el-row', Row)
Vue.component('elCollapse', Collapse)
Vue.component('elCollapseItem', CollapseItem)
Vue.component('el-col', Col)
Vue.component('el-tooltip', Tooltip)
Vue.component('el-tag', Tag)
Vue.component('el-cascader', Cascader)
Vue.component('el-select', Select)
Vue.component('el-option', Option)
Vue.component('el-tree', Tree)
Vue.component('el-switch', Switch)
Vue.component('el-tabs', Tabs)
Vue.component('el-scrollbar', Scrollbar)
Vue.component('el-tab-pane', TabPane)
Vue.component('el-button', Button)
Vue.component('el-dialog', Dialog)
Vue.component('el-checkbox-group', CheckboxGroup)
Vue.component('el-input-number', InputNumber)
Vue.component('el-table', Table)
Vue.component('el-table-column', TableColumn)

storiesOf('Form', module)
  .addParameters({
    readme: {
      content: `<!-- PROPS -->`,
      sidebar: README,
    },
  })
  .add('表单', () => {
    return {
      components: {
        BeeForm,
      },
      template: `<bee-form/>`,
    };
  })
  .add('表单树', () => {
    return {
      components: {
        BeeTree,
      },
      template: `<bee-tree/>`,
    };
  },
  {
    readme: {
      content: `<!-- PROPS -->`,
      sidebar: TREE,
    },
  });
