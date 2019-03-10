const serialized = new WeakMap();

export function serializable() {
  return function(target: Function) {
    //console.log(target);
    //console.log(target.prototype);
    target.prototype.toJSON = function() {
      const map: any = serialized.get(target.prototype);
      console.log(map);
      const props: Array<string> = Object.keys(map);
      console.log(props);
      return props.reduce((previous, key) => {
        console.log("previous", previous);
        console.log("key", key);
        console.log("map key", map[key]);
        console.log("this key", this[key]);
        // @ts-ignore
        previous[map[key]] = this[key];
        return previous;
      }, {});
    };
  };
}

export function serialize(name?: string): PropertyDecorator {
  return function(target: Object, propertyKey: string | symbol) {
    let map = serialized.get(target);
    if (!map) {
      map = {};
      serialized.set(target, map);
    }

    map[propertyKey] = name || propertyKey;
  };
}
