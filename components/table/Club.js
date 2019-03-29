import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.2em 1.7em;
  overflow: hidden;
  font-size: 3vmin;

  ${ ({ imageSrc }) => (imageSrc ? `
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 10%;
      left: 0;

      background-image: url(${imageSrc});
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
      height: 80%;
      width: 1.2em;
    }
  ` : ``)}
`;

const Club = ({ data }) => (
  <Container imageSrc={ data.team.crestUrl }>
    {data.team.name}
  </Container>
);

export default Club;