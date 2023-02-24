import React from "react";
import Image from "next/image";

//
import nextMatch from "@/api/nextMatch";
import useInterval from "@/hooks/useInterval";
import { howLong } from "@helpers/index";
import Face from "@components/Display.Face";

//
export const getServerSideProps = async ({ res }) => {
  try {
    const match = await nextMatch();

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );

    return {
      props: {
        match,
      },
      notFound: !match,
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
};

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

// Active matches
const Home = ({ match }) => {
  const [countdown, setCountdown] = React.useState("");
  const { status, homeTeam, awayTeam } = match;

  const countdownCallback = React.useCallback(() => {
    // Get march start time
    const countDownDate = new Date(match.utcDate).getTime();

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours and minutes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    setCountdown(
      howLong({
        days,
        hours,
        minutes,
      })
    );
  }, [match]);

  useInterval(countdownCallback, 100);

  if (status === "SCHEDULED" || status === "TIMED") {
    // const kickoff = howLong(time);
    return (
      <div className="grid h-full w-full items-center justify-items-center bg-zinc-300">
        <div className="grid gap-8">
          <Team {...homeTeam} />
          <Team {...awayTeam} />
          <div className="text-[6vmin] font-light leading-[1] text-zinc-800">
            {countdown}
            {/* {kickoff !== "" && ` in ${howLong(time)}`} */}
            {/* {kickoff === "" && " in a few moments"} */}
          </div>
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
};

export default Home;
