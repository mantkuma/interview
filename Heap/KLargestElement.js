/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let heap = [];
  for (let i = 0; i < nums.length; i++) {
    if (heap.length === 0) {
      heap.push(nums[i]);
    } else if (heap[heap.length - 1] <= nums[i]) {
      heap.unshift(nums[i]);
    } else {
      heap.push(nums[i]);
    }
    if (heap.length > k) {
      heap.pop();
    }
  }
  return heap[heap.length - 1];
};

//console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthLargest([-1, 2, 0], 2));

// -1 0 2
