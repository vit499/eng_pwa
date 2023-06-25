import { makeAutoObservable, runInAction } from "mobx";
import mp3 from "../data/txt/mp3";
import engAStore from "./EngAStore";
import engXStore from "./EngXStore";

//const synth = window.speechSynthesis;

class AudioStore {
  constructor() {
    this._en = false;
    this._launch = false;
    this.audio = null;
    this.folder = 0;
    this.ind = 0;
    // this.utter = null;
    // this.voices = synth.getVoices();
    makeAutoObservable(this, {});
  }

  get en() {
    return this._en;
  }
  setCurrentFolder(indFolder) {
    this.folder = indFolder;
    this.ind = 0;
  }
  toggleAudio() {
    let en;
    if (this._en) en = false;
    else en = true;
    if (en) {
      this.ind = engAStore._indSub;
      //console.log(`ind = ${ind}`);
      this.startTimer();
      this._en = true;
      this._sec = 0;

      // this.voices = synth.getVoices();
      // const text = engXStore._rusSentence;
      // this.utter = new SpeechSynthesisUtterance(text);
      // this.utter.voice = this.voices[17];
      // synth.speak(this.utter);
      this.audio = new Audio(mp3[this.folder].arr[this.ind]);
      this.audio.play();
    } else {
      this._en = false;
      this.stopTimer();
    }
  }
  nextAudio() {
    if (!this._en) return;
    engXStore.formSentenceFromTimer();
    this.ind = engAStore._indSub;
    this.audio = null;
    this._sec = 0;
    //this.utter = null;
    //console.log(`next: ${mp3[this.folder][this.ind]}`);
    // const text = engXStore._rusSentence;
    // this.utter = new SpeechSynthesisUtterance(text);
    // this.utter.voice = this.voices[17];
    // synth.speak(this.utter);
    this.audio = new Audio(mp3[this.folder].arr[this.ind]);
    this.audio.play();
  }
  inc() {
    //console.log(`en=${this._en}`);
    if (!this._en) return;
    runInAction(() => {
      this._sec += 1;
      if (this._sec > 3) {
        engXStore.formAnswerFromAudio();
      }
      if (this._sec > 7) {
        this.nextAudio();
      }
    });
  }

  stopTimer() {
    this._launch = false;
    this._en = false;
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
  }
  startTimer() {
    if (this._launch) return;
    this._launch = true;
    this.timer = setInterval(() => {
      this.inc();
    }, 1000);
  }
}

const audioStore = new AudioStore();

export default audioStore;
