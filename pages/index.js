import React from 'react';

// comps
import Page from '../components/home/Page';

// config
import { addApolloState, initializeApollo } from '../lib/apollo'
import { liverpool_id } from '../lib/config'
import { GET_NEXT_MATCH } from '../lib/queries'

//
export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  try {
    const [{ data }] = await Promise.all([
      apolloClient.query({
        query: GET_NEXT_MATCH,
        variables: {
          id: liverpool_id
        },
      }),
    ]);

    const notFound = !data?.nextMatch;

    return addApolloState(apolloClient, {
      props: {
        match: data?.nextMatch
      },
      notFound,
      revalidate: 60, // Every minute
    });
  } catch (error) {
    error.ctx = context;
    console.error(error)
    throw error;
  }
}

// comp
const Home = () => (
  <Page />
);

export default Home;