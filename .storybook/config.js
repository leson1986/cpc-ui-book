import Vue from 'vue';
import { configure, addDecorator, addParameters } from '@storybook/vue';
import { addReadme } from 'storybook-readme/vue';
import { themes, create } from '@storybook/theming';
import './lib/markdown.css'

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
    Rate,
    Scrollbar,
    TabPane,
    Button,
    ButtonGroup,
    Dialog,
    Checkbox,
    CheckboxGroup,
    InputNumber,
    Table,
    TableColumn,
    Radio,
    RadioGroup,
    Slider,
    Divider,
    DatePicker,
    TimePicker,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Drawer,
    Transfer,
    CollapseTransition,
    Pagination,
    Upload
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


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
Vue.component('el-rate', Rate)
Vue.component('el-tabs', Tabs)
Vue.component('el-scrollbar', Scrollbar)
Vue.component('el-tab-pane', TabPane)
Vue.component('el-button', Button)
Vue.component('el-button-group', ButtonGroup)
// Vue.component('el-dialog', Dialog)
Vue.component('el-input-number', InputNumber)
Vue.component('el-table', Table)
Vue.component('el-table-column', TableColumn)
Vue.component('el-radio', Radio)
Vue.component('el-radio-group', RadioGroup)
Vue.component('el-checkbox', Checkbox)
Vue.component('el-checkbox-group', CheckboxGroup)
Vue.component('el-slider', Slider)
Vue.component('el-divider', Divider)
Vue.component('el-date-picker', DatePicker)
Vue.component('el-time-picker', TimePicker)
Vue.component('el-dropdown', Dropdown)
Vue.component('el-dropdown-item', DropdownItem)
Vue.component('el-dropdown-menu', DropdownMenu)
Vue.component('el-drawer', Drawer)
Vue.component('el-transfer', Transfer)
Vue.component('el-collapse-transition', CollapseTransition)
Vue.component('elDialog', Dialog)
Vue.component('el-pagination', Pagination)
Vue.component('el-upload', Upload)


// import Bee from 'bee-home';
// import 'bee-home/lib/index.css';
// Vue.use(Bee);

import './lib/webapi.amap.maps'
import './lib/webapi.amap.main'
import Bee from './lib/bee.min.js';
import './lib/index.css';
Vue.use(Bee);

import axios from 'axios';
window.axios=axios

const basicTheme = create({
  base: 'light',
  brandTitle: '公共组件',
  // brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: basicTheme,
    // theme: themes.dark,
  },
  readme: {
    // You can set the global code theme here.
    codeTheme: 'github',
  },
});

addDecorator(addReadme);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);