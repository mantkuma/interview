// leetcode.com/problems/product-of-array-except-self/  prefix sum
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  let left = [1];
  let right = [1];
  for (let i = 1; i < nums.length; i++) {
    left.push(nums[i - 1] * left[i - 1]);
  }
  for (let j = nums.length - 2; j >= 0; j--) {
    right = [right[0] * nums[j + 1], ...right];
  }
  for (let i = 0; i < right.length; i++) {
    right[i] = right[i] * left[i];
  }
  return right;
};

console.log(productExceptSelf([1, 2, 3, 4]));

// var productExceptSelf = function (nums) {
//   let isSingleZero = false;
//   let isMultiZero = false;
//   let isallZero = true;
//   let multiZeroarr = [];
//   let product = nums.reduce((acc, ele) => {
//     multiZeroarr.push(0);
//     if (ele != 0) {
//       isallZero = false;
//       acc = acc * ele;
//     } else {
//       if (isSingleZero === false) {
//         isSingleZero = true;
//       } else {
//         isMultiZero = true;
//       }
//     }
//     return acc;
//   }, 1);
//   if (isallZero) {
//     return nums;
//   } else if (isMultiZero) {
//     return multiZeroarr;
//   }
//   nums = nums.reduce((acc, ele) => {
//     if (isSingleZero) {
//       if (ele != 0) {
//         acc.push(0);
//       } else {
//         acc.push(product);
//       }
//     } else {
//       acc.push(product / ele);
//     }
//     return acc;
//   }, []);
//   return nums;
// };
