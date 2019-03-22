import { generateUUID, isBrowser, isObjectAssigned } from "../src/utils";

// just a quick way of checking if it's unique or not, since Sets only allow unique values within
function isArrayUnique(myArray: Array<any>) {
  return myArray.length === new Set(myArray).size;
}

test("generation of UUIDs is unique", () => {
  expect.assertions(1);
  let uuids: Array<string> = [];

  const maxRange = 200;

  // let's make the number of uuids different everytime so the test has more credibility
  for (let i = 0; i < Math.floor(Math.random() * maxRange); i++) {
    uuids.push(generateUUID());
  }

  const result = isArrayUnique(uuids);

  expect(result).toBe(true);
});

test("is not running on browser", () => {
  expect.assertions(1);

  const result = isBrowser();

  expect(result).toBe(false);
});

test("is object assigned", () => {
  expect.assertions(5);

  const nullResult = isObjectAssigned(null);
  const undefinedResult = isObjectAssigned(undefined);
  const numberResult = isObjectAssigned(3);
  const stringResult = isObjectAssigned("");
  const customObjectResult = isObjectAssigned({});

  expect(nullResult).toBe(false);
  expect(undefinedResult).toBe(false);
  expect(numberResult).toBe(true);
  expect(stringResult).toBe(true);
  expect(customObjectResult).toBe(true);
});
