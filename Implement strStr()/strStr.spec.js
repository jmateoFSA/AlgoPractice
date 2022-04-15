const { expect } = require('chai')
const strStr = require('./strStr')

describe('Implement strStr()', () => {
  it("given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1", () => {
    expect(strStr("hello", "ll")).to.equal(2);
    expect(strStr("aaaaa", "bba")).to.equal(-1);
  })
})
