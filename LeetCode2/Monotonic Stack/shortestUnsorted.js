/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < nums.length - 1 && nums[left] <= nums[left + 1]) {
    left++;
  }
  if (left === nums.length - 1) return 0;
  while (nums[right] >= nums[right - 1]) {
    right--;
  }
  let subMin = Infinity;
  let subMax = -Infinity;
  for (let i = left; i <= right; i++) {
    subMin = Math.min(subMin, nums[i]);
    subMax = Math.max(subMax, nums[i]);
  }
  while (left > 0 && nums[left - 1] > subMin) {
    left--;
  }
  while (right < nums.length - 1 && nums[right + 1] < subMax) {
    right++;
  }
  return right - left + 1;
};

console.log(findUnsortedSubarray([1, 3, 2, 2, 2]));
console.log(findUnsortedSubarray([1, 3, 2, 4, 9, 7]));
