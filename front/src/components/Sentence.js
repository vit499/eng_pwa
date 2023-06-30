import React from "react";
import { observer } from "mobx-react-lite";
import engXStore from "../store/EngXStore";

const Sentence = observer(() => {
  const divStyle = {
    height: "150px",
  };
  return (
    <div style={divStyle}>
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
