import React from 'react';
import Router from 'next/router'

// components
import GlobalStyles from './Styles';
import Meta from './Meta';
import * as gtag from '../../lib/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Meta />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Page;
