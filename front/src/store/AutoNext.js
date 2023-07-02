import { makeAutoObservable, runInAction } from "mobx";
import audioStore from "./AudioStore";
import engXStore from "./EngXStore";

class AutoNext {
  constructor() {
    this._launch = false;
    this._auto = false;
    this._sec = 0;
    makeAutoObservable(this, {});
  }

  get auto() {
    return this._auto;
  }
  setAuto(en) {
    this._auto = en;
  }
  change() {
    let en;
    if (this._auto) en = false;
    else en = true;
    if (en) {
      //console.log(`ind = ${engAStore._indSub}`);
      this.startTimer();
      this._auto = true;
      this._sec = 0;
    } else {
      this._auto = false;
      this.stopTimer();
    }
  }

  inc() {
    if (!this._auto) return;
    runInAction(() => {
      this._sec += 1;
      if (this._sec > 3) {
        if (audioStore.enable) {
          engXStore.formAnswerFromTimer();
        }
      }
      if (this._sec > 7) {
        this._sec = 0;
        engXStore.formSentenceFromTimer();
      }
    });
  }

  stopTimer() {
    this._launch = false;
    this._auto = false;
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

const autoNext = new AutoNext();

export default autoNext;
