const Comparator = require("../comparator").Comparator;
const expect = require("chai").expect;

describe("Comparator", () => {
  it("should compare with default comparator function", () => {
    const comparator = new Comparator();

    expect(comparator.equal(0, 0)).to.be.equal(true);
    expect(comparator.lessThan(1, 4)).to.be.equal(true);
  });
});
