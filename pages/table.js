import React from 'react';

// local components
import Table from '../components/table/Page';

// config
import { addApolloState, initializeApollo } from '../lib/apollo'
import { pl_id } from '../lib/config'
import { GET_TABLE } from '../lib/queries'

//
export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  try {
    const [{ data }] = await Promise.all([
      apolloClient.query({
        query: GET_TABLE,
        variables: {
          id: pl_id,
          filter: 'TOTAL'
        },
      }),
    ]);

    const notFound = !data?.competitionStandings;

    return addApolloState(apolloClient, {
      props: {
        fixtures: data?.competitionStandings
      },
      notFound,
      revalidate: 60, // Every minute
    });
  } catch (error) {
    error.ctx = context;
    // console.error(error)
    console.log(error.ApolloError)
    throw error;
  }
}


// exported component
const Tables = () => <Table />

// export
export default Tables;