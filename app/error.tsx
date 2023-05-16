"use client"; // Error components must be Client Components

import React from "react";
import Face from "@components/Display.Face";

export default function Error({ error }: { error: Error }) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid h-full w-full items-center justify-items-center">
      <div className="text-[20vmin]">
        <Face emotion="DEAD">Whoops, something went wrong</Face>
      </div>
    </div>
  );
}
