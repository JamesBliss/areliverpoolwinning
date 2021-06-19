import React from 'react';
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";

//
import {
  TeamName,
  Name
} from './TeamStyles';

import { GET_TEAM } from '../../lib/queries'

//
const Team = ({ team}) => {
  const { data, error, loading } = useQuery(GET_TEAM, {
    variables: {
      id: team.id
    }
  })

  if (loading) return <span>{ team.name }<br /> </span>;
  if (error) return <span>{ team.name }<br /> </span>;

  const {
    name,
    crestUrl,
    tla,
    shortName
  } = data.team;

  return (
    <TeamName imageSrc={ crestUrl }>
      <Name
        data-desktop={name}
        data-tablet={shortName}
        data-mobile={tla}
      />
    </TeamName>
  )

}

export default Team;
