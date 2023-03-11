"use stric";

const { Comparator } = require("../../util/comparator/comparator");
const { NodeLL } = require("./node");

class LinkedList {
  /**
   *
   * @param {*} comparatorFunction: Comparator function for different data types
   */
  constructor(comparatorFunction = null) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  /**
   *
   * @param {*} value
   * @returns {LinkedList}
   */
  append(value) {
    const pNode = new NodeLL(value);
    if (!this.head) {
      this.head = pNode;
      this.tail = pNode;
      return this;
    }
    this.tail.next = pNode;
    this.tail = pNode;
    return this;
  }
  /**
   *
   * @param {*} value
   * @returns {LinkedList}
   */
  preAppend(value) {
    const pNode = new NodeLL(value);
    if (!this.head) {
      this.head = pNode;
      this.tail = pNode;
      return this;
    }

    pNode.next = this.head;
    this.head = pNode;
    return this;
  }
  /**
   *
   * @param {*} value
   * @param {*} index
   * @returns {LinkedList}
   */
  insert(value, index) {
    let count = 0;
    if (index === 0) {
      this.preAppend(value);
      return this;
    }
    count += 1;
    let current = this.head.next;
    let previous = this.head;

    /**
     * Special case when there is only one node in the linkedlist
     */
    if (this.tail === this.head) {
      this.append(value);
    }

    while (current !== this.tail) {
      if (count === index) {
        previous.next = new NodeLL(value, current);
        break;
      }
      previous = current;
      current = current.next;
      count += 1;
    }
    if (count < index) {
      console.log("Index Overflow: Append Value");
      this.append(value);
    }
    return this;
  }
  /**
   *
   * @param {*} value
   * @return {LinkedList}
   */
  delete(value) {
    // Case 0: LinkedList is empty or has one node
    if (this.head === this.tail) {
      if (this.head.value === value) {
      }
      return this;
    }
    // Case 1: Value in head
    // Case 2: Value in the middle
    // Case 3: Value at tail
  }
}

module.exports = {
  LinkedList: LinkedList,
};
