import { makeAutoObservable, runInAction } from "mobx";

class Timer {
  constructor() {
    this._load = "none";
    this._id = 0;
    this._sec = 0;
    this._over = false;
    this._en = false;
    this._launch = false;
    this._date = new Date().toISOString();
    makeAutoObservable(this, {});
  }

  get over() {
    return this._over;
  }
  inc() {
    //console.log(`en=${this._en}`);
    if (!this._en) return;
    runInAction(() => {
      this._sec += 1;
      if (this._sec > 10) {
        this._over = true;
        this._en = false;
      }
      //console.log(`t: ${this._sec}`);
    });
  }
  reset() {
    //console.log(`reset, en=${this._en} lan=${this._launch}`);
    //if (!this._launch) return;
    runInAction(() => {
      this._over = false;
      this._sec = 0;
      this._en = true;
    });
  }
  stop() {
    this._over = false;
    this._en = false;
  }
}

const engTimer = new Timer();

export default engTimer;
