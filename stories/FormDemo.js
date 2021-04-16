import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BeeBasic from '../components/FormDemo/Basic.vue';
import BASIC from '../components/FormDemo/Basic.md';

import BeeRules from '../components/FormDemo/Rules.vue';
import RULES from '../components/FormDemo/Rules.md';

import BeeDate from '../components/FormDemo/Date.vue';
import DATE from '../components/FormDemo/Date.md';

import BeeRate from '../components/FormDemo/Rate.vue';
import RATE from '../components/FormDemo/Rate.md';

import BeeSlider from '../components/FormDemo/Slider.vue';
import SLIDER from '../components/FormDemo/Slider.md';

import BeeGroup from '../components/FormDemo/Group.vue';
import GROUP from '../components/FormDemo/Group.md';

import BeeDetail from '../components/FormDemo/Detail.vue';
import DETAIL from '../components/FormDemo/Detail.md';

import BeeDic from '../components/FormDemo/Dic.vue';
import DIC from '../components/FormDemo/Dic.md';

import BeeCascader from '../components/FormDemo/Cascader.vue';
import CASCADER from '../components/FormDemo/Cascader.md';

import BeeEvent from '../components/FormDemo/Event.vue';
import EVENT from '../components/FormDemo/Event.md';

import BeeTabs from '../components/FormDemo/Tabs.vue';
import TABS from '../components/FormDemo/Tabs.md';

import BeeTip from '../components/FormDemo/Tip.vue';
import TIP from '../components/FormDemo/Tip.md';

storiesOf('Form组件', module)
    .add('基础', () => {
        return {
            components: {
                BeeBasic,
            },
            template: `<bee-basic/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${BASIC}`,
        },
    })
    .add('校验', () => {
        return {
            components: {
                BeeRules,
            },
            template: `<bee-rules/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${RULES}`,
        },
    })
    .add('日期', () => {
        return {
            components: {
                BeeDate,
            },
            template: `<bee-date/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${DATE}`,
        },
    })
    .add('评价', () => {
        return {
            components: {
                BeeRate,
            },
            template: `<bee-rate/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${RATE}`,
        },
    })
    .add('滑块', () => {
        return {
            components: {
                BeeSlider,
            },
            template: `<bee-slider/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${SLIDER}`,
        },
    })
    .add('分组', () => {
        return {
            components: {
                BeeGroup,
            },
            template: `<bee-group/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${GROUP}`,
        },
    })
    .add('详情', () => {
        return {
            components: {
                BeeDetail,
            },
            template: `<bee-detail/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${DETAIL}`,
        },
    })
    .add('数据字典', () => {
        return {
            components: {
                BeeDic,
            },
            template: `<bee-dic/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${DIC}`,
        },
    })
    .add('多级联动', () => {
        return {
            components: {
                BeeCascader,
            },
            template: `<bee-cascader/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${CASCADER}`,
        },
    })
    .add('事件', () => {
        return {
            components: {
                BeeEvent,
            },
            template: `<bee-event/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${EVENT}`,
        },
    })
    .add('选项卡', () => {
        return {
            components: {
                BeeTabs,
            },
            template: `<bee-tabs/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${TABS}`,
        },
    })
    .add('提示', () => {
        return {
            components: {
                BeeTip,
            },
            template: `<bee-tip/>`,
        };
    },
    {
        readme: {
            content: `<!-- PROPS -->`,
            sidebar: `${TIP}`,
        },
    });
