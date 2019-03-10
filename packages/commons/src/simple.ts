import { serializable, serialize } from "./serializers";

@serializable()
class Simple {
  @serialize("Array of strings")
  get arr(): Array<string> {
    return ["JavaScript"];
  }

  methodB(): string {
    return "something";
  }
}

export default Simple;
