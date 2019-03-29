import { jsonMember, jsonObject } from "typedjson";
import { GameObject } from "./gameObject";

@jsonObject
class Geometry extends GameObject {
  @jsonMember({ constructor: Number, name: "numeric" })
  num?: number;
}

export { Geometry };
