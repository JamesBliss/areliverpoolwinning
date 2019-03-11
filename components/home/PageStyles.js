import styled from 'styled-components';

// styled
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #eaeaea;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MenuItem = styled.a`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 11vmin;
  text-align: center;
  cursor: pointer;
  padding: 20px;

  &:not(:first-child) {
    border-top: 1px solid #fff;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const Emo = styled.div`
  position: relative;
  display: inline-block;
  z-index: 5;
  line-height: 0;
  font-size: 20px;
  font-size: 25vmin;
  cursor: pointer;

  @media(min-width: 620px) {
    font-size: 20vmin;
  }
`;

export const FaceWrapper = styled.div`
  line-height: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export const Text = styled.span`
  position: relative;
  z-index: 5;
  font-size: 12vmin;
  line-height: 1.1em;
  color: #333;
  font-weight: 300;
`;

export const Small = styled.span`
  font-size: 0.6em;
  line-height: 0;
`;

export const SrOnly = styled.span`
  border: none;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
