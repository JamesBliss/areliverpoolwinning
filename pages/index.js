import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #c8c8c8;
`;

export const Text = styled.span`
  position: relative;
  z-index: 5;
  font-size: 8vmin;
  line-height: 1.1em;
`;

//
const query = gql`
  query nextMatch($id: Int!) {
    nextMatch(
      id: $id
    ) {
      id
      status
      score {
        winner
        fullTime {
          homeTeam
          awayTeam
        }
        halfTime {
          homeTeam
          awayTeam
        }
      }
    }
  }
`;

const match = () => (
  <Query query={query} variables={ { id: 61 } } pollInterval={10000} >
    {({ loading, error, data }) => {

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const {status, score} = data.nextMatch;

      if (status === 'SCHEDULED') {
        return <Wrapper><Text>⏳</Text></Wrapper>
      }

      if (status === 'FINISHED') {
        return <Wrapper><Text>`🎉 {score.winner}</Text></Wrapper>
      }

      return <Wrapper><Text>⚽️ {status === 'PAUSED' ? 'Half time' : 'Playing'} - {score.winner.toLowerCase()}</Text></Wrapper>
    }}
  </Query>
);

export default match;