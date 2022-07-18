import React from 'react';
import { useQuery } from '@apollo/client';

// comps
import Table from './Table';

// styled
import { Wrapper } from './PageStyles';

// config
import { pl_id } from '../../lib/config';
import { GET_TABLE } from '../../lib/queries';

// exported component
const Page = () => {
  const { data, error, loading } = useQuery(GET_TABLE, {
    pollInterval: 5000,
    variables: {
      id: pl_id,
      filter: 'TOTAL',
    },
  });

  if (loading) return null;
  if (error || data.competitionStandings.errors.length > 0) return null;

  const { standings } = data.competitionStandings.data;

  return (
    <Wrapper>
      {standings.map((standing, index) => (
        // eslint-disable-next-line
        <Table key={index} data={standing.table} />
      ))}
    </Wrapper>
  );
};

export default Page;
