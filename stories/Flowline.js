import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { Input, Timeline, TimelineItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {AvueInput} from '@smallwei/avue';


import Flowline from '../components/Flowline/Flowline.vue';

import README from '../components/Flowline/README.md';

// Vue.component('avue-input', AvueInput)
Vue.component('el-input', Input)
Vue.component('el-timeline', Timeline)
Vue.component('el-timeline-item', TimelineItem)

storiesOf('Flowline', module)
  .addParameters({
    readme: {
      content: `<!-- PROPS -->`,
      sidebar: README,
    },
  })
  .add('Flowline', () => {
    return {
      components: {
        Flowline,
      },
      template: `<Flowline/>`,
    };
  });
