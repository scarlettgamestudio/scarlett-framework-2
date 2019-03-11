import { Simple, Person } from "@scarlett-game-studio/scarlett-commons";
import { TypedJSON } from "typedjson";

let x: Simple = new Simple();
let y: string = x.methodB();

console.log(y);

//const p = new Person("Luis");
//const data = JSON.parse(JSON.stringify(p));

//console.log(data);

let serializer = new TypedJSON(Person);
let object = new Person("Luís");

console.log("original", object);

let json = serializer.stringify(object);

console.log(json);

let object2 = serializer.parse(json);

console.log("restored", object2);

console.log("instance of", object2 instanceof Person); // true

export function fn() {
  return "Hello world";
}
