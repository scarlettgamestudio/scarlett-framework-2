export { isObjectAssigned, isBrowser };

/**
 * Returns true if there is something assigned to the given object
 * @param obj
 * @returns {boolean}
 */
function isObjectAssigned(obj: any): boolean {
  return typeof obj !== "undefined" && obj !== null;
}

/**
 * Returns true when run under browser environment
 * and false otherwise (e.g., node)
 */
function isBrowser(): boolean {
  // @ts-ignore - just to ignore the 'this'
  return typeof window !== "undefined" && this === window;
}
