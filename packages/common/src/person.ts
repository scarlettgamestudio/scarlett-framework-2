import { Simple } from "./simple";
import { jsonObject, jsonMember, TypedJSON, toJson } from "typedjson";

@toJson
@jsonObject
class Person {
  constructor(name?: string) {
    this._name = name || "some default name 2";
  }

  private _name: string;

  @jsonMember({ constructor: Simple })
  public simple: Simple = new Simple();

  @jsonMember({ constructor: String, name: "first-name" })
  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  static testSerialization(): void {
    let serializer = new TypedJSON(Person);
    let object = new Person("Luís");

    console.log("original", object);

    let json = serializer.stringify(object);

    console.log(json);

    let object2 = serializer.parse(json);

    console.log("restored", object2);

    console.log("instance of", object2 instanceof Person);
  }

  get lang() {
    return "JavaScript";
  }
}

export { Person };
