import { Logger } from "scarlett-commons";

export default class RenderContext {
  //#region constructors

  constructor(target) {
    this._logger = new Logger("RenderContext");
    this._target = target;
  }

  //#endregion

  //#region methods

  /**
   *
   */
  init() {
    throw new Error("Method not implemented");
  }

  /**
   *
   */
  setVirtualResolution() {
    throw new Error("Method not implemented");
  }

  /**
   *
   */
  getContext() {
    throw new Error("Method not implemented");
  }

  /**
   *
   */
  unload() {
    throw new Error("Method not implemented");
  }

  onRenderFrame() {
    throw new Error("Method not implemented");
  }

  //#endregion
}
