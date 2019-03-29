import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';

import Page from '../components/global/Page';
import Navigation from '../components/global/Navigation';
import withApolloClient from '../lib/with-apollo-client'

class MyApp extends App {
  render() {
    const { Component, apolloClient, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={ apolloClient }>
          <Page>
            <Component {...pageProps} />
            <Navigation />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);