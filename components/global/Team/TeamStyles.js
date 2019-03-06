import styled from 'styled-components';

export const TeamName = styled('span')`
  display: flex;
  position: relative;
  align-items: center;
  --safe-area-inset-left: env(safe-area-inset-left);
  padding: 0.2em 5em 0.2em 2.2em;
  padding-left: calc(2.2em + var(--safe-area-inset-left));

  @media (min-width: 768px) {
    padding-left: 2.2em;
  }

  overflow: hidden;
  flex: 1 0 auto;
  height: auto;
  width: 100%;
  z-index: 5;
  font-size: 12vmin;
  line-height: 1.1em;
  color: ${ ({textColour}) => textColour };
  font-weight: 300;

  border-top: 5px solid #333;
  border-bottom: 2.5px solid #333;

  & + ${() => TeamName} {
    border-top: 2.5px solid #333;
    border-bottom: 5px solid #333;
  }

  border-right: 5px solid #333;
  border-left: 5px solid #333;

  ${ ({ colorOne, colorTwo }) => (`
    background: linear-gradient(120deg, ${colorOne} 0%, ${colorOne} 60%, ${colorTwo} 60%, ${colorTwo} 100%);
    background-size: 100% 105%;
  `)};

  ${ ({ imageSrc }) => (imageSrc ? `
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 10%;
      left: calc(0.5em + var(--safe-area-inset-left));

      @media (min-width: 768px) {
        left: 0.5em;
      }

      background-image: url(${imageSrc});
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
      height: 80%;
      width: 1em;
    }
  ` : ``)}
`;

export const Score = styled.span`
  position: absolute;
  width: 40%;
  text-align: center;
  top: 50%;
  left: 65%;
  transform: translateY(-50%);
  color: ${ ({textColour}) => textColour };
`;