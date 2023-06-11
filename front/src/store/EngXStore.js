import { makeAutoObservable } from "mobx";
import engTimer from "./Timer";
import engRandom from "./Random";
import engAStore from "../txt/eng/EngAStore";

class EngXStore {
  constructor() {
    this._load = "none";
    this._id = 0;
    this._rusSentence = "";
    this._engSentence = "";
    this._date = new Date().toISOString();
    //this._max = engAStore.len;
    this._combo = engAStore.descr;
    this._indCombo = 0;
    makeAutoObservable(this, {});
  }

  Init() {
    this._load = "none";
  }
  get combo() {
    return this._combo;
  }
  get indCombo() {
    return this._indCombo;
  }
  setIndCombo(ind) {
    if (ind >= this._combo.length) ind = 0;
    this._indCombo = ind;
    engAStore.Init(ind);
  }
  get comboItem() {
    return this._combo[this._indCombo].text;
  }
  get rusSentence() {
    return this._rusSentence;
  }
  get engSentence() {
    return this._engSentence;
  }

  formSentence() {
    let str = "";
    // if (this._indCombo >= this._max) this._indCombo = 0;
    // const n = this._indCombo;
    const rand = engRandom.random;
    str = engAStore.formSentence(rand, false);
    this._rusSentence = str;
    this._engSentence = "_";
    engTimer.reset();
  }
  formAnswer() {
    let str = "";
    // if (this._indCombo >= this._max) this._indCombo = 0;
    // const n = this._indCombo;
    str = engAStore.formAnswer();
    this._engSentence = str;
    engTimer.stop();
  }
  formPrevSentence() {
    let str = "";
    // if (this._indCombo >= this._max) this._indCombo = 0;
    // const n = this._indCombo;
    const rand = engRandom.random;
    str = engAStore.formSentence(rand, true);
    this._rusSentence = str;
    this._engSentence = "_";
    engTimer.reset();
  }
}

const engXStore = new EngXStore();

export default engXStore;
