import React from "react";
import logo from "./logo.svg";
//import './App.css';
import { useEffect } from "react";
import engXStore from "./store/EngXStore";
import Sentence from "./components/Sentence";
import Timer from "./components/Timer";
import Random from "./components/Random";
import "./bootstrap.css";
import Buttons from "./components/Buttons";

function App() {
  useEffect(() => {
    console.log("app init");
    engXStore.formSentence();
  }, []);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <Sentence />
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-12">
          <Buttons />
        </div>
        <div className="col-12 mt-2">
          <Timer />
        </div>
        <div className="col-12">
          <Random />
        </div>
      </div>
    </div>
  );
}

export default App;
