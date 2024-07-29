/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var threeSum = function (height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    if (height[l] > height[r]) {
      let currVol = height[r] * (r - l);
      if (max < currVol) {
        max = currVol;
      }
      r--;
    } else {
      let currVol = height[l] * (r - l);
      if (max < currVol) {
        max = currVol;
      }
      l++;
    }
  }
  return max;
};

//console.log(threeSum([1,8,6,2,5,4,8,3,7]))

console.log(threeSum([4, 2, 0, 3, 2, 5]));
