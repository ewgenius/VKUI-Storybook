import React from 'react';
import { ConfigProvider } from '@vkontakte/vkui';

export const decorators = [
  (Story, context) => {
    const scheme = context.globals.scheme;
    const platform = context.globals.platform;
    return (
      <ConfigProvider scheme={scheme} platform={platform}>
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
