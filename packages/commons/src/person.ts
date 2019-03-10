import { serializable, serialize } from "./serializers";
import Simple from "./simple";
//import { logClass } from "./logClass";

@serializable()
class Person {
  constructor(name: string) {
    this._name = name;
    this._simple = new Simple();
  }

  private _name: string;
  private _simple: Simple;

  @serialize()
  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  @serialize("XPTO")
  get simple() {
    return this._simple;
  }

  set simple(value: Simple) {
    this._simple = value;
  }

  @serialize("Language")
  get lang() {
    return "JavaScript";
  }
}

export default Person;
