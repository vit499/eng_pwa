import React from "react";
import { observer } from "mobx-react-lite";
import engRandom from "../store/Random";

const Random = observer(() => {
  const change = () => {
    engRandom.change();
  };
  return (
    <div>
      <div className="mt-1">
        <input type="checkbox" checked={engRandom.random} onChange={change} />{" "}
        random
      </div>
    </div>
  );
});

export default Random;
