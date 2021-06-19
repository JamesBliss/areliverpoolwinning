import React from 'react';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

// comps
import Back from '../global/Back';
import Table from './Table';

// styled
import {
  Wrapper
} from './PageStyles';

// config
import { pl_id } from '../../lib/config'
import { GET_TABLE } from '../../lib/queries'

// exported component
const Page = () => {
  const { data, error, loading } = useQuery(GET_TABLE, {
    pollInterval: 5000,
    variables: {
      id: pl_id,
      filter: 'TOTAL'
    }
  })

  if (loading) return null;
  if (error) return null;

  const { standings } = data.competitionStandings;

  return (
    <Wrapper>
      { standings.map((standing, index) => (
        <Table key={index} data={standing.table} />
      ) ) }
    </Wrapper>
  )
}

export default Page;