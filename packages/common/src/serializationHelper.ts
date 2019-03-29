import { TypedJSON } from "typedjson";

//@ts-ignore
// eslint-disable-next-line
interface ParameterlessConstructor<T> {
  //eslint-disable-next-line
  new (): T;
}

export class SerializationHelper {
  static restoreFromJson<T>(data: any, target: ParameterlessConstructor<T>): T | undefined {
    const result = TypedJSON.parse(data, target);
    return result;
  }
}
