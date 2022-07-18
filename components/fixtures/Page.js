import React from 'react';
import { useQuery } from '@apollo/client';

// comps
import Day from './Day';

// styled
import { Wrapper } from './PageStyles';

// config
import { pl_id } from '../../lib/config';
import { GET_FIXTURES } from '../../lib/queries';

// exported component
const Page = () => {
  const { data, error, loading } = useQuery(GET_FIXTURES, {
    variables: {
      id: pl_id,
      filter: 'TOTAL',
    },
  });

  if (loading) return null;
  if (error || data.competitionCurrentMatchday.errors.length > 0) return null;

  const { days } = data.competitionCurrentMatchday.data;

  return (
    <Wrapper>
      {days.map((day) => (
        <Day key={day.utcDate} data={day} />
      ))}
    </Wrapper>
  );
};

export default Page;
