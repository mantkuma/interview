/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let hash = {};
  nums2.forEach((ele, index) => {
    hash[ele] = index;
  });
  let res = [];
  for (n = nums2.length - 1; n >= 0; n--) {
    if (stack.length === 0) {
      stack.push(nums2[n]);
      res.push(-1);
    } else {
      while (stack[stack.length - 1] <= nums2[n]) {
        stack.pop();
      }
      if (stack.length === 0) {
        res.push(-1);
      } else {
        res.push(stack[stack.length - 1]);
      }
      stack.push(nums2[n]);
    }
  }
  res = res.reverse();
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    result.push(res[hash[nums1[i]]]);
  }
  return result;
};

// const num1 = [4, 1, 2];
// const num2 = [1, 3, 4, 2];

const num1 = [1, 3, 5, 2, 4];
const num2 = [6, 5, 4, 3, 2, 1, 7];
console.log(nextGreaterElement(num1, num2));

// var nextGreaterElement = function (nums1, nums2) {
//   let stack = [];
//   let hash = {};
//   nums2.forEach((ele, index) => {
//     hash[ele] = index;
//   });
//   let res = [];
//   for (n = nums2.length - 1; n >= 0; n--) {
//     console.log(nums2[n]);
//     if (stack.length === 0) {
//       stack.push(nums2[n]);
//       res.push(-1);
//     } else {
//       while (stack[stack.length - 1] <= nums2[n]) {
//         stack.pop();
//       }
//       if (stack.length === 0) {
//         res.push(-1);
//       } else {
//         res.push(stack[stack.length - 1]);
//       }
//       stack.push(nums2[n]);
//     }
//   }
//   res = res.reverse();
//   return num1.reduce((acc, ele) => {
//     acc.push(res[hash[ele]]);
//     return acc;
//   }, []);
// };
