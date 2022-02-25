const { expect } = require('chai')
const romanToInt = require('./romanToInt')

describe('Roman to Int', () => {
  it("should convert a Roman numeral to an integer", () => {
    expect(romanToInt("III")).to.equal(3);
    expect(romanToInt("LVIII")).to.equal(58);
    expect(romanToInt("MCMXCIV")).to.equal(1994);
  })
})
