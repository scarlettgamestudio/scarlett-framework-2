//import { serializable, serialize } from "./serializers";

import { jsonObject, jsonArrayMember } from "typedjson";

@jsonObject()
class Simple {
  private _arr: string[] = ["str1", "str2", "str3"];

  constructor() {}

  @jsonArrayMember(String)
  get arr(): string[] {
    return this._arr;
  }

  set arr(arr: string[]) {
    this._arr = arr;
  }

  methodB(): string {
    return "something";
  }
}

export default Simple;
