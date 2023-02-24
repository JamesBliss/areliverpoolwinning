import Face from "@components/Display.Face";

//
function Error({ statusCode }) {
  return (
    <div>
      <div>
        <div>
          <Face emotion="😵">Error!</Face>
        </div>
        <h1>Whoops, something isn&apos;t right</h1>
        <p>Please come back in few minutes</p>
        <p>
          <strong>
            <em>{statusCode}</em>
          </strong>
        </p>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  // eslint-disable-next-line
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
