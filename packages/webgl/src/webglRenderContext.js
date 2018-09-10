import { RenderContext } from "scarlett-core";
import { Utils } from "scarlett-commons";
import { ShaderManager } from "./shader/index";

export default class WebGLRenderContext extends RenderContext {
  /**
   *
   * @param {String} target
   */
  constructor(target) {
    super(target);
    this._shaderManager = null;
    this._gl = null;
  }

  init() {
    // let's attempt to get the webgl context from the given container:
    let canvas = document.getElementById(this._target);

    if (!Utils.isObjectAssigned(canvas)) {
      throw new Error(`Canvas could not be assigned from target ${this._target}`);
    }

    let options = { alpha: false, antialias: true };
    this._gl =
      canvas.getContext("experimental-webgl", options) ||
      canvas.getContext("webgl", options) ||
      canvas.getContext("webkit-3d", options) ||
      canvas.getContext("moz-webgl", options);

    if (!Utils.isObjectAssigned(this._gl)) {
      this._logger.warn("WebGL not supported, find a container that does (eg. Chrome, Firefox)");
      return;
    }

    //console.log(gl.getSupportedExtensions());
    this._gl.getExtension("OES_standard_derivatives");

    // disable unnecessary gl functions:
    this._gl.disable(this._gl.CULL_FACE);
    this._gl.disable(this._gl.DEPTH_TEST);

    this._gl.blendFuncSeparate(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE);

    // enable gl functions:
    this._gl.enable(this._gl.BLEND);
    this._gl.blendFunc(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA);

    // update own properties:
    this._canvas = canvas;
    this._shaderManager = new ShaderManager(this._gl);
  }

  /**
   *
   * @param {Number} width
   * @param {Number} height
   */
  setVirtualResolution(width, height) {
    if (Utils.isObjectAssigned(this._gl)) {
      this._canvas.width = width;
      this._canvas.height = height;

      this._gl.viewport(0, 0, width, height);
    }
  }

  /**
   *
   * @param {Function} callback
   */
  onRenderFrame(callback) {
    requestAnimationFrame(callback.bind(this._gl));
  }

  /**
   *
   */
  getShaderManager() {
    return this._shaderManager;
  }

  /**
   *
   */
  getContext() {
    return this._gl;
  }

  unload() {
    // nothing to do at this point..
  }
}
