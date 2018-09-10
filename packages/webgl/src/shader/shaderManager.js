import { Utils } from "scarlett-commons";

/**
 * ShaderManager class
 */
export default class ShaderManager {
  //#region Constructors

  /**
   * @param game
   * @constructor
   */
  constructor(glContext) {
    // private variables
    this._gl = glContext;
    this._activeShader = null;
  }

  //#endregion

  //#region Methods

  unload() {}

  useShader(shader) {
    // is this the same shader that is being used?
    if (!Utils.isObjectAssigned(this._activeShader) || this._activeShader.getUID() !== shader.getUID()) {
      this._activeShader = shader;
      this._gl.useProgram(shader.getProgram());
    }
  }

  //#endregion
}
