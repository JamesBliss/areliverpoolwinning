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
function Error({ statusCode }) {
  return (
    <Wrapper>
      <div>
        <FaceWrap>
          <Face emotion={"😵"} />
        </FaceWrap>
        <h1>Whoops, something isn't right</h1>
        <p>Please come back in few minutes</p>
        <p><strong><em>{statusCode}</em></strong></p>
      </div>
    </Wrapper>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error

