import Face from "@components/Display.Face";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="grid h-full w-full items-center justify-items-center">
        <div className="text-[20vmin]">
          <Link href="/">
            <Face emotion="DEAD">Whoops, could not find that page</Face>
          </Link>
        </div>
      </div>
    </>
  );
}
