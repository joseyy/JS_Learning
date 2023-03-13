'use stric';

const { Comparator } = require('../../util/comparator/comparator');
const { NodeLL } = require('./node');

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
      console.log('Index Overflow: Append Value');
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
    let deleteNode = this.head;
    let prevNode = this.head;
    // Case 1 Empty LL
    if (!this.head) {
      return null;
    }
    // Case 2 LL one node
    if (this.head === this.tail) {
      if (this.compare.equal(this.head.value, value)) {
        this.head = null;
        this.tail = null;
        return deleteNode;
      }
      return null;
    }
    // Case 3 value in head
    if (this.compare.equal(this.head.value, value)) {
      this.head = this.head.next;
      return deleteNode;
    }
    // Case 2: Value in the middle
    while (deleteNode) {
      if (this.compare.equal(deleteNode.value, value)) {
        // Case 3: Value in tail
        if (deleteNode === this.tail) {
          prevNode.next = null;
          this.tail = prevNode;
          return deleteNode;
        }
        // Value not in tail
        prevNode.next = deleteNode.next;
        return deleteNode;
      }
      prevNode = deleteNode;
      deleteNode = deleteNode.next;
    }

    return null;
  }

  /**
   *
   * @returns: deleted node or null
   */
  deleteTail() {
    let current = this.head;

    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return current;
    }

    while (current.next !== this.tail) {
      current = current.next;
    }

    // If there are only two nodes make tail = head
    if (current === this.head) {
      this.head.next = null;
      this.tail = this.head;
      return current;
    }

    current.next = null;
    this.tail = current;
    return this;
  }
  /**
   *
   * @returns deleted head or null if theres no nodes
   */
  deleteHead() {
    let deletedHead = this.head;
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedHead;
    }

    this.head = this.head.next;
    return deletedHead;
  }
  /**
   *
   * @param {*} callback
   * @return string of each node value and null if it is empty
   */
  toString(callback) {
    return this.toArray().map((node) => node.toString(callback));
  }

  fromArray(arrValue) {
    arrValue.forEach((element) => this.append(element));

    return this;
  }

  toArray() {
    let nodes = [];

    let current = this.head;
    while (current) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

module.exports = {
  LinkedList: LinkedList,
};

const ll = new LinkedList();

ll.fromArray([1, 2, 3, 4]);
console.log(ll.toString());
