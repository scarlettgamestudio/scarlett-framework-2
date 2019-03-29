import { toJson, jsonObject, jsonMember } from "typedjson";

@toJson
@jsonObject
class GameObject {
  @jsonMember({ constructor: String, name: "renamed" })
  prop?: string;
}

export { GameObject };
