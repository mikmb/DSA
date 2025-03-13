class Node {
  constructor() {
    this.key = null;
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // prepend(key, value) adds a new node containing value to the start of the list
  prepend(key, value) {
    const newNode = new Node();
    newNode.key = key;
    newNode.value = value;

    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;

    return this.head;
  }

  // remove(key) that removes the node with key.
  remove(key) {
    if (!this.head) return;
    if (this.head.key === key) {
      this.head = this.head.nextNode;
      this.size--;
      return true;
    }

    let currentNode = this.head;
    while (currentNode.nextNode) {
      if (currentNode.nextNode.key === key) {
        currentNode.nextNode = currentNode.nextNode.nextNode;
        this.size--;
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  //   find(key) finds node with key. if it doesn't exist, return undefined, else return value
  find(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.nextNode;
    }
    return undefined;
  }

  //   update(key, value) updates the existing node with key with the new value
  update(key, value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.key === key) {
        currentNode.value = value;
        return;
      }
      currentNode = currentNode.nextNode;
    }
  }
}

class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(capacity).fill(null);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  //   set(key, value) takes two arguments: the first is a key, and the second is a value that is assigned to this key.

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }

    const list = this.buckets[index];
    if (list.find(key) !== undefined) {
      list.update(key, value);
    } else {
      list.prepend(key, value);
      this.size++;
    }

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
      //   console.log("resize");
    }
  }

  //   get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  get(key) {
    const index = this.hash(key);
    const list = this.buckets[index];
    return list ? list.find(key) : null;
  }

  //   has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

  has(key) {
    const index = this.hash(key);
    const list = this.buckets[index];
    if (list && list.head === null) {
      return false;
    } else {
      let currentNode = list.head;
      while (currentNode) {
        if (currentNode.key === key) {
          return true;
        }
      }
    }

    return false;
  }

  //   remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
  remove(key) {
    const index = this.hash(key);
    const list = this.buckets[index];
    if (list) {
      const res = list.remove(key);
      if (res) {
        list.size--;
        if (list.size === 0) {
          this.buckets[index] = null;
        }
        return true;
      } else {
        return false;
      }
    }
  }

  //   length() returns the number of stored keys in the hash map.
  length() {
    let len = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        let currentNode = this.buckets[i].head;
        while (currentNode) {
          len++;
          currentNode = currentNode.nextNode;
        }
      }
    }
    return len;
  }

  //   getCapacity() returns the capacity of the hashmap
  getCapacity() {
    return this.capacity;
  }

  //   clear() removes all entries in the hash map.
  clear() {
    this.buckets = new Array(this.capacity).fill(null);
  }

  //   keys() returns an array containing all the keys inside the hash map.
  keys() {
    // console.log(this.buckets);
    let res = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i] && this.buckets[i].head) {
        let currentNode = new Node();
        currentNode = this.buckets[i].head;
        while (currentNode) {
          res.push(currentNode.key);
          currentNode = currentNode.newNode;
        }
      }
    }
    return res;
  }

  //   values() returns an array containing all the values.
  values() {
    let res = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i] && this.buckets[i].head) {
        let currentNode = this.buckets[i].head;
        while (currentNode) {
          res.push(currentNode.value);
          currentNode = currentNode.newNode;
        }
      }
    }
    return res;
  }

  //   entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
  entries() {
    let res = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i] && this.buckets[i].head) {
        let currentNode = this.buckets[i].head;
        while (currentNode) {
          let keyValuePair = [];
          keyValuePair.push(currentNode.key);
          keyValuePair.push(currentNode.value);
          res.push(keyValuePair);
          currentNode = currentNode.nextNode;
        }
      }
    }
    return res;
  }

  //   resize() resize the hashmap
  resize() {
    const oldCapacity = this.capacity;
    const oldBuckets = this.buckets;
    this.size = 0;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null);

    for (let i = 0; i < oldCapacity; i++) {
      let list = oldBuckets[i];
      while (list && list.head) {
        this.set(list.head.key, list.head.value);
        list.head = list.head.nextNode;
        this.size++;
      }
    }
  }
}

module.exports = HashMap;
