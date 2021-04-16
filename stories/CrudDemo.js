import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BeeBasic from '../components/CrudDemo/Basic.vue';
import BASIC from '../components/CrudDemo/Basic.md';

import BeeRules from '../components/CrudDemo/Rules.vue';
import RULES from '../components/CrudDemo/Rules.md';

import BeePage from '../components/CrudDemo/Page.vue';
import PAGE from '../components/CrudDemo/Page.md';

import BeeSelection from '../components/CrudDemo/Selection.vue';
import SELECTION from '../components/CrudDemo/Selection.md';

storiesOf('Crud组件', module)
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
.add('分页', () => {
    return {
        components: {
            BeePage,
        },
        template: `<bee-page/>`,
    };
},
{
    readme: {
        content: `<!-- PROPS -->`,
        sidebar: `${PAGE}`,
    },
})
.add('多选', () => {
    return {
        components: {
            BeeSelection,
        },
        template: `<bee-selection/>`,
    };
},
{
    readme: {
        content: `<!-- PROPS -->`,
        sidebar: `${SELECTION}`,
    },
})
    
