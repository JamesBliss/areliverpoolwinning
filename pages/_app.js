import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';
import Router from 'next/router';
import NProgress from 'nprogress';

// libs
import { useApollo } from '~/lib/apollo';

// components
import Page from '~/components/global/Page';
import Navigation from '~/components/global/Navigation';

// global styling
import '../public/general.css';

//
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
  window.scrollTo(0, 0);
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

// export
const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Page>
        <Component {...pageProps} />
        <Navigation />
      </Page>
    </ApolloProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default MyApp;
