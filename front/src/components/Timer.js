import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import engTimer from "../store/TimerStore";

const Timer = observer(() => {
  const timer = useRef(0);
  useEffect(() => {
    timer.current = setInterval(() => {
      engTimer.inc();
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const divStyle = {
    height: "50px",
  };
  return (
    <div style={divStyle}>
      {engTimer._en && (
        <div>
          <span>Sec: {engTimer._sec}</span>
        </div>
      )}
      {engTimer.over && (
        <div>
          <p>over</p>
        </div>
      )}
      {!engTimer._en && !engTimer.over && (
        <div>
          <span>_</span>
        </div>
      )}
    </div>
  );
});

export default Timer;
