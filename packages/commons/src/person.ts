//import { serializable, serialize } from "./serializers";
import Simple from "./simple";
//import { logClass } from "./logClass";
import { jsonObject, jsonMember, TypedJSON } from "typedjson";

@jsonObject()
class Person {
  constructor(name?: string) {
    this._name = name || "some default name";
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

    console.log("instance of", object2 instanceof Person); // true
  }

  //@serialize("Language")
  get lang() {
    return "JavaScript";
  }
}

export default Person;
