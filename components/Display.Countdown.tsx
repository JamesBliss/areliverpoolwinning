"use client";

import React, { ReactElement } from "react";

//
import useInterval from "@hooks/useInterval";
import { howLong } from "@helpers/index";

//
const Countdown = ({ dateTime }: { dateTime: string }): ReactElement => {
  const [countdown, setCountdown] = React.useState("");

  const countdownCallback = React.useCallback(() => {
    // Get march start time
    const countDownDate = new Date(dateTime).getTime();

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
  }, [dateTime]);

  useInterval(countdownCallback, 100);

  return <>{countdown}</>;
};

export default Countdown;
