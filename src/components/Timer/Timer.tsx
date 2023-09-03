import { useEffect, useRef, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const timerH2Ref = useRef<HTMLHeadingElement>(null);
  const [timerCount, setTimerCount] = useState(100);

  const formatTime = (val: number) => `0${val}`.slice(-2);

  useEffect(() => {
    console.log('setInterval');
    
    setInterval(() => {
      setTimerCount((timerCount) => timerCount - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    const minutes = Math.floor(timerCount / 60);
    const secs = timerCount % 60;

    const textViewTimer = `${formatTime(minutes)}:${formatTime(secs)}`;
    timerH2Ref.current!.innerText = textViewTimer;
  },[timerCount]);

  return (
    <div className="timer-div">
      <h2>Timer</h2>
      <h2 ref={timerH2Ref}>{timerCount}</h2>
      <span className="material-symbols-outlined">pause_circle</span>
      <span className="material-symbols-outlined">play_circle</span>

    </div>
  );
};

export default Timer;
