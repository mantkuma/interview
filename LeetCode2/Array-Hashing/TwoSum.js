// https://leetcode.com/problems/two-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = (target - nums[i]).toString();
    if (hash[diff] || hash[diff] === 0) {
      return [hash[diff], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
