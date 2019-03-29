import styled from 'styled-components';

export const Desktop = styled('span')`
  display: none;

  @media(min-width: 1020px) {
    display: block;
  }
`;

export const Tablet = styled('span')`
  display: none;

  @media(min-width: 540px) and (max-width: 1019px) {
    display: block;
  }
`;

export const Mobile = styled('span')`
  display: none;

  @media(max-width: 539px) {
    display: block;
  }
`;

export const TeamName = styled('span')`
  display: block;
  position: relative;
  padding: 0.2em 0.2em 0.2em 1.2em;

  ${ ({ imageSrc }) => (imageSrc ? `
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url(${imageSrc});
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
      height: 100%;
      width: 1em;
    }
  ` : ``)}
`;

export const Name = styled.span`
  &:before {
    @media(min-width: 1020px) {
      content: attr(data-desktop);
    }
    @media(min-width: 540px) and (max-width: 1019px) {
      content: attr(data-tablet);
    }
    @media(max-width: 539px) {
      content: attr(data-mobile);
    }
  }
`;