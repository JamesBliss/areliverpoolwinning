import React from 'react';

// comps
import Page from '../components/home/Page';

// config
import { addApolloState, initializeApollo } from '../lib/apollo'
import { liverpool_id } from '../lib/config'
import { GET_NEXT_MATCH } from '../lib/queries'

//
export const getServerSideProps = async (context) => {
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

    const notFound = !data?.nextMatchByID;

    return addApolloState(apolloClient, {
      props: {},
      notFound
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

// comp
const Home = () => (
  <Page />
);

export default Home;