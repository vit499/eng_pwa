import React from "react";
import { observer } from "mobx-react-lite";
import engXStore from "../store/EngXStore";

const Sentence = observer(() => {
  return (
    <div>
      <div>
        <p>{`${engXStore.rusSentence}`}</p>
      </div>
      <div>
        <p>{`${engXStore.engSentence}`}</p>
      </div>
    </div>
  );
});

export default Sentence;
