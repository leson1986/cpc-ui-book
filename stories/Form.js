import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BeeAll from '../components/Form/All.vue';
import ALL from '../components/Form/ALL.md';

import BeeFormat from '../components/Form/Format.vue';
import FORMAT from '../components/Form/FORMAT.md';

import BeeForm from '../components/Form/Form.vue';
import FORM from '../components/Form/FORM.md';

import BeeInput from '../components/Form/Input.vue';
import INPUT from '../components/Form/INPUT.md';

import BeeSelect from '../components/Form/Select.vue';
import SELECT from '../components/Form/SELECT.md';

import BeeSwitch from '../components/Form/Switch.vue';
import SWITCH from '../components/Form/SWITCH.md';

import BeeRadio from '../components/Form/Radio.vue';
import RADIO from '../components/Form/RADIO.md';

import BeeCheckbox from '../components/Form/Checkbox.vue';
import CHECKBOX from '../components/Form/CHECKBOX.md';

import BeeRate from '../components/Form/Rate.vue';
import RATE from '../components/Form/RATE.md';

import BeeSlider from '../components/Form/Slider.vue';
import SLIDER from '../components/Form/SLIDER.md';

import BeeArray from '../components/Form/Array.vue';
import ARRAY from '../components/Form/ARRAY.md';

import BeeCascader from '../components/Form/Cascader.vue';
import CASCADER from '../components/Form/CASCADER.md';

import BeeTree from '../components/Form/Tree.vue';
import TREE from '../components/Form/TREE.md';

import BeeTable from '../components/Form/Table.vue';
import TABLE from '../components/Form/TABLE.md';

import BeeIcon from '../components/Form/Icon.vue';
import ICON from '../components/Form/ICON.md';

import BeeMap from '../components/Form/Map.vue';
import MAP from '../components/Form/MAP.md';

storiesOf('Basic', module)
// .addParameters({
//   readme: {
//     content: ALL,
//     DocPreview: {
//       template: `<div class="border"><slot></slot></div>`,
//     },
//   },
// })
    .add('共有属性', () => {
        return {
            components: {
                BeeAll,
            },
            template: `<bee-all/>`,
        };
    },
        {
            options: {
                showPanel: false,
            },
            readme: {
                content: `<div class="border">${ALL}</div>`,
                sidebar: '',
            },
        })
    .add('日期格式化', () => {
        return {
            components: {
                BeeFormat,
            },
            template: `<bee-format/>`,
        };
    },
        {
            options: {
                showPanel: false,
            },
            readme: {
                content:  `<div class="border">${FORMAT}</div>`,
                sidebar: '',
            },
        })

    .add('Form', () => {
        return {
            components: {
                BeeForm,
            },
            template: `<bee-form/>`,
        };
    },
        {
            readme: {
                content: `<!-- PROPS -->`,
                sidebar: `<div>${FORM}</div>`,
            },
        })
    .add('Input', () => {
        return {
            components: {
                BeeInput,
            },
            template: `<bee-input/>`,
        };
    },
        {
            readme: {
                content: `<!-- PROPS -->`,
                sidebar: `<div class="border">${INPUT}</div>`,
            },
        })
    .add('Select', () => {
        return {
            components: {
                BeeSelect,
            },
            template: `<bee-select/>`,
        };
    },
        {
            readme: {
                content: `<!-- PROPS -->`,
                sidebar: SELECT,
            },
        })
    .add('Switch', () => {
        return {
            components: {
                BeeSwitch,
            },
            template: `<bee-switch/>`,
        };
    },
        {
            readme: {
                content: `<!-- PROPS -->`,
                sidebar: SWITCH,
            },
        })
    .add('Radio', () => {
        return {
            components: {
                BeeRadio,
            },
            template: `<bee-radio/>`,
        };
    },
        {
            readme: {
                content: `<!-- PROPS -->`,
                sidebar: RADIO,
            },
        })
    .add('Checkbox', () => {
        return {
            components: {
                BeeCheckbox,
            },
            template: `<bee-checkbox/>`,
        };
    },
        {
            readme: {
                content: `<!-- PROPS -->`,
                sidebar: CHECKBOX,
            },
        })
    .add('Rate', () => {
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
                sidebar: RATE,
            },
        })
    .add('Slider', () => {
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
                sidebar: SLIDER,
            },
        })

    .add('Array', () => {
        return {
            components: {
                BeeArray,
            },
            template: `<bee-array/>`,
        };
    },
        {
            readme: {
                content: `<!-- PROPS -->`,
                sidebar: ARRAY,
            },
        })
    .add('Cascader', () => {
        return {
            components: {
                BeeCascader,
            },
            template: `<bee-Cascader/>`,
        };
    },
        {
            readme: {
                content: `<!-- PROPS -->`,
                sidebar: CASCADER,
            },
        })
        .add('Tree', () => {
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
            })
            .add('Table', () => {
                return {
                    components: {
                        BeeTable,
                    },
                    template: `<bee-table/>`,
                };
            },
                {
                    readme: {
                        content: `<!-- PROPS -->`,
                        sidebar: TABLE,
                    },
                })
            .add('Icon', () => {
                return {
                    components: {
                        BeeIcon,
                    },
                    template: `<bee-icon/>`,
                };
            },
                {
                    readme: {
                        content: `<!-- PROPS -->`,
                        sidebar: ICON,
                    },
                })
    .add('Map', () => {
        return {
            components: {
                BeeMap,
            },
            template: `<bee-map/>`,
        };
    },
        {
            readme: {
                content: `<!-- PROPS -->`,
                sidebar: MAP,
            },
        });
