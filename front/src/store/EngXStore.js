import { makeAutoObservable } from "mobx";
import engTimer from "./TimerStore";
import engAStore from "./EngAStore";
import audioStore from "./AudioStore";
import audioSynthStore from "./AudioSynthStore";
import autoNext from "./AutoNext";

class EngXStore {
  constructor() {
    this._rusSentence = "";
    this._engSentence = "";
    this._date = new Date().toISOString();
    this._combo = engAStore.descr;
    this._indCombo = 0;
    makeAutoObservable(this, {});
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
    audioStore.setCurrentFolder(ind);
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

  formSentenceFromTimer() {
    // from audio timer
    let str = "";
    str = engAStore.formASentence(false);
    this._rusSentence = str;
    this._engSentence = "_";
    engTimer.reset();
    if (audioStore.enable) {
      audioStore.speakAudioRus();
    }
  }
  formSentence() {
    this.formSentenceFromTimer();
    autoNext.stopTimer();
  }
  formAnswerFromTimer() {
    this._engSentence = engAStore.formAAnswer();
  }
  formAnswer() {
    this.formAnswerFromTimer();
    engTimer.stop();
    if (audioStore.enable) {
      audioSynthStore.speakEng(this._engSentence);
    }
    autoNext.stopTimer();
  }
  formPrevSentence() {
    let str = "";
    str = engAStore.formASentence(true);
    this._rusSentence = str;
    this._engSentence = "_";
    engTimer.reset();
    autoNext.stopTimer();
    //audioStore.stopTimer();
  }
}

const engXStore = new EngXStore();

export default engXStore;
