// console.log("dir name", __dirname);
// console.log("file name", __filename);

// const names = require("./4-names");
const { john, petter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

sayHi("susan");
// sayHi(names.john);
// sayHi(names.petter);
sayHi(john);
sayHi(petter);

// console.log("item", item);
console.log("data", data);
