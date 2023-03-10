class Comparator {
  /**
   *  Compatator:
   *    These interface is used as a way to handle different data types and objects
   *    instead of writing one interface for each different datatype
   *
   *  ex: LinkedList Node data can be number, string, objects etc. Therefore implementing
   *      a different linkedlist interface is time wasting
   */

  /**
   * @param: Function (a,b)
   * @return: compatator instance
   */
  constructor(comparatorFunction) {
    this.compare = comparatorFunction || Comparator.defaultComparator;
  }
  /**
   * Default comparator
   * @param {*} a
   * @param {*} b
   * @returns {number}
   */

  static defaultComparator(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }

  /**
   * a===b
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  equal(a, b) {
    return this.compare(a, b) === 0 ? true : false;
  }

  /**
   * a<b
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  lessThan(a, b) {
    return this.compare(a, b) === -1 ? true : false;
  }

  /**
   * a>b
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  greaterThan(a, b) {
    return this.compare(a, b) === 1 ? true : false;
  }

  /**
   * a<=b
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * a>=b
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }
}
module.exports = {
  Comparator: Comparator,
};
