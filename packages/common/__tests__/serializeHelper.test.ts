import { SerializationHelper } from "../src/serializationHelper";
import { toJson, jsonObject, jsonMember } from "typedjson";

@toJson
// @ts-ignore
class Base {
  @jsonMember({ constructor: String, name: "renamed" })
  //@ts-ignore
  prop?: string;
}

@jsonObject
//@ts-ignore
class Sub extends Base {
  @jsonMember({ constructor: Number, name: "numeric" })
  //@ts-ignore
  num?: number;
}

@jsonObject
//@ts-ignore
class OtherSub extends Base {
  @jsonMember({ constructor: Number })
  //@ts-ignore
  decimal?: number;
  ignored?: string;
}

test("should work on the base class", () => {
  const sub = new Sub();
  sub.prop = "value";
  sub.num = 20;
  // serialization
  expect(JSON.stringify(sub)).toBe('{"renamed":"value","numeric":20}');

  const otherSub = new OtherSub();
  otherSub.prop = "value";
  otherSub.decimal = 123;
  otherSub.ignored = "assigned";
  // serialization
  const data = JSON.stringify(otherSub);
  const expectedJson = '{"renamed":"value","decimal":123}';

  expect(data).toBe(expectedJson);

  // deserialization
  const restoredObj = SerializationHelper.restoreFromJson(data, OtherSub);

  const instance = restoredObj instanceof OtherSub;
  const baseInstance = restoredObj instanceof Base;
  const restoredData = JSON.stringify(restoredObj);

  expect(instance).toBe(true);
  expect(baseInstance).toBe(true);
  expect(restoredData).toBe(expectedJson);
});
