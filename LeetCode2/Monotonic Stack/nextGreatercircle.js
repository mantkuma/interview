/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let len = nums.length;
  let res = new Array(len).fill(-1);
  let stack = [];
  // one complete cycle
  for (let i = 0; i < 2 * len; i++) {
    let num = nums[i % len];
    while (stack.length && nums[stack[stack.length - 1]] < num) {
      let idx = stack.pop();
      res[idx] = num;
    }
    if (i < len) stack.push(i);
  }

  return res;
};

console.log(nextGreaterElements([1, 2, 3, 4, 3]));
