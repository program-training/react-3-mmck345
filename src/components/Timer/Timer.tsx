import { useEffect, useRef, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const timerH2Ref = useRef<HTMLHeadingElement>(null);
  const refInputCount = useRef<HTMLInputElement>(null);
  let intervalRef = useRef<null | number>(null);
  
  const [timerCount, setTimerCount] = useState(0);
  const [isTimerPlay, setIsTimerPlay] = useState(false);

  const formatTime = (val: number) => `0${val}`.slice(-2);

  function handleChangeInputCount() {
    setTimerCount(refInputCount.current?.value as unknown as number)
  }

  function startTimer(secondes?: number) {
    secondes && setTimerCount(secondes);
    setIsTimerPlay(true);
    intervalRef.current = setInterval(() => {
      setTimerCount((timerCount) => timerCount - 1);
    }, 1000);
    refInputCount.current!.value = ''
  }
  

  // useEffect(() => {
  //   startTimer();}
  //   ,[]);

  useEffect(() => {
    const minutes = Math.floor(timerCount / 60);
    const secs = timerCount % 60;
    const textViewTimer = `${formatTime(minutes)}:${formatTime(secs)}`;
    timerH2Ref.current!.innerText = textViewTimer;
    timerCount === 0 && handleStop();
  }, [timerCount]);

  function handlePause() {
    clearInterval(intervalRef.current as number);
    setIsTimerPlay(false);
    timerH2Ref.current?.classList.add('blink')
  }

  function handlePlay() {
    startTimer()
    timerH2Ref.current?.classList.remove('blink')
  }

  function handleStop() {
    handlePause();
    setTimerCount(0);
    timerH2Ref.current?.classList.remove('blink')
  }

  return (
    <div className="timer-div">
      <div className="dives-timer" id="div-top">
        <h2>Timer</h2>
      </div>
      <div className="dives-timer" id="div-center">
        <h2 ref={timerH2Ref}>{timerCount}</h2>
      </div>
      <div className="dives-timer" id="div-bottom">
        <div className="dives-timer">
          {
          isTimerPlay ?
          <span className="material-symbols-outlined buttons-timer" onClick={handlePause}>pause_circle</span>
          :
          <div>
            <span className="material-symbols-outlined buttons-timer" onClick={handlePlay}>play_circle</span>
            <span className="material-symbols-outlined buttons-timer" onClick={handleStop}>stop_circle</span>
            <input className="input-count" type="number" name="setupCount" id="setupCountId" ref={refInputCount} onChange={handleChangeInputCount}/>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Timer;

