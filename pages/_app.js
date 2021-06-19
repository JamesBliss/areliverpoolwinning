import { ApolloProvider } from '@apollo/client';

import Page from '../components/global/Page';
import Navigation from '../components/global/Navigation';

import { useApollo } from '../lib/apollo';

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
}

export default MyApp;