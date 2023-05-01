import { makeAutoObservable } from "mobx";

class Random {
  constructor() {
    this._random = false;
    makeAutoObservable(this, {});
  }

  get random() {
    return this._random;
  }
  setRandom(en) {
    this._random = en;
  }
  change() {
    this._random = !this.random;
  }
}

const engRandom = new Random();

export default engRandom;
