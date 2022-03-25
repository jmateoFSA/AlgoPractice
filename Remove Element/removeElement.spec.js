const { expect } = require('chai')
const removeElement = require('./removeElement')

describe('Remove Element', () => {
  it("should modify the nums array to remove all occurrences of a given value", () => {
    expect(removeElement([3,2,2,3], 3)).to.equal(2);
  })
})
