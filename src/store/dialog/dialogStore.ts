import { makeAutoObservable } from "mobx";
import { DialogType } from "./types";

export class DialogStore {
  opened = false;
  type: DialogType = "upload";
  imgsrc: string | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  reset() {
    this.opened = false;
    this.type = undefined;
    this.imgsrc = undefined;
  }

  changeType(type: DialogType) {
    this.type = type;
  }

  toggle() {
    this.opened = !this.opened;
  }

  open() {
    this.opened = true;
  }

  close() {
    this.reset();
  }

  openUpload() {
    this.changeType("upload");
    this.open();
  }

  openImage(src: string) {
    this.changeType("image");
    this.imgsrc = src;
    this.open();
  }
}

const dialogStore = new DialogStore();

export default dialogStore;
