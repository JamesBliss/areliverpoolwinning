//
import React from "react";
import Image from "next/image";

//
import getData from "@libs/data";

//
import Face from "@components/Display.Face";
import { Match } from "@/interfaces/db.types";
import Countdown from "@components/Display.Countdown";

export const revalidate = 60;

//
const Team = ({ name, crest, tla, shortName }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative aspect-[1/1] w-32">
        <Image src={crest} alt="" role="presentation" fill />
      </div>
      <div className="text-[12vmin] font-light leading-[1] text-zinc-800">
        <span className="block sm:hidden">{tla}</span>
        <span className="hidden sm:block lg:hidden">{shortName}</span>
        <span className="hidden lg:block">{name}</span>
      </div>
    </div>
  );
};

// Component
export default async function Table() {
  const match = await getData();

  const { score, homeTeam, awayTeam }: Match = match;

  const status = score?.status;
  const activeStatuses = ["IN_PLAY", "PAUSED", "LIVE", "FINISHED"];
  const inactiveStatuses = ["SCHEDULED", "TIMED"];

  if (inactiveStatuses.includes(status)) {
    return (
      <div className="grid h-full w-full items-center justify-items-center ">
        <div className="grid gap-8">
          <Team {...homeTeam} />
          <Team {...awayTeam} />
          <div className="text-[6vmin] font-light leading-[1] text-zinc-800">
            <Countdown dateTime={match.utcDate} />
          </div>
        </div>
      </div>
    );
  }

  if (activeStatuses.includes(status)) {
    return (
      <div className="grid h-full w-full items-center justify-items-center">
        <div className="text-[20vmin]">
          <Face emotion={score.liverpoolResult}>{status}</Face>
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full w-full items-center justify-items-center">
      <div className="text-[20vmin]">
        <Face>Loading</Face>
      </div>
    </div>
  );
}
