import '../../VKUI/src/styles/styles.css';
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
      small_mobile: {
        name: 'small mobile',
        type: 'mobile',
        styles: { width: '300px', height: '640px' },
      },
      mobile: {
        name: 'mobile',
        type: 'mobile',
        styles: { width: '320px', height: '720px' },
      },
      small_tablet: {
        name: 'small tablet',
        type: 'mobile',
        styles: { width: '788px', height: '1024px' },
      },
      small_tablet_horizontal: {
        name: 'small tablet horizontal',
        type: 'mobile',
        styles: { width: '1024px', height: '768px' },
      },
      tablet: {
        name: 'tablet',
        type: 'mobile',
        styles: { width: '1024px', height: '1366px' },
      },
      tablet_horizontal: {
        name: 'tablet horizontal',
        type: 'mobile',
        styles: { width: '1366px', height: '1024px' },
      },
      small_desktop: {
        name: 'small desktop (height < 720)',
        type: 'desktop',
        styles: { width: '1280px', height: '640px' },
      },
      desktop: {
        name: 'desktop',
        type: 'desktop',
        styles: { width: '1280px', height: '780px' },
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
