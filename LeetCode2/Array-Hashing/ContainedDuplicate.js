//https://leetcode.com/problems/contains-duplicate/description/
let nums = [1, 2, 3, 1];
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hash = {};
  for (item of nums) {
    if (hash[item]) {
      return true;
    } else {
      hash[item] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate(nums));

///
// var containsDuplicate = function (nums) {
//   let item = new Set(nums);
//   if (item.size < nums.length) return true;
//   else return false;
// };
