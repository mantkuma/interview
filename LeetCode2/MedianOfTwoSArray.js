/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  res = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      res.push(nums2[j]);
      j = j + 1;
    } else {
      res.push(nums1[i]);
      i = i + 1;
    }
  }
  if (i < nums1.length) {
    res = [...res, ...nums1.splice(i, nums1.length)];
  } else {
    res = [...res, ...nums2.splice(j, nums2.length)];
  }
  if (res.length % 2 === 0) {
    let n = res.length / 2;
    let sum = res[n - 1] + res[n];
    return sum / 2;
  } else {
    let n = Math.ceil(res.length / 2);
    return res[n - 1];
  }
};

//console.log(findMedianSortedArrays([1, 2, 5, 9], [3, 6, 8, 10, 11]));
console.log(findMedianSortedArrays([3], [-2, -1]));
//console.log(findMedianSortedArrays([], [1]));

// console.log(Math.ceil(9 / 2));
// console.log(Math.floor(8 / 2));
