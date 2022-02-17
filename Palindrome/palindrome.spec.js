const { expect } = require('chai')
const isPalindrome = require('./palindrome')

describe('isPalindrome', () => {
  it("should return true if the integer when reversed is the same or false if not", () => {
    expect(isPalindrome(121)).to.be.true;
    expect(isPalindrome(-121)).to.be.false;
    expect(isPalindrome(10)).to.be.false;
  })
})
