import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

//
import {
  TeamName,
  Desktop,
  Tablet,
  Mobile
} from './TeamStyles';

//
const query = gql`
  query team($id: Int!) {
    team(
      id: $id
    ) {
      name
      crestUrl
      tla
      shortName
    }
  }
`;

class Team extends React.PureComponent {
  render() {
    const { team } = this.props;

    return (
      <Query query={query} variables={ { id: team.id } }>
        {({ loading, error, data }) => {

          if (loading) return <span>{ team.name }<br /></span>;
          if (error) return <span>{ team.name }<br /></span>;

          const {
            name,
            crestUrl,
            tla,
            shortName
          } = data.team;

          return (
            <TeamName imageSrc={ crestUrl }>
              <Desktop>{name}</Desktop>
              <Tablet>{shortName}</Tablet>
              <Mobile>{tla}</Mobile>
            </TeamName>
          )
        }}
      </Query>
    )
  }
}

export default Team;