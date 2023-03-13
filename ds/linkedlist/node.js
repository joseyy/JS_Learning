class NodeLL {
  /**
   *
   * @param {*} value: Value of node which can be primitive data types or object
   * @param {*} next: Next node to link
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

module.exports = {
  NodeLL: NodeLL,
};
