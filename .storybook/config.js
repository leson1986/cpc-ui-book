import Vue from 'vue';
import { configure, addDecorator, addParameters } from '@storybook/vue';
import { addReadme } from 'storybook-readme/vue';
import { themes, create } from '@storybook/theming';

import element from 'element-ui'
// import Avue from '@smallwei/avue';
// import '@smallwei/avue/lib/index.css';
// Vue.use(Avue);


import Bee from 'bee-home';
import 'bee-home/lib/index.css';
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