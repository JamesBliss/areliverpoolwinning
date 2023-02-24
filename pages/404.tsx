import Face from "@components/Display.Face";

//
export default function Custom404() {
  return (
    <div>
      <div>
        <div>
          <Face emotion="😵">Error</Face>
        </div>
        <h1>Whoops, something isn&apos;t right</h1>
        <p>
          Please come back in few minutes or use the navigation to find the
          right page
        </p>
      </div>
    </div>
  );
}
