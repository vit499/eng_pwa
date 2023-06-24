import { makeAutoObservable, runInAction } from "mobx";
import mp3 from "../data/audio";
import engAStore from "./EngAStore";
import engXStore from "./EngXStore";

const synth = window.speechSynthesis;
//const voices = synth.getVoices();

class AudioStore {
  constructor() {
    this._load = "none";
    this._over = false;
    this._en = false;
    this._launch = false;
    this._date = new Date().toISOString();
    this.audio = null;
    this.folder = 0;
    this.ind = 0;
    this.utter = null;
    this.voices = synth.getVoices();
    makeAutoObservable(this, {});
  }

  get en() {
    return this._en;
  }
  setCurrentFolder(indFolder) {
    // console.log(`set folder ${indFolder}`);
    // if (indFolder >= mp3.length) {
    //   this._en = false;
    //   this.stopTimer();
    //   return;
    // }
    // this.folder = indFolder;
    // this.ind = 0;
  }
  toggleAudio() {
    //if (this._en === en) return;
    //this._en = en;
    let en;
    if (this._en) en = false;
    else en = true;
    if (en) {
      const ind = engAStore._indSub;
      console.log(`ind = ${ind}`);
      // if (ind >= mp3[this.folder].length) {
      //   this._en = false;
      //   this.stopTimer();
      //   return;
      // }
      this.startTimer();
      this.ind = ind;
      this._en = true;
      this._sec = 0;

      //console.log(`synth = ${synth}`);
      this.voices = synth.getVoices();
      // console.log(`voices = ${this.voices.length}`);
      // for (let i = 0; i < this.voices.length; i++) {
      //   console.log(`${this.voices[i].name} (${this.voices[i].lang})`);
      // }

      //console.log(`first: ${mp3[this.folder][this.ind]}`);
      const text = engXStore._rusSentence;
      this.utter = new SpeechSynthesisUtterance(text);
      //this.utter.lang = "ru-RU";
      this.utter.voice = this.voices[17];
      synth.speak(this.utter);
      // this.audio = new Audio(mp3[this.folder][this.ind]);
      // this.audio.play();
    } else {
      this._en = false;
      this.stopTimer();
    }
  }
  // get over() {
  //   return this._over;
  // }
  nextAudio() {
    if (!this._en) return;
    engXStore.formSentenceFromTimer();
    const ind = engAStore._indSub;
    // if (ind >= mp3[this.folder].length) {
    //   this._en = false;
    //   this.stopTimer();
    //   return;
    // }
    this.ind = ind;
    this.audio = null;
    this.utter = null;
    this._sec = 0;
    //console.log(`next: ${mp3[this.folder][this.ind]}`);
    const text = engXStore._rusSentence;
    this.utter = new SpeechSynthesisUtterance(text);
    //this.utter.lang = "ru-RU";
    this.utter.voice = this.voices[17];
    synth.speak(this.utter);
    // this.audio = new Audio(mp3[this.folder][this.ind]);
    // this.audio.play();
  }
  inc() {
    //console.log(`en=${this._en}`);
    if (!this._en) return;
    runInAction(() => {
      this._sec += 1;
      if (this._sec > 7) {
        //this._over = true;
        this.nextAudio();
      }
      //console.log(`t: ${this._sec}`);
    });
  }
  // stop() {
  //   this._over = false;
  //   this._en = false;
  // }

  stopTimer() {
    console.log("stop timer");
    this._launch = false;
    this._en = false;
    if (this.timer !== null) {
      clearInterval(this.timer);
      console.log("clear timer");
    }
  }
  startTimer() {
    if (this._launch) return;
    this._launch = true;
    console.log("start timer");
    this.timer = setInterval(() => {
      this.inc();
    }, 1000);
  }
}

const audioStore = new AudioStore();

export default audioStore;
