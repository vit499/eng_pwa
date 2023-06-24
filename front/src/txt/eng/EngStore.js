import { makeAutoObservable } from "mobx";

const subT1 = [
  ["I", "я"],
  ["you", "ты"],
  ["he", "Он"],
  ["she", "Она"],
  ["we", "мы"],
  ["you", "вы"],
  ["they", "они"],
  ["table", "стол"],
  ["Petya", "Петя"],
  ["pen", "ручка"],
  ["it", "он"],
];
const subT2 = [
  ["ab", "bc"],
  ["ab", "bc"],
];
const subT3 = [
  ["ab", "bc"],
  ["ab", "bc"],
];
const preT1 = [
  ["do", "делать"],
  ["read", "читать"],
  ["write", "писать"],
  ["", "идти"],
  ["", "хочу поехать"],
  ["", "плавать"],
  ["", "видеть"],
];
const preT2 = [
  ["can", "умеет"],
  ["may", "можно"],
  ["must", "должен"],
  ["will", "будет"],
  ["would", "бы"],
  ["should", "следует"],
];
const preT3 = [
  ["ab", "bc"],
  ["ab", "bc"],
];

class EngStore {
  constructor() {
    this._load = "none";
    this._id = 0;
    this._typeSent = 0;
    this._indSub = 0;
    this._indPre1 = 0;
    this._indPre2 = 0;
    this._rusSentence = "";
    this._engSentence = "";
    this._date = new Date().toISOString();
    makeAutoObservable(this, {});
  }

  // Init(pur = {id = 0, name = "", price = 0, needId = 1, freqId = 1, tags = [], date}) {
  Init() {
    this._load = "none";
  }

  get rusSentence() {
    return this._rusSentence;
  }
  get engSentence() {
    return this._engSentence;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  formRusSentence() {
    const typeSent = this.getRandomInt(7);
    const indSub = this.getRandomInt(subT1.length);
    const indPre1 = this.getRandomInt(preT1.length);
    const indPre2 = this.getRandomInt(preT2.length);
    this._typeSent = typeSent;
    this._indSub = indSub;
    this._indPre1 = indPre1;
    this._indPre2 = indPre2;
    let dst = "";
    if (typeSent == 0) {
      dst = `${subT1[indSub][1]} ${preT1[indPre1][1]}`;
    } else if (typeSent == 1) {
      dst = `${subT1[indSub][1]} не ${preT1[indPre1][1]}`;
    } else if (typeSent == 2) {
      dst = `${subT1[indSub][1]} ${preT1[indPre1][1]} ?`;
    } else if (typeSent == 3) {
      dst = `${subT1[indSub][1]} ${preT2[indPre2][1]} ${preT1[indPre1][1]} `;
    } else if (typeSent == 4) {
      dst = `${subT1[indSub][1]} не ${preT2[indPre2][1]} ${preT1[indPre1][1]} `;
    } else if (typeSent == 5) {
      dst = `${subT1[indSub][1]} ${preT2[indPre2][1]} ${preT1[indPre1][1]} ?`;
    } else if (typeSent == 6) {
      dst = `${subT1[indSub][1]} не ${preT2[indPre2][1]} ${preT1[indPre1][1]} `;
    }
    this._rusSentence = dst;
    return dst;
  }

  formEngSentence() {
    let typeSent = this._typeSent;
    let indSub = this._indSub;
    let indPre1 = this._indPre1;
    let indPre2 = this._indPre2;
    let dst = "";
    if (typeSent == 0) {
      dst = `${subT1[indSub][0]} ${preT1[indPre1][0]}`;
    } else if (typeSent == 1) {
      dst = `${subT1[indSub][0]} не ${preT1[indPre1][0]}`;
    } else if (typeSent == 2) {
      dst = `${subT1[indSub][0]} ${preT1[indPre1][0]} ?`;
    } else if (typeSent == 3) {
      dst = `${subT1[indSub][0]} ${preT2[indPre2][0]} ${preT1[indPre1][0]} `;
    } else if (typeSent == 4) {
      dst = `${subT1[indSub][0]} ${preT2[indPre2][0]} ${preT1[indPre1][0]} `;
    }
    this._engSentence = dst;
    return dst;
  }
  formSentence() {
    this.formRusSentence();
    this._engSentence = "";
  }
  formAnswer() {
    this.formEngSentence();
  }
}

const engStore = new EngStore();

export default engStore;
