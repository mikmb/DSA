const LinkedList = require("./linked_list");
// import { LinkedList } from "./linked_list";

const list = new LinkedList();

list.append(3);
list.append(4);

console.log("toString(): " + list.toString()); // toString(): ( 3 ) -> ( 4 ) -> null

list.prepend(2);

console.log("toString(): " + list.toString()); // toString(): ( 2 ) -> ( 3 ) -> ( 4 ) -> null

console.log("size: " + list.getSize()); // size: 3
console.log("Head: " + list.getHead().value); // Head: 2
console.log("Tail: " + list.getTail().value); // Tail: 4
console.log("At index 2: " + list.getAt(2).value); // At index 2: 4

list.pop();
console.log("size: " + list.getSize()); // size: 2
console.log("toString(): " + list.toString()); // toString(): ( 2 ) -> ( 3 ) -> null

console.log("contains(4): " + list.contains(4)); // false
console.log("contains(3): " + list.contains(3)); // true

console.log("find(4): " + list.find(4)); // null
console.log("find(3): " + list.find(3)); // 1

console.log("toString(): " + list.toString()); // toString(): ( 2 ) -> ( 3 ) -> ( 4 ) -> null

list.insertAt(5, 2);
console.log("toString(): " + list.toString());

list.removeAt(2);
console.log("toString(): " + list.toString()); // ( 2 ) -> ( 3 ) -> null

const list2 = new LinkedList();

list2.append("dog");
list2.append("cat");
list2.append("parrot");
list2.append("hamster");
list2.append("snake");
list2.append("turtle");

console.log("toString(): " + list2.toString()); // toString(): ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
