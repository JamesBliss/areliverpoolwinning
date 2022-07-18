import { ApolloProvider } from '@apollo/client';

// libs
import { useApollo } from '~/lib/apollo';

// components
import Page from '~/components/global/Page';
import Navigation from '~/components/global/Navigation';

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