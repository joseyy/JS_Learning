const { expect } = require("chai");
const { NodeLL } = require("../node");

describe("Testing Multiple Linked List Nodes", () => {
  it("Create node and check value and next", () => {
    const node1 = new NodeLL(5);
    expect(node1.value).to.be.equal(5);
    expect(node1.next).to.be.equal(null);
  });
  it("Create two nodes and linked them", () => {
    const node1 = new NodeLL(5);
    const node2 = new NodeLL(6, node1);
    expect(node2.next.value).to.be.equal(5);
  });
});
