const { expect } = require('chai')
const removeDuplicates = require('./removeDuplicates')

describe('Remove Duplicates from Sorted Array', () => {
  it("should modify the nums array to remove all duplicates", () => {
    expect(removeDuplicates([1,1,2])).to.equal(2);
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).to.equal(5);
  })
})
