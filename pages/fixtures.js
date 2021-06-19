import React from 'react';

// local components
import FixtureList from '../components/fixtures/Page';

// config
import { addApolloState, initializeApollo } from '../lib/apollo'
import { pl_id } from '../lib/config'
import { GET_FIXTURES } from '../lib/queries'

//
export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  try {
    const [{ data }] = await Promise.all([
      apolloClient.query({
        query: GET_FIXTURES,
        variables: {
          id: pl_id,
          filter: 'TOTAL'
        },
      }),
    ]);

    const notFound = !data?.competitionCurrentMatchday;

    return addApolloState(apolloClient, {
      props: {
        fixtures: data?.competitionCurrentMatchday
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

// exported component
const Fixtures = () => <FixtureList  />

// export
export default Fixtures;