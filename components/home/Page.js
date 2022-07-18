import React from 'react';
import { useQuery } from '@apollo/client';

// helpers
import { isLiverpool, howLong } from '~/lib/helpers';

// config
import { liverpool_id } from '~/lib/config';
import { GET_NEXT_MATCH } from '~/lib/queries';

// comps
import Face from '~/components/global/Face';
import Team from './Team';

// styled
import { Wrapper, Emo, FaceWrapper, Text, Small, SrOnly } from './PageStyles';

const Emoji = ({ children, ...rest }) => (
  <Emo>
    <FaceWrapper>
      <Face emotion={children} {...rest} />
    </FaceWrapper>
    <SrOnly>{children}</SrOnly>
  </Emo>
);

const Page = () => {
  const { data, error, loading } = useQuery(GET_NEXT_MATCH, {
    pollInterval: 5000,
    variables: {
      id: liverpool_id,
    },
  });

  console.log({ data });

  if (loading) {
    return (
      <Wrapper>
        <Emoji />
      </Wrapper>
    );
  }

  if (error || data.nextMatchByID.errors.length > 0) {
    return (
      <Wrapper>
        <Emoji>😵</Emoji>
      </Wrapper>
    );
  }

  const { status, score, homeTeam, awayTeam, time } = data.nextMatchByID.data;

  if (status === 'SCHEDULED') {
    const kickoff = howLong(time);
    return (
      <Wrapper>
        <Text>
          <Team team={homeTeam} />
          <Team team={awayTeam} />
          <Small>
            {kickoff !== '' && ` in ${howLong(time)}`}
            {kickoff === '' && ' in a few moments'}
          </Small>
        </Text>
      </Wrapper>
    );
  }

  if (score.winner === 'DRAW') {
    return (
      <Wrapper>
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
        <Emoji>😁</Emoji>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Emoji>😭</Emoji>
    </Wrapper>
  );
};

export default Page;
