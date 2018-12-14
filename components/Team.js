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

class Team extends React.Component {
  render() {
    const { team } = this.props;

    console.log(team)

    return (
      <Query query={query} variables={ { id: team.id } } pollInterval={5000}>
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

    return (
      <React.Fragment>
        <span><img alt={ team.name } src={ crestUrl } /> { team.name }<br /></span>
      </React.Fragment>
    );
  }
}

export default Team;
