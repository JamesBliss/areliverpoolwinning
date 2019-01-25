import styled from 'styled-components';

// styled
export const Button = styled.button`
  box-sizing: border-box;
  -webkit-appearance: none;
  cursor: pointer;
  backface-visibility: hidden;
  border: none;
  background: transparent;
  border-radius: 0;
  height: 60px;
  background: #333;
  color: #fff;
  position: relative;
  outline-offset: -3px;
  width: calc(100% - 10px);
  display: block;
  text-align: left;
  margin: 5px 5px 0;

  svg {
    margin: 5px 10px 0;

    @media(min-width: 620px) {
      margin: 5px 20px 0;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${ ({force}) => (`calc(${ force * 100 }%)`) };
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Time = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;