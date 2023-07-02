import { makeAutoObservable } from "mobx";
import mp3 from "../data/txt/mp3";
import engAStore from "./EngAStore";
import engXStore from "./EngXStore";
import audioSynthStore from "./AudioSynthStore";

const audioMp3 = false;

class AudioStore {
  constructor() {
    this.enable = false;
    this.audio = null;
    this.folder = 0;
    makeAutoObservable(this, {});
  }

  get en() {
    return this.enable;
  }
  setCurrentFolder(indFolder) {
    this.folder = indFolder;
  }

  toggleAudio() {
    this.enable = !this.enable;
  }

  speakAudioRus() {
    if (audioMp3) {
      this.audio = new Audio(mp3[this.folder].arr[engAStore._indSub]);
      this.audio.play();
    } else {
      audioSynthStore.speakRus(engXStore._rusSentence);
    }
  }
}

const audioStore = new AudioStore();

export default audioStore;
