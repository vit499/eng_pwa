import React from "react";
import { observer } from "mobx-react-lite";
import audioSynthStore from "../store/AudioSynthStore";

const ListVoice = observer(() => {
  
  return (
    <div className="mt-2">
      {audioSynthStore.xvoices && audioSynthStore.xvoices.map(v => (
        <div key={v.id}>{v.id} {v.text}</div>
      ))}
    </div>
  );
});

export default ListVoice;
