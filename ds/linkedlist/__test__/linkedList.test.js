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

  it("Delete Midle Nodes", () => {
    const ll = new LinkedList();

    ll.append(1);
    ll.append(2);
    ll.append(3);
    let node = ll.delete(2);

    expect(node.value).to.be.equal(2);
    expect(ll.head.next.value).to.be.equal(3);

    ll.delete(3);
    expect(ll.tail.value).to.be.equal(1);
  });

  it("Delete Head and tail", () => {
    const ll = new LinkedList();

    ll.append(1);
    ll.append(2);
    ll.append(3);

    ll.delete(1);
    ll.delete(3);

    expect(ll.head.value).to.be.equal(2);
    expect(ll.tail.value).to.be.equal(2);
    expect(ll.head.next).to.be.equal(null);
  });

  it("Delete Value of One Node LinkedList", () => {
    const ll = new LinkedList();

    ll.append(1);
    ll.delete(1);

    expect(ll.head || ll.tail).to.be.equal(null);
  });

  it("Delete Empty Linked List", () => {
    const ll = new LinkedList();

    expect(ll.delete(1)).to.be.equal(null);
  });

  it("Delete Wrong Value", () => {
    const ll = new LinkedList();

    ll.append(1);
    ll.append(2);

    expect(ll.delete(3)).to.be.equal(null);
    expect(ll.head.value).to.be.equal(1);
    expect(ll.head.next.value === ll.tail.value).to.be.equal(true);
  });

  it("Delete Value at Tail with Two Linked List",()=>{
    const ll = new LinkedList();

    ll.append(0);
    ll.append(1);
    ll.delete(1);

    expect(ll.head.next).to.be.equal(null);
    expect(ll.head === ll.tail).to.be.equal(true);
  }); 

  it("Delete Tail of empty LinkedList", () => {
    const ll = new LinkedList();

    expect(ll.deleteTail()).to.be.equal(null);
  });

  it("Delete Tail of one Node LinkedList", () => {
    const ll = new LinkedList();

    ll.append(1);
    ll.deleteTail();
    expect(ll.head || ll.tail).to.be.equal(null);
  });

  it("Delete Tail of Multiple Nodes LinkedList", () => {
    const ll = new LinkedList();

    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.deleteTail();
    expect(ll.tail.value).to.be.equal(2);

    ll.deleteTail();
    expect(ll.head.next).to.be.equal(null);
  });

  it("Delete Tail of Two Nodes LinkedList", () => {
    const ll = new LinkedList();

    ll.append(1);
    ll.append(2);
    ll.deleteTail();
    expect(ll.tail.value).to.be.equal(1);
    expect(ll.tail.next || ll.head.next).to.be.equal(null);

  });

  it("Create Linked List from Array", ()=>{
    const ll = new LinkedList();

    ll.fromArray([1,2,3,4,5,6,7,8,9,10]);
    expect(ll.head.value).to.be.equal(1);
    expect(ll.tail.value).to.be.equal(10);
  });

  it("Test to Array", ()=>{
    const ll = new LinkedList();

    ll.fromArray([1,2,3,4,5,6,7,8,9,10]);
    let arr = ll.toArray();
    expect(arr[5]).to.be.equal(6);
    expect(arr[6]).to.be.equal(7);
    expect(arr[7]).to.be.equal(8);
    expect(arr[8]).to.be.equal(9);
    expect(arr[9]).to.be.equal(10);
    
  });

});

    
