const { expect } = require('chai')
const isValid = require('./validParentheses')

describe('validParentheses', () => {
  it("should determine if the input string is valid", () => {
    expect(isValid("()")).to.be.true;
    expect(isValid("()[]{}")).to.be.true;
    expect(isValid("(]")).to.be.false;
  })
})
