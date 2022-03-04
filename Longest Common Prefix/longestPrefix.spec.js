const { expect } = require('chai')
const longestCommonPrefix = require('./longestPrefix')

describe('longestPrefix', () => {
  it("should return the longest common prefix from an array of strings", () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).to.equal("fl");
    expect(longestCommonPrefix(["dog","racecar","car"])).to.equal("");
  })
})
