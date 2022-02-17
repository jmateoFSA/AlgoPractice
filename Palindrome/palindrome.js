/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let num = parseFloat(x.toString().split('').reverse().join(''))
  if (num == x) return true
  else return false
};

module.exports = isPalindrome
