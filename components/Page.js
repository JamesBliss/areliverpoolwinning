import React from 'react';

// components
import GlobalStyles from './GlobalStyles';
import Meta from './Meta';

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
