import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { Input, Timeline, TimelineItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {AvueInput} from '@smallwei/avue';


import HighTimeline from '../components/HighTimeline/index.vue';

import README from '../components/HighTimeline/README.md';

// Vue.component('avue-input', AvueInput)
Vue.component('el-input', Input)
Vue.component('el-timeline', Timeline)
Vue.component('el-timeline-item', TimelineItem)

storiesOf('时间线', module)
  .addParameters({
    readme: {
      content: `<!-- PROPS -->`,
      sidebar: README,
    },
  })
  .add('高级时间线', () => {
    return {
      components: {
        HighTimeline,
      },
      template: `<HighTimeline/>`,
    };
  });
