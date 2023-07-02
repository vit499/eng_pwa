import React from "react";
//import logo from "./logo.svg";
//import './App.css';
import { useEffect } from "react";
import engXStore from "./store/EngXStore";
import Sentence from "./components/Sentence";
import Timer from "./components/Timer";
import Random from "./components/Random";
import "./bootstrap.css";
import Buttons from "./components/Buttons";
import Audio from "./components/Audio";
import AutoNext from "./components/AutoNext";
import ListVoice from "./components/ListVoice";

function App() {
  useEffect(() => {
    console.log("app init");
    engXStore.setIndCombo(0);
    engXStore.formSentence();
  }, []);

  const g = {
    fontSize: "1.25rem",
  };
  const divStyle = {
    height: "220px",
  };
  const a = {
    backgroundColor: "#2F4F4F",
    color: "#eeeeee",
    // height: "100vh",
    fontSize: "1.25rem",
  };
  return (
    <div style={a}>
      <div className="container text-center ">
        <div className="row" style={divStyle}>
          <div className="col-2"></div>
          <div className="col-8">
            <Sentence />
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row ">
          <div className="col-12">
            <Buttons />
          </div>
          <div className="col-12 mt-2">
            <Timer />
          </div>
          <div className="col-12">
            <Random />
          </div>
          <div className="col-12">
            <AutoNext />
          </div>
          <div className="col-12">
            <Audio />
          </div>
          <div className="col-12">
            <ListVoice />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
