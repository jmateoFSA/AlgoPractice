const { expect } = require('chai')
const isPalindrome = require('./palindrome')

console.log(isPalindrome(1215))

describe('isPalindrome', () => {
  it("should return true if the integer when reversed is the same or false if not", () => {
    expect(isPalindrome(121)).to.be.true
  })
})
