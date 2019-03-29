import styled from 'styled-components';

// styled
export const Button = styled.a`
  box-sizing: border-box;
  -webkit-appearance: none;
  cursor: pointer;
  backface-visibility: hidden;
  border: none;
  background: transparent;
  border-radius: 0;
  height: 60px;
  background: #eaeaea;
  color: #333;
  transition: background 0.2s;
  position: relative;
  outline-offset: -3px;
  display: block;
  text-align: left;

  svg {
    height: 100%;
    margin: 0 10px;

    @media(min-width: 620px) {
      margin: 0 20px;
    }
  }

  &:hover {
    transition: background 0.2s;
    background: rgba(0, 0, 0, 0.2);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${ ({force}) => (`calc(${ force * 100 }%)`) };
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Time = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;