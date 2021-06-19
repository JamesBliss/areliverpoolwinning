import React from 'react';
import { useQuery } from '@apollo/client';
import Head from 'next/head';

// helpers
import {
  isLiverpool,
  howLong,
} from '../../lib/helpers';

// config
import { liverpool_id } from '../../lib/config'
import { GET_NEXT_MATCH } from '../../lib/queries'

// comps
import Team from './Team';
import Face from '../global/Face';

// styled
import {
  Wrapper,
  Emo,
  FaceWrapper,
  Text,
  Small,
  SrOnly
} from './PageStyles';

const Emoji = ({ children, enable = true, ...rest }) => {
  return (
    <Emo>
      <FaceWrapper>
        <Face emotion={ children } { ...rest } />
      </FaceWrapper>
      <SrOnly>{children}</SrOnly>
    </Emo>
  );
}

const Page = () => {
  const { data, error, loading } = useQuery(GET_NEXT_MATCH, {
    pollInterval: 5000,
    variables: {
      id: liverpool_id
    }
  })


  if (loading) {
    return (
      <>
        <Wrapper><Emoji animationName='rotate' enable={false} /></Wrapper>
      </>
    )
  };

  if (error) {
    return (
      <Wrapper><Emoji enable={ false }>😵</Emoji></Wrapper>
    );
  }

  const { status, score, homeTeam, awayTeam, time } = data.nextMatch;

  if (status === 'SCHEDULED') {
    const kickoff = howLong(time);
    return (
      <Wrapper>
        <Text>
          <Team team={homeTeam} />
          <Team team={awayTeam} />
          <Small>
            { kickoff !== '' && ` in ${howLong(time)}` }
            { kickoff === '' && ' in a few moments' }
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
}

export default Page;