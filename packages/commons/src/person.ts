//import { serializable } from "./serializers";
import Simple from "./simple";
//import { logClass } from "./logClass";
import { jsonObject, jsonMember, TypedJSON } from "typedjson";

// eslint-disable-next-line
interface ParameterlessConstructor<T> {
  //eslint-disable-next-line
  new (): T;
}

// @ts-ignore
// eslint-disable-next-line
function toJson<T>(target: ParameterlessConstructor<T>) {
  target.prototype.toJSON = function() {
    return TypedJSON.toPlainJson(this, target);
  };
}

/** 
 * Or through the following decorator.
 * But this one might yield some issues when minifying or uglifying
 * because it relies on prototype.constructor.
 function toJson(target: Function) {
  target.prototype.toJSON = function() {
    return TypedJSON.toPlainJson(this, target.prototype.constructor);
  };
}
*/

/**
 * Can also be accomplished through an abstract class 
 * that must be extended as follows:
 * Class Person extends Serializable<Person> {
 *    constructor(name?: string) {
        super(Person);
        this._name = name || "some default name 2";
      }
 * }
 */

/** 
 * The actual abstract class, but it's not too elegant
 * and requires extending a class.
  abstract class Serializable<T> {
    // eslint-disable-next-line
    protected constructor(protected ctor: ParameterlessConstructor<T>) {}

    toJson(instance: T): string {
      const serializer = new TypedJSON(this.ctor);

      const result = serializer.stringify(instance);
      return result;
    }
  }
**/

//@serializable()
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

    console.log("instance of", object2 instanceof Person); // true
  }

  //@serialize("Language")
  get lang() {
    return "JavaScript";
  }
}

export default Person;
