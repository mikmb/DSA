const HashMap = require("./hash_map");

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("KEYS:");
console.log(test.keys());
console.log("ENTRIES:");
console.log(test.entries());
console.log("length: " + test.length());
console.log("capacity: " + test.getCapacity());

test.set("jacket", "green");
test.set("lion", "orange");

console.log("KEYS:");
console.log(test.keys());
console.log("ENTRIES:");
console.log(test.entries());
console.log("length: " + test.length());
console.log("capacity: " + test.getCapacity());

test.set("moon", "silver");

console.log("KEYS:");
console.log(test.keys());
console.log("ENTRIES:");
console.log(test.entries());
console.log("length: " + test.length());
console.log("capacity: " + test.getCapacity());

test.set("jacket", "black");
test.set("lion", "yellow");

console.log("KEYS:");
console.log(test.keys());
console.log("ENTRIES:");
console.log(test.entries());
console.log("length: " + test.length());

console.log("get(key) for key is hat");
console.log(test.get("hat"));

console.log("has(key) for key is hat");
console.log(test.has("hat"));

console.log("remove(key) for key is hat");
console.log(test.remove("hat"));
console.log("length: " + test.length());
console.log("ENTRIES:");
console.log(test.entries());

console.log("VALUES:");
console.log(test.values());

console.log("CLEAR:");
console.log(test.clear());
console.log("length: " + test.length());
console.log("ENTRIES:");
console.log(test.entries());
