import React from "react";
import { observer } from "mobx-react-lite";
import autoNext from "../store/AutoNext";

const AutoNext = observer(() => {
  const change = () => {
    autoNext.change();
  };
  return (
    <div>
      <div className="mt-3">
        <input type="checkbox" checked={autoNext.auto} onChange={change} />{" "}
        AutoNext
      </div>
    </div>
  );
});

export default AutoNext;
