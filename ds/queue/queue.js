const { LinkedList } = require('../linkedlist/linkedList');
const linkedList = require('../linkedlist/linkedList');

class Queue {
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
  enqueue(value) {
    return this.ll.append(value);
  }
  /**
   *
   * @returns deleted node value;
   */
  dequeue() {
    const removeHead = this.ll.deleteHead();
    return removeHead ? removeHead.value : null;
  }

  /**
   *
   * @returns True if empty
   */
  isEmpty() {
    if (!this.ll.head) {
      return true;
    }
    return false;
  }

  /**
   * 
   * @returns First Value
   */
  peak() {
    return this.isEmpty() ? null : this.ll.head.value;
  }
}
