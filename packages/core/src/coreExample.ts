import { Simple, Person } from "@scarlett-game-studio/scarlett-commons";

let x: Simple = new Simple();
let y: string = x.methodB();

console.log(y);

const p = new Person("Luis");

const data = JSON.parse(JSON.stringify(p));

console.log(data);

export function fn() {
  return "Hello world";
}
