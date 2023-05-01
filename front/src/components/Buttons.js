import React from "react";
import { observer } from "mobx-react-lite";
import engXStore from "../store/EngXStore";

const Buttons = observer(() => {
  const getHint = () => {
    engXStore.formAnswer();
  };
  const update = () => {
    engXStore.formSentence();
  };
  const onCombo = (event) => {
    const id = event.target.selectedIndex;
    //console.log(`onCombo, ind=${id} t=${typeof id}`);
    engXStore.setIndCombo(id);
  };

  return (
    <div>
      <div style={{ marginTop: "1rem" }}>
        <select value={engXStore.comboItem} onChange={(e) => onCombo(e)}>
          {engXStore.combo.map((item) => (
            <option key={item.id} value={item.text}>
              {item.text}
            </option>
          ))}
        </select>
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => getHint()}>Hint</button>
          <button style={{ marginLeft: "1rem" }} onClick={() => update()}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
});

export default Buttons;
