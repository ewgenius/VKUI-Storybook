import * as React from 'react';
import {
  AdaptivityProps,
  AdaptivityProvider,
  withAdaptivity,
  Div,
  ViewWidth,
  ViewHeight,
} from '@vkontakte/vkui';

export default {
  title: 'Adaptivity/AdaptivityProvider',
  component: AdaptivityProvider,
};

const AdaptivityDemo = withAdaptivity(
  ({ viewWidth, viewHeight }: AdaptivityProps) => {
    const isDesktop = viewWidth >= ViewWidth.DESKTOP;
    const isTablet = viewWidth >= ViewWidth.TABLET;
    const isSmallTablet = viewWidth >= ViewWidth.SMALL_TABLET;
    const isMobile = viewWidth >= ViewWidth.MOBILE;
    const isSmallMobile = viewWidth >= ViewWidth.SMALL_MOBILE;

    return (
      <>
        <Div>
          width: <b>{ViewWidth[viewWidth]}</b> ({window.innerWidth})
        </Div>
        <Div>
          height: <b>{ViewHeight[viewHeight]}</b> ({window.innerHeight})
        </Div>
        <Div>
          view size:{' '}
          {isDesktop
            ? 'Desktop'
            : isTablet
            ? 'Tablet'
            : isSmallTablet
            ? 'Small Tablet'
            : isMobile
            ? 'Mobile'
            : isSmallMobile
            ? 'Small Mobile'
            : 'Undefined'}
        </Div>
      </>
    );
  },
  {
    viewWidth: true,
    viewHeight: true,
  }
);

export function Default() {
  return (
    <AdaptivityProvider>
      <AdaptivityDemo />
    </AdaptivityProvider>
  );
}
