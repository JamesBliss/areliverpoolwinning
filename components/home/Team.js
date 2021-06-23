import React from 'react';
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";

//
import {
  TeamName,
  Name
} from './TeamStyles';

//
const Team = ({ team}) => {
  const {
    name,
    crestUrl,
    tla,
    shortName
  } = team;

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
