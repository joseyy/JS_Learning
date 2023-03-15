const {expect} = require("chai");
const { Queue } = require("../queue");


describe("Queue Testing", ()=>{
    it("Enqueing", ()=>{
        const q = new Queue();

        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);

        expect(q.peak()).to.be.equal(1);
    });

    it("Dequeue", ()=>{
        const q = new Queue();

        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        q.dequeue();

        expect(q.peak()).to.be.equal(2);
    });

    it('Dequeue Empty list', ()=>{
        const q = new Queue();

        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        q.dequeue();
        q.dequeue();
        q.dequeue();

        expect(q.dequeue()).to.be.equal(null);
    });
});