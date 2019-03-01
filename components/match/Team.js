import React from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";

//
import {
  TeamName,
  Score
} from './TeamStyles';

//
const TEAM_QUERY = gql`
  query team($id: Int!) {
    team(
      id: $id
    ) {
      name
      crestUrl
      tla
      shortName
      colours {
        hex
        textContrast
      }
    }
  }
`;

class Team extends React.PureComponent {
  render() {
    const {
      team, query: { loading, error }, score
    } = this.props;

    if (loading) return null;
    if (error) return <span>{name}<br /></span>;

    const name = this.props.query.team.name || team.name;
    const crestUrl = this.props.query.team.crestUrl || '';
    const tla = this.props.query.team.tla || team.name;

    return (
      <TeamName
        imageSrc={crestUrl}
        colorOne={this.props.query.team.colours[0].hex}
        colorTwo={this.props.query.team.colours[1].hex}
        textColour={this.props.query.team.colours[0].textContrast}
      >
        {tla}
        <Score
          textColour={this.props.query.team.colours[1].textContrast}
        >
          {score === null ? '-' : score}
        </Score>
      </TeamName>
    )
  }
}

export default graphql(TEAM_QUERY, {
  options: ({ id, team }) => ({
    variables: { id }
  }),
  props: ({ data, mutation }) => ({ query: { ...data }, mutation: { ...mutation } })
})(Team);
