import React from 'react';
import Router from 'next/router'

// helpers
import { isBrowser } from '../../lib/helpers';

// components
import GlobalStyles from './Styles';
import Meta from './Meta';

Router.events.on('routeChangeComplete', url => isBrowser(window.ma.trackEvent('Event', 'navigate', `pageview--${url}`)));

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Meta />
        { this.props.children }
      </React.Fragment>
    );
  }
}

export default Page;
