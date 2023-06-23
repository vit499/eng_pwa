import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import audioStore from "../store/AudioStore";

const Audio = observer(() => {
  const toggleAudio = () => {
    audioStore.toggleAudio();
  };

  useEffect(() => {
    return () => {
      audioStore.stopTimer();
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
