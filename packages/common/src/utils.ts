export { isObjectAssigned, isBrowser, generateUUID };

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
 * @returns {boolean}
 */
function isBrowser(): boolean {
  // @ts-ignore - just to ignore the 'this'
  return typeof window !== "undefined" && this === window;
}

/**
 * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
 * where each x is replaced with a random hexadecimal digit from 0 to f,
 * and y is replaced with a random hexadecimal digit from 8 to b.
 * Adapted (aka copied) from https://gist.github.com/jed/982883
 * @returns {string}
 */
function generateUUID(): string {
  // @ts-ignore - needed to support the + sign: [1e7] + -1e3
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ ((Math.random() * 16) & (15 >> (c / 4)))).toString(16)
  );
}
