import styled from 'styled-components';

//
import Face from '../components/global/Face'

//
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const FaceWrap = styled.div`
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

//
export default function Custom404() {
  return (
    <Wrapper>
      <div>
        <FaceWrap>
          <Face emotion={"😵"} />
        </FaceWrap>
        <h1>Whoops, something isn't right</h1>
        <p>Please come back in few minutes or use the navigation to find the right page</p>
      </div>
    </Wrapper>
  )
}