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
  width: 100%;
  display: flex;
  position: relative;
  align-content: center;

  svg {
    margin: 5px 20px 0;
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