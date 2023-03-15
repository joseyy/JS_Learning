const { LinkedList } = require('../linkedlist/linkedList');

const hashTableSize = 1000;

class Hash {
  /**
   *
   * @param {*} size
   * @param {*} comparatorFunction
   */
  constructor(size = hashTableSize, comparatorFunction) {
    this.hashTableSize = size;
    this.bucketList = Array(this.hashTableSize).fill(
      new LinkedList(comparatorFunction)
    );

    this.key = {};
  }

  /**
   * 
   * @param {*} key 
   * @param {*} generator: Callback Function for other generator 
   * @returns 
   */
  hash(key,generator){
    const hashValue = generator || this.defaultGen;

    return hashValue(key);
  }
  
  /**
   * 
   * @param {*} key 
   * @returns 
   */
  defaultGen(key) {
    const hash = Array.from(key).reduce(
      (accumulator, keychar) => accumulator + keychar.charCodeAt(0),
      0
    );

    return hash !== null ? hash % this.bucketList : null;
  }

  
}

const arr = Array.from('jose').reduce((a, b) => a + b.charCodeAt(0), 0);

console.log(arr);
