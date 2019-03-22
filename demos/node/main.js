const common = require("../../packages/common/");
const core = require("../../packages/core/");

const geometry = new core.Geometry();
geometry.prop = "some property";
geometry.num = 20;

const data = JSON.stringify(geometry);

console.log("geometry data", data);

// deserialization
const restoredObj = common.SerializationHelper.restoreFromJson(
  data,
  core.Geometry
);

console.log("restored geometry", restoredObj);

console.log("instance of Geometry", restoredObj instanceof core.Geometry);
console.log("instance of GameObject", restoredObj instanceof core.GameObject);

console.log("is browser: ", common.isBrowser());
