import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import audioStore from "../store/AudioStore";
import autoNext from "../store/AutoNext";

const Audio = observer(() => {
  const toggleAudio = () => {
    audioStore.toggleAudio();
  };

  useEffect(() => {
    return () => {
      autoNext.stopTimer();
    };
  }, []);

  return (
    <div>
      <div className="mt-3">
        <input type="checkbox" checked={audioStore.en} onChange={toggleAudio} />{" "}
        Audio
      </div>
    </div>
  );
});

export default Audio;
