import { Simple, Person } from "@scarlett-game-studio/scarlett-commons";

let x: Simple = new Simple();
let y: string = x.methodB();

console.log(y);

const p = new Person("Luis");
console.log(JSON.stringify(p));

export function fn() {
  return "Hello world";
}
