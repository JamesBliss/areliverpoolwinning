import React from 'react';

// local components
import FixtureList from '../components/fixtures/Page';

// config
import { addApolloState, initializeApollo } from '../lib/apollo';
import { pl_id } from '../lib/config';
import { GET_FIXTURES } from '../lib/queries';

//
export const getServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  try {
    const [{ data }] = await Promise.all([
      apolloClient.query({
        query: GET_FIXTURES,
        variables: {
          id: pl_id,
          filter: 'TOTAL',
        },
      }),
    ]);

    const notFound = !data?.competitionCurrentMatchday.data;

    return addApolloState(apolloClient, {
      props: {
        fixtures: data?.competitionCurrentMatchday.data,
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
};

// exported component
const Fixtures = () => <FixtureList />;

// export
export default Fixtures;
