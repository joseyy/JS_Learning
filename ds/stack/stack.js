const { LinkedList } = require('../linkedlist/linkedList');

class Stack {
    /**
     * 
     * @param {*} comparatorFunction 
     */
  constructor(comparatorFunction) {
    this.ll = new LinkedList(comparatorFunction);
  }

  /**
   * 
   * @param {*} value 
   */
  push(value) {
    this.ll.preAppend(value);
  }

  /**
   * 
   * @returns Value
   */
  pop() {
    return this.ll.head ? this.ll.deleteHead().value : null;
  }
}
