export { isObjectAssigned };

/**
 * Returns true if there is something assigned to the given object
 * @param obj
 * @returns {boolean}
 */
function isObjectAssigned(obj: any): boolean {
  return typeof obj !== "undefined" && obj !== null;
}
