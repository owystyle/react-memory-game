import { useState } from "react";
import useInterval from "./useInterval";

function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(
    () => {
      setSeconds(seconds + 1);
    },
    isRunning ? 1000 : null
  );

  const start = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const date = new Date(0);
  date.setSeconds(seconds);
  const timeString = date.toISOString().substr(14, 5);

  return { timeString, seconds, start, stop, isRunning };
}

export default useTimer;
