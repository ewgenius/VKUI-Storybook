import React from 'react';
import { ConfigProvider } from '@vkontakte/vkui';

export const decorators = [
  (Story, context) => {
    const scheme = context.globals.scheme;
    const platform = context.globals.platform;
    const webview = context.globals.webview;
    return (
      <ConfigProvider scheme={scheme} platform={platform} webviewType={webview}>
        <div
          className="vkui-preview"
          style={{
            backgroundColor:
              scheme === 'bright_light' ? '#fff' : 'rgb(25, 25, 26)',
          }}
        >
          <Story />
        </div>
      </ConfigProvider>
    );
  },
];
