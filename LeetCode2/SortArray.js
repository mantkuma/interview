/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let copy_index = 0;
  let paste_index = 0;
  let k = 0;
  while (copy_index < nums.length) {
    if (paste_index > 0 && nums[copy_index] === nums[paste_index - 1]) {
      copy_index++;
    } else {
      nums[paste_index] = nums[copy_index];
      paste_index++;
      k++;
    }
  }
  console.log(nums);
  return k;
};
