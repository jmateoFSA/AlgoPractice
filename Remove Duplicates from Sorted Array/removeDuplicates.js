const removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i+1]) {
      nums.splice(i+1, 1)
      i = i - 1;
    }
  }
  return nums.length;
}

module.exports = removeDuplicates;
