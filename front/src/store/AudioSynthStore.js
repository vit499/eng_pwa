import { makeAutoObservable, runInAction } from "mobx";
// import mp3 from "../data/txt/mp3";
// import engAStore from "./EngAStore";
// import engXStore from "./EngXStore";

const synth = window.speechSynthesis;
const voiceNameRus = ["Google русский", "Microsoft Irina"];
const voiceNameEng = ["Google UK English Female", "Microsoft Zira"];

class AudioSynthStore {
  constructor() {
    this.utter = null;
    //this.voices = synth.getVoices();
    this.voiceRus = 0;
    this.voiceEng = 1;
    this.setVoice = false;
    this.xvoices = []
    makeAutoObservable(this, {});
  }

  // ind=0, name=Microsoft Irina - Russian (Russia), lang=ru-RU
  // ind=1, name=Microsoft Mark - English (United States), lang=en-US
  // ind=2, name=Microsoft Zira - English (United States), lang=en-US
  // ind=3, name=Microsoft David - English (United States), lang=en-US
  // ind=4, name=Microsoft Pavel - Russian (Russia), lang=ru-RU
  // ind=5, name=Google Deutsch, lang=de-DE
  // ind=6, name=Google US English, lang=en-US
  // ind=7, name=Google UK English Female, lang=en-GB
  // ind=8, name=Google UK English Male, lang=en-GB
  // ind=9, name=Google español, lang=es-ES
  // ind=10, name=Google español de Estados Unidos, lang=es-US
  // ind=11, name=Google français, lang=fr-FR
  // ind=12, name=Google हिन्दी, lang=hi-IN
  // ind=13, name=Google Bahasa Indonesia, lang=id-ID
  // ind=14, name=Google italiano, lang=it-IT
  // ind=15, name=Google 日本語, lang=ja-JP
  // ind=16, name=Google 한국의, lang=ko-KR
  // ind=17, name=Google Nederlands, lang=nl-NL
  // ind=18, name=Google polski, lang=pl-PL
  // ind=19, name=Google português do Brasil, lang=pt-BR
  // ind=20, name=Google русский, lang=ru-RU
  // ind=21, name=Google 普通话（中国大陆）, lang=zh-CN
  // ind=22, name=Google 粤語（香港）, lang=zh-HK
  // ind=23, name=Google 國語（臺灣）, lang=zh-TW

  checkVoice() {
    if (this.setVoice) return;
    this.voices = synth.getVoices();
    for (let i = 0; i < this.voices.length; i++) {
      console.log(
        `ind=${i}, name=${this.voices[i].name}, lang=${this.voices[i].lang}`
      );
      this.xvoices.push({id: i, text: this.voices[i].name})
    }
    for (let i = 0; i < this.voices.length; i++) {
      if (this.voices[i].name.indexOf(voiceNameRus[0]) !== -1) {
        this.voiceRus = i;
        break;
      }
    }
    if (this.voiceRus === 0) {
      for (let i = 0; i < this.voices.length; i++) {
        if (this.voices[i].name.indexOf(voiceNameRus[1]) !== -1) {
          this.voiceRus = i;
          break;
        }
      }
    }
    for (let i = 0; i < this.voices.length; i++) {
      if (this.voices[i].name.indexOf(voiceNameEng[0]) !== -1) {
        this.voiceEng = i;
        break;
      }
    }
    if (this.voiceEng === 1) {
      for (let i = 0; i < this.voices.length; i++) {
        if (this.voices[i].name.indexOf(voiceNameEng[1]) !== -1) {
          this.voiceEng = i;
          break;
        }
      }
    }
    //console.log(`voiceRus=${this.voiceRus}, voiceEng=${this.voiceEng}`);
    this.xvoices.push({id: 55, text: this.voiceRus.toString()})
    this.xvoices.push({id: 56, text: this.voiceEng.toString()})
    this.setVoice = true;
  }
  speakEng(text) {
    this.checkVoice();
    this.utter = new SpeechSynthesisUtterance(text);
    this.utter.voice = this.voices[this.voiceEng];
    synth.speak(this.utter);
  }
  speakRus(text) {
    this.checkVoice();
    this.utter = new SpeechSynthesisUtterance(text);
    this.utter.voice = this.voices[this.voiceRus];
    synth.speak(this.utter);
  }
}

const audioSynthStore = new AudioSynthStore();

export default audioSynthStore;
