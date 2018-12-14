import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Head from 'next/head';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #eaeaea;
`;

export const Emo = styled.span`
  position: relative;
  z-index: 5;
  font-size: 8vmin;
  line-height: 1.1em;
`;

export const Text = styled.span`
  position: relative;
  z-index: 5;
  font-size: 12vmin;
  line-height: 1.1em;
  color: #333;
  font-weight: 300;
`;

export const Small = styled.span`
  font-size: 0.6em;
  line-height: 0.2;
`;


//
const query = gql`
  query nextMatch($id: Int!) {
    nextMatch(
      id: $id
    ) {
      status
      matchday
      utcDate
      time {
        days
        hours
        minutes
      }
      score {
        winner
      }
      homeTeam {
        name
      }
      awayTeam {
        name
      }
    }
  }
`;

// helpers
const isLiverpool = (name) => {
  return name.toLowerCase().indexOf('liverpool') > -1;
}

const howLong = ({ days, hours, minutes}) => {
  return `${ days === 1 ? `${ days } day ` : '' }${ days > 1 ? `${ days } days ` : '' }${ hours === 1 ? `${ hours } hour ` : '' }${ hours > 1 ? `${ hours } hours ` : '' }${ minutes === 1 ? `${ minutes } minute` : '' }${ minutes > 1 ? `${ minutes } minutes ` : '' }`;
}

const match = () => (
  <Query query={query} variables={ { id: 64 } } pollInterval={5000}>
    {({ loading, error, data, networkStatus }) => {

      if (loading) return <Wrapper><Emo>⏳</Emo></Wrapper>;
      if (error) return <Wrapper><Emo>☠️</Emo></Wrapper>;

      const { status, score, homeTeam, awayTeam, utcDate, time } = data.nextMatch;


      if (status === 'SCHEDULED') {
        return (
          <Wrapper>
            <Head>
              <title>{`Next match in ${howLong(time)}`}</title>
              <meta property='twitter:image' content={ `https://via.placeholder.com/1200x675/C8102E/FFFFFF?text=${ homeTeam.name } ${awayTeam.name} in ${ howLong(time) }` } />
              <meta property='og:image' content={ `https://via.placeholder.com/1200x628/C8102E/FFFFFF?text=${ homeTeam.name } ${awayTeam.name} in ${ howLong(time) }` } />
              <link rel="shortcut icon" href="https://res.cloudinary.com/jamesbliss/image/upload/v1544193023/areliverpoolwinning/time.ico"></link>
            </Head>
            <Text>
              { homeTeam.name }<br />
              { awayTeam.name }<br />
              <Small>
                {`in ${ howLong(time) }`}
              </Small>
            </Text>
          </Wrapper>
        )
      }

      if (score.winner === 'DRAW') {
        return (
          <Wrapper>
            <Head>
              <title>😐</title>
              <link rel="shortcut icon" href="https://res.cloudinary.com/jamesbliss/image/upload/v1544193023/areliverpoolwinning/neutral.ico"></link>
            </Head>
            <Emo>😐</Emo>
          </Wrapper>
        );
      }

      if (
        (score.winner === 'HOME_TEAM' && isLiverpool(homeTeam.name)) ||
        (score.winner === 'AWAY_TEAM' && isLiverpool(awayTeam.name))
      ) {
        return (
          <Wrapper>
            <Head>
              <title>😁</title>
              <link rel="shortcut icon" href="https://res.cloudinary.com/jamesbliss/image/upload/v1544193023/areliverpoolwinning/happy.ico"></link>
            </Head>
            <Emo>😁</Emo>
          </Wrapper>
        );
      }

      return (
        <Wrapper>
          <Head>
            <title>😭</title>
            <link rel="shortcut icon" href="https://res.cloudinary.com/jamesbliss/image/upload/v1544193023/areliverpoolwinning/sad.ico"></link>
          </Head>
          <Emo>😭</Emo>
        </Wrapper>
      );
    }}
  </Query>
);

export default match;