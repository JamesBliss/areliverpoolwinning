import React from 'react';
import Link from 'next/link'

// styles
import { Button, Time } from './BackStyles';

// component
const Back = ({ status }) => {
  return (
    <Link href={{ pathname: '/'}}>
      <Button>
        <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path fill="currentColor" d="M30,13.4v3.3H6.4l5.9,6L10,25L0,15L10,5l2.3,2.3l-5.9,6H30z"></path>
        </svg>

        <Time>
          { status !== 'IN_PLAY' && (
            <span>{ status }</span>
          ) }
          { status === 'IN_PLAY' && (
            <span>PLAYING</span>
          ) }
        </Time>

      </Button>
    </Link>
  );
};

export default Back;