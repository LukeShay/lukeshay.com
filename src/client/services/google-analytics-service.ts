/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
// @ts-expect-error
const gtag = (...args: any[]): void => window.gtag?.(...args);
/* eslint-enable */

const trackPageView = (url: string): void => {
  gtag('config', 'G-45NHHK5CPW', {
    // eslint-disable-next-line camelcase
    page_path: url,
  });
};

type Event = {
  action: string;
  params: Record<string, unknown>;
};

const trackEvent = ({ action, params }: Event): void => {
  gtag('event', action, params);
};

export type { Event };

export { trackPageView, trackEvent };
