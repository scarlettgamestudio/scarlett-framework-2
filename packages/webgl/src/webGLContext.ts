/**
 * WebGLContext Class
 */
import { isObjectAssigned } from "@scarlett-game-studio/scarlett-common";

export class WebGLContext {
  //#region Fields

  private _canvas: HTMLCanvasElement | null;
  private _gl: WebGLRenderingContext | null;

  //#endregion

  /** 
  get Name() {
    return CONSTANTS.WEBGL;
  }
  **/

  get Context(): WebGLRenderingContext | null {
    return this._gl;
  }

  //#region Constructors

  constructor(renderContainer: HTMLCanvasElement) {
    this._gl = this.createContextFromContainer(renderContainer);
    this._canvas = this._gl !== null ? renderContainer : null;
  }

  //#endregion

  //#region Methods

  setVirtualResolution(width: number, height: number): void {
    if (this._gl === null || this._canvas === null) {
      return;
    }

    this._canvas.width = width;
    this._canvas.height = height;

    this._gl.viewport(0, 0, width, height);
  }

  createContextFromContainer(
    canvas: HTMLCanvasElement,
    options = { alpha: false, antialias: true }
  ): WebGLRenderingContext | null {
    // let's try to get the webgl context from the given container:
    // alpha is set to false to avoid webgl picking up the canvas color
    // and place it on the alpha channel
    // see: http://webglfundamentals.org/webgl/lessons/webgl-and-alpha.html

    const gl: RenderingContext | null =
      (canvas.getContext("experimental-webgl", options) as WebGLRenderingContext) ||
      (canvas.getContext("webgl", options) as WebGLRenderingContext) ||
      (canvas.getContext("webkit-3d", options) as WebGLRenderingContext) ||
      (canvas.getContext("moz-webgl", options) as WebGLRenderingContext);

    if (!isObjectAssigned(gl)) {
      console.warn("WebGL not supported, find a container that does (eg. Chrome, Firefox)");
      return null;
    }

    return gl;
  }

  setupWebGL(): void {
    if (this._gl === null) {
      return;
    }

    //console.log(gl.getSupportedExtensions());
    this._gl.getExtension("OES_standard_derivatives");

    // disable this._gl functions:
    this._gl.disable(this._gl.CULL_FACE);
    this._gl.disable(this._gl.DEPTH_TEST);

    this._gl.blendFuncSeparate(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE);

    // enable this._gl functions:
    this._gl.enable(this._gl.BLEND);
    this._gl.blendFunc(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA);
  }

  unload(): void {}

  //#endregion
}
