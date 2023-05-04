import txts from "../txt/index";

class EngAStore {
  constructor() {
    this._ind = 0;
    this._indSub = 0;
    this.descr = txts.map((v, ind) => {
      return { id: ind, text: v.descr };
    });
    this._arr = txts[0].arr;
    this._len = this._arr.length;
  }

  Init(ind) {
    this._ind = 0;
    this._indSub = 0;
    this._arr = txts[ind].arr;
    this._len = this._arr.length;
  }
  formSentence(rand) {
    if (rand) {
      this._indSub = Math.floor(Math.random() * this._len);
    } else {
      if (this._ind >= this._len) this._ind = 0;
      this._indSub = this._ind;
    }
    let dst = "";
    dst = `${this._arr[this._indSub][0]}`;
    this._ind++;
    return dst;
  }

  formAnswer() {
    const dst = `${this._arr[this._indSub][1]}`;
    return dst;
  }
}

const engAStore = new EngAStore();

export default engAStore;