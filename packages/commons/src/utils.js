// unique key
const _utilsSingleton = Symbol("Utils");

/**
 * Utility class
 */
export default class UtilsSingleton {
  constructor(utilsSingleton) {
    if (_utilsSingleton !== utilsSingleton) {
      throw new Error("Cannot instantiate directly.");
    }

    this._rules = {};
    this._uid = 0;
  }

  static get instance() {
    if (!this[_utilsSingleton]) {
      this[_utilsSingleton] = new UtilsSingleton(_utilsSingleton);
    }

    return this[_utilsSingleton];
  }

  isObjectAssigned(obj) {
    return typeof obj !== "undefined" && obj !== null;
  }

  isString(obj) {
    return typeof obj === "string";
  }

  isNumber(obj) {
    return typeof obj === "number";
  }

  isFunction(obj) {
    return typeof obj === "function";
  }

  inheritsFrom(child, parent) {
    child.prototype = Object.create(parent.prototype);
  }

  generateUID() {
    return "USCID-" + ++this._uid;
  }

  capitalize(string) {
    if (string.length >= 2) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else if (string.length == 1) {
      return string.charAt(0).toUpperCase();
    }
    return string;
  }

  splitCamelCase(string) {
    return string.replace(/([a-z](?=[A-Z]))/g, "$1 ");
  }

  getType(object) {
    if (object === null) return "[object Null]"; // special case
    if (object.getType) return object.getType();
    return object.constructor.name || Object.prototype.toString.call(object);
  }

  isEqual(a, b) {
    if (this.isFunction(a.equals)) {
      return a.equals(b);
    }

    return a === b;
  }
}

/**
 * Setter Dictionary alias to Setter Dictionary Singleton instance
 * Attribute dictionary for property definitions
 */
export const Utils = UtilsSingleton.instance;
