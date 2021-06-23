import React from 'react';

// local components
import Table from '../components/table/Page';

// config
import { addApolloState, initializeApollo } from '../lib/apollo'
import { pl_id } from '../lib/config'
import { GET_TABLE } from '../lib/queries'

//
export const getServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  try {
    const [{ data }] = await Promise.all([
      apolloClient.query({
        query: GET_TABLE,
        variables: {
          id: pl_id
        },
      }),
    ]);

    const notFound = !data?.competitionStandings.data;

    return addApolloState(apolloClient, {
      props: {
        fixtures: data?.competitionStandings.data
      },
      notFound,
    });
  } catch (error) {
    error.ctx = {
      query: context.query,
      resolvedUrl: context.resolvedUrl,
      params: context.params,
      locales: context.locales,
      locale: context.locale,
      defaultLocale: context.defaultLocale,
    };

    console.log(error);

    return {
      notFound: true,
    };
  }
}


// exported component
const Tables = () => <Table />

// export
export default Tables;