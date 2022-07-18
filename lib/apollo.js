import { ApolloClient, from } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { InMemoryCache } from '@apollo/client/cache';
import isEqual from 'lodash/isEqual';
import merge from 'deepmerge';

let apolloClient;

function createApolloClient() {
  // const uri = process.env.NODE_ENV === 'development' ? "http://localhost:4000/graphql" : "https://footballQL.com/graphql";
  const uri = 'https://footballQL.com/graphql';
  const batchLink = new BatchHttpLink({
    uri,
    batchMax: 12,
    batchInterval: 20,
  });
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    credentials: 'include',
    name: 'areliverpoolwinning',
    version: `areliverpoolwinning@${process.env.APP_VERSION}`,
    link: from([batchLink]),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  // eslint-disable-next-line no-underscore-dangle
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    // eslint-disable-next-line no-param-reassign, no-underscore-dangle
    pageProps.props.__APOLLO_STATE__ = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps) {
  // eslint-disable-next-line no-underscore-dangle
  const state = pageProps.__APOLLO_STATE__;
  return initializeApollo(state);
}
