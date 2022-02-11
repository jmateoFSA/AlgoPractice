/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

// Better solution

// const twoSum = function(nums, target) {
//   const comp = {};
//   for(let i=0; i<nums.length; i++){
//       if(comp[nums[i] ]>=0){
//           return [ comp[nums[i] ] , i]
//       }
//       comp[target-nums[i]] = i
//   }
// };
