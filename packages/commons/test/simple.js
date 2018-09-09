// or import {Simple} from "commons"
// though you can't go to the definition that way
import Simple from "../src/simple";

test("Something", () => {
  expect.assertions();

  const simple = new Simple();
  expect(simple.methodB()).toBe("something");
});
