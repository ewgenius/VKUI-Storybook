import '../../VKUI/src/styles/styles.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Platform, WebviewType } from '@vkontakte/vkui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ipad_horizontal: {
        name: 'iPad (Horizontal)',
        styles: {
          height: '768px',
          width: '1024px',
        },
        type: 'tablet',
      },
      ipad10p_horizontal: {
        name: 'iPad Pro 10.5-in (Horizontal)',
        styles: {
          height: '834px',
          width: '1112px',
        },
        type: 'tablet',
      },
      ipad12p_horizontal: {
        name: 'iPad Pro 12.9-in (Horizontal)',
        styles: {
          height: '1024px',
          width: '1366px',
        },
        type: 'tablet',
      },
    },
  },
};

export { decorators } from './decorators';

export const globalTypes = {
  scheme: {
    name: 'Scheme',
    description: 'VKUI Theme Scheme',
    defaultValue: 'bright_light',
    toolbar: {
      items: [
        {
          value: 'bright_light',
          title: 'Bright Light',
          right: '🌝',
        },
        {
          value: 'space_gray',
          right: '🌚',
          title: 'Space Gray',
        },
      ],
    },
  },
  platform: {
    name: 'Platform',
    description: 'VKUI App Platform',
    defaultValue: Platform.VKCOM,
    toolbar: {
      items: [
        {
          value: Platform.VKCOM,
          title: 'VKCOM',
        },
        {
          value: Platform.IOS,
          title: 'IOS',
        },
        {
          value: Platform.ANDROID,
          title: 'ANDROID',
        },
      ],
    },
  },

  webview: {
    name: 'Webview',
    description: 'VKUI Webview Type',
    defaultValue: WebviewType.INTERNAL,
    toolbar: {
      items: [
        {
          value: WebviewType.INTERNAL,
          title: 'internal',
        },
        {
          value: WebviewType.VKAPPS,
          title: 'vkapps',
        },
      ],
    },
  },
};
