const { expect } = require("chai");
const { LinkedList } = require("../linkedList");

describe("Test LL", () => {
  it("Check Linked List initialization", () => {
    const ll = new LinkedList();
    expect(ll.head).to.be.equal(null);
  });
  it("Append multiple nodes", () => {
    const ll = new LinkedList();
    ll.append(1);
    expect(ll.head.value).to.be.equal(1);
    expect(ll.tail.value).to.be.equal(1);

    ll.append(2);
    ll.append(3);

    expect(ll.head.value).to.be.equal(1);
    expect(ll.tail.value).to.be.equal(3);
    expect(ll.head.next.value).to.be.equal(2);
  });
  it("Preappend multiple nodes", () => {
    const ll = new LinkedList();
    ll.preAppend(1);
    ll.preAppend(2);
    ll.preAppend(3);

    expect(ll.head.value).to.be.equal(3);
    expect(ll.tail.value).to.be.equal(1);
  });
  it("Insert at index", () => {
    const ll = new LinkedList();
    ll.insert(0, 0);
    expect(ll.head.value).to.be.equal(0);
    ll.insert(1, 1);
    expect(ll.head.next.value).to.be.equal(1);
    expect(ll.tail.value).to.be.equal(1);
  });
});
