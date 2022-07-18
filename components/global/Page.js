import React from 'react';
import Router from 'next/router';

// helpers
import { isBrowser } from '../../lib/helpers';

// components
import GlobalStyles from './Styles';
import Meta from './Meta';

Router.events.on('routeChangeComplete', (url) => {
  if (isBrowser) window.ma.trackEvent('Event', 'navigate', `pageview--${url}`);
});

const Page = ({ children }) => (
  <>
    <GlobalStyles />
    <Meta />
    {children}
  </>
);

export default Page;
