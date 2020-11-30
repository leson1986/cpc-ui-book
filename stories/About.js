import { storiesOf } from '@storybook/vue';

import CcAbout from '../components/About/About.vue';

import LogsReadme from '../components/About/LOGS.md';
import InstallReadme from '../components/About/INSTALL.md';

storiesOf('使用手册', module)
  .addParameters({
    options: {
      showPanel: false,
    },
    readme: {
      content: LogsReadme,
      StoryPreview: {
        data() {
          return {
            styles: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '32px',
              borderTop: '1px dashed #eee',
            },
          };
        },
        template: `<div v-bind:style="styles"></div>`,
      },
      DocPreview: {
        data() {
          return {
            styles: {
              padding: '8px 32px',
              margin: '0 0 0 32px',
              borderLeft: '2px dashed #eee',
            },
          };
        },
        template: `<div v-bind:style="styles"><slot></slot></div>`,
      },
      HeaderPreview: {
        data() {
          return {
            styles: {
              margin: '32px',
              background: '#ffffff',
            },
          };
        },
        template: `<div v-bind:style="styles"><slot></slot></div>`,
      },
      FooterPreview: {
        template: `<div v-bind:style="styles"><slot></slot></div>`,
      },
    },
  })
  .add('更新日志', () => {
    return {
      components: {
        CcAbout,
      },
      template: `<cc-about/>`,
    };
  })

  .addParameters({
    readme: {
      content: InstallReadme,
      StoryPreview: {
        data() {
          return {
            styles: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '32px',
              borderTop: '1px dashed #eee',
            },
          };
        },
        template: `<div v-bind:style="styles"></div>`,
      },
      DocPreview: {
        data() {
          return {
            styles: {
              padding: '8px 32px',
              margin: '0 0 0 32px',
              borderLeft: '2px dashed #eee',
            },
          };
        },
        template: `<div v-bind:style="styles"><slot></slot></div>`,
      },
      HeaderPreview: {
        data() {
          return {
            styles: {
              margin: '32px',
              background: '#ffffff',
            },
          };
        },
        template: `<div v-bind:style="styles"><slot></slot></div>`,
      },
      FooterPreview: {
        template: `<div><slot></slot></div>`,
      },
    },
  })
  .add('安装', () => {
    return {
      components: {
        CcAbout,
      },
      template: `<cc-about/>`,
    };
  });
