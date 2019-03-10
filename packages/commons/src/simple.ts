import { serializable, serialize } from "./serializers";

@serializable()
class Simple {
  private _arr: Array<string> = ["str1", "str2"];

  @serialize("Array of strings")
  get arr(): Array<string> {
    return this._arr;
  }

  set arr(value: Array<string>) {
    this._arr = value;
  }

  methodB(): string {
    return "something";
  }
}

export default Simple;
