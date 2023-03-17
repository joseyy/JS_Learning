const { LinkedList } = require('../linkedlist/linkedList');

const hashTableSize = 1000;

class Hash {
  /**
   *
   * @param {*} size
   * @param {*} comparatorFunction
   */
  constructor(size = hashTableSize, comparatorFunction, generator) {
    this.size = size;
    this.bucketList = Array(this.size)
      .fill(null)
      .map(() => new LinkedList(comparatorFunction));
    this.generator = generator || this.defaultGen;
    this.key = {};
  }

  /**
   *
   * @param {*} key
   * @returns
   */
  hashGen(key) {
    return this.generator(key);
  }

  /**
   * Adds all Char Ascii value of the key to generate an hashIndex
   * @param {*} key
   * @returns
   */
  defaultGen(key) {
    const hash = Array.from(key).reduce(
      (accumulator, keychar) => accumulator + keychar.charCodeAt(0),
      0
    );

    return hash % this.size;
  }

  /**
   *
   * @param {*} key
   * @param {*} value
   */
  insert(key, value) {
    const hashIndex = this.hashGen(key);

    this.key[key] = hashIndex;
    const node = this.bucketList[hashIndex].find({
      callback: (nValue) => nValue.key === key,
    });
    if (!node) {
      this.bucketList[hashIndex].append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  /**
   *
   * @param {*} key
   */
  get(key) {
    const hashIndex = this.key[key];
    if (!hashIndex) {
      return undefined;
    }
    const node = this.bucketList[hashIndex].find({
      callback: (nodeValue) => nodeValue.key === key,
    });
    return node ? node.value.value : undefined;
  }

  delete(key) {
    const hashIndex = this.key[key];
    if (!hashIndex) {
      return undefined;
    }
    const ll = this.bucketList[hashIndex];
    const node = ll.find({ callback: (value) => value.key === key });
    return ll.delete(node.value);
  }
}

const a = new Hash(
  (size = 10),
  (comparatorFunction = (a, b) => {
    if (a.key === b.key) {
      return 0;
    }
    return a.key < b.key ? -1 : 1;
  })
);

a.insert('Key', 'hello');
a.insert('H', 123);
a.insert('E', 345);
a.insert('Y', 'jsjs');
a.insert('K', 1234);

console.log(a.get('Key'));
console.log(a.get('H'));
console.log(a.get('E'));
a.delete('E');
console.log(a.get('E'));
