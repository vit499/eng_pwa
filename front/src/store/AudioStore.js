import { makeAutoObservable, runInAction } from "mobx";
import mp3 from "../audio";
// import m1 from "./0.mp3";
// import m2 from "./1.mp3";
// import m3 from "./2.mp3";
// import m4 from "./3.mp3";
// import m5 from "./4.mp3";

// const mp3 = [
//   { file: m1 },
//   { file: m2 },
//   { file: m3 },
//   { file: m4 },
//   { file: m5 },
// ];
class AudioStore {
  constructor() {
    this._load = "none";
    this._over = false;
    this._en = false;
    this._launch = false;
    this._date = new Date().toISOString();
    this.audio = null;
    this.foldef = "";
    this.ind = 0;
    makeAutoObservable(this, {});
  }

  get en() {
    return this._en;
  }
  setCurrentFile(folder, ind) {
    this.foldef = folder;
    this.ind = ind;
  }
  toggleAudio() {
    //if (this._en === en) return;
    //this._en = en;
    if (this._en) this._en = false;
    else this._en = true;
    if (this._en) {
      this.startTimer();
      this._sec = 0;
      console.log(`first: ${mp3[this.ind].file}`);
      this.audio = new Audio(mp3[this.ind].file);
      this.audio.play();
    } else {
      this.stopTimer();
    }
  }
  get over() {
    return this._over;
  }
  nextAudio() {
    if (this._en) {
      this.ind++;
      if (this.ind > 4) this.ind = 0;
      this.audio = null;
      this._sec = 0;
      console.log(`next: ${mp3[this.ind].file}`);
      this.audio = new Audio(mp3[this.ind].file);
      this.audio.play();
    }
  }
  inc() {
    //console.log(`en=${this._en}`);
    if (!this._en) return;
    runInAction(() => {
      this._sec += 1;
      if (this._sec > 4) {
        //this._over = true;
        this.nextAudio();
      }
      //console.log(`t: ${this._sec}`);
    });
  }
  stop() {
    this._over = false;
    this._en = false;
  }

  stopTimer() {
    console.log("stop timer");
    this._launch = false;
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
