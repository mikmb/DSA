const Tree = require("./BST");

const newTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
newTree.prettyPrint(newTree.root);
/*
│       ┌── 6345
│       │   └── 324
│   ┌── 67
│   │   └── 23
│   │       └── 9
└── 8
    │   ┌── 7
    │   │   └── 5
    └── 4
        └── 3
            └── 1
*/

newTree.insert(20);
newTree.prettyPrint(newTree.root);
/*
│       ┌── 6345
│       │   └── 324
│   ┌── 67
│   │   └── 23
│   │       │   ┌── 20
│   │       └── 9
└── 8
    │   ┌── 7
    │   │   └── 5
    └── 4
        └── 3
            └── 1
*/

newTree.deleteItem(7);
newTree.prettyPrint(newTree.root);
/*
│       ┌── 6345
│       │   └── 324
│   ┌── 67
│   │   └── 23
│   │       │   ┌── 20
│   │       └── 9
└── 8
    │   ┌── 5
    └── 4
        └── 3
            └── 1
*/

newTree.deleteItem(1);
newTree.prettyPrint(newTree.root);
/*
│       ┌── 6345
│       │   └── 324
│   ┌── 67
│   │   └── 23
│   │       │   ┌── 20
│   │       └── 9
└── 8
    │   ┌── 5
    └── 4
        └── 3
*/

newTree.deleteItem(67);
newTree.prettyPrint(newTree.root);
/*
│       ┌── 6345
│   ┌── 324
│   │   └── 23
│   │       │   ┌── 20
│   │       └── 9
└── 8
    │   ┌── 5
    └── 4
        └── 3
*/

const foundNode4 = newTree.find(4);
newTree.prettyPrint(foundNode4);
/*
│   ┌── 5
└── 4
    └── 3
*/

const foundNode10 = newTree.find(10);
newTree.prettyPrint(foundNode10);
/*
10 not found.
*/

console.log("levelOrder aka Breadth-First level order:" + newTree.levelOrder());
/*
levelOrder aka Breadth-First level order:8,4,324,3,5,23,6345,9,20
*/

console.log(
  "levelOrderRecursive aka Breadth-First level order:" +
    newTree.levelOrderRecursive()
);
/*
levelOrderRecursive aka Breadth-First level order:8,4,324,3,5,23,6345,9,20
*/

console.log("inOrder:");
console.log(newTree.inOrder(newTree.root));
/*
inOrder:
[
     3,  4,  5,   8,
     9, 20, 23, 324,
  6345
]
*/

console.log("preOrder:");
console.log(newTree.preOrder(newTree.root));
/*
preOrder:
[
     8,  4, 3,  5,
   324, 23, 9, 20,
  6345
]
*/

console.log("postOrder:");
console.log(newTree.postOrder(newTree.root));
/*
postOrder:
[
  3,  5,    4,  20,
  9, 23, 6345, 324,
  8
]
*/

console.log("Height: " + newTree.height(newTree.root));
/*
Height: 4
*/

console.log("Depth: " + newTree.depth(newTree.root));
/*
Depth: 0
*/

console.log("Depth: " + newTree.depth(newTree.root.left));
/*
Depth: 1
*/

console.log("Depth: " + newTree.depth(newTree.root.right.right));
/*
Depth: 2
*/

console.log("isBalanced: " + newTree.isBalanced());
/*
isBalanced: false
*/

console.log("rebalance the Tree:");
newTree.rebalance(newTree.root);
console.log("isBalanced: " + newTree.isBalanced());
console.log("rebalanced Tree:");
newTree.prettyPrint(newTree.root);
/*
rebalance the Tree:
isBalanced: true
rebalanced Tree:
│       ┌── 6345
│   ┌── 324
│   │   └── 23
│   │       └── 20
└── 9
    │   ┌── 8
    └── 5
        └── 4
            └── 3
*/
