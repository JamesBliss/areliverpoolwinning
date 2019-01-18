import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Head from 'next/head';
import Pressure from 'react-pressure';
import Router from 'next/router'

// helpers
import {
  isLiverpool,
  howLong
} from '../../lib/helpers';

// comps
import ProgressRing from '../global/ProgressCircle'
import Team from './Team';

// styled
import {
  Wrapper,
  Emo,
  Text,
  Small
} from './MatchStyles';

//
const query = gql`
  query nextMatch($id: Int!) {
    nextMatch(
      id: $id
    ) {
      id
      status
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
        id
      }
      awayTeam {
        name
        id
      }
    }
  }
`;

const EmojiPressure = ({ children, pressing, force }) => {
  if (force === 1) {
    Router.push('/detail');
  }

  return (
    <Emo>
      <ProgressRing
        radius={ 60 }
        stroke={ 10 }
        progress={ force * 100 }
      />
      <span>{children}</span>
    </Emo>
  );
}

const Emoji = Pressure(EmojiPressure);

class Match extends React.PureComponent {
  render() {
    return (
      <Query query={query} variables={{ id: 64 }} pollInterval={5000}>
        {({ loading, error, data }) => {

          if (loading) return <Wrapper><Emo>⏳</Emo></Wrapper>;
          if (error) return <Wrapper><Emo>☠️</Emo></Wrapper>;

          const { status, score, homeTeam, awayTeam, time } = data.nextMatch;


          if (status === 'SCHEDULED') {
            return (
              <Wrapper>
                <Text>
                  <Team team={homeTeam} />
                  <Team team={awayTeam} />
                  <Small>
                    {`in ${howLong(time)}`}
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
                  <link rel="shortcut icon" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/neutral_face/favicon.ico"></link>
                  <link rel="apple-touch-icon" sizes="144x144" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/neutral_face/apple-touch-icon.png" />
                  <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/neutral_face/favicon-32x32.png" />
                  <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/neutral_face/favicon-16x16.png" />
                </Head>
                <Emoji>😐</Emoji>
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
                  <link rel="shortcut icon" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/happy_face/favicon.ico"></link>
                  <link rel="apple-touch-icon" sizes="144x144" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/happy_face/apple-touch-icon.png" />
                  <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/happy_face/favicon-32x32.png" />
                  <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/happy_face/favicon-16x16.png" />
                </Head>
                <Emoji>😁</Emoji>
              </Wrapper>
            );
          }

          return (
            <Wrapper>
              <Head>
                <title>😭</title>
                <link rel="shortcut icon" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/sad_face/favicon.ico"></link>
                <link rel="apple-touch-icon" sizes="144x144" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/sad_face/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/sad_face/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/jamesbliss/image/upload/v1547821777/areliverpoolwinning/sad_face/favicon-16x16.png" />
              </Head>
              <Emoji>😭</Emoji>
            </Wrapper>
          );
        }}
      </Query>
    )
  }
}

export default Match;