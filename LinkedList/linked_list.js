class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // append(value) adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node();
    newNode.value = value;
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }

    this.size++;
  }

  // prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node();
    newNode.value = value;

    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  // size returns the total number of nodes in the list
  getSize() {
    return this.size;
  }

  // head returns the first node in the list
  getHead() {
    return this.head;
  }

  // tail returns the last node in the list
  getTail() {
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // at(index) returns the node at the given index
  getAt(index) {
    let currentNode = this.head;
    if (index < 0 || index > this.size) {
      return "Index out of bound";
    }
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // pop removes the last element from the list
  pop() {
    let currentNode = this.head;

    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
    this.size--;
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  // find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let currentNode = this.head;
    let resultString = "";
    while (currentNode) {
      resultString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    resultString = resultString + null;
    return resultString;
  }

  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return "Index out of bound.";
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }
    let currentNode = this.head;
    const newNode = new Node();
    newNode.value = value;
    let previousNode = null;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    newNode.nextNode = currentNode;
    previousNode.nextNode = newNode;
    this.size++;
  }

  // removeAt(index) that removes the node at the given index.
  removeAt(index) {
    if (index < 0 || index > this.size) {
      return "Index out of bound.";
    }
    if (index === 0) {
      this.head = this.head.nextNode;
    } else {
      let currentNode = this.head;
      let previousNode = null;
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }
      previousNode.nextNode = currentNode.nextNode;
      this.size--;
    }
  }
}

module.exports = LinkedList;
