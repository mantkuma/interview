/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l = 0;
  let r = height.length - 1;
  maxL = height[l];
  maxR = height[r];
  water = 0;
  while (l < r) {
    if (maxL < maxR) {
      l++;
      maxL = Math.max(maxL, height[l]);
      water = water + maxL - height[l];
    } else {
      r--;
      maxR = Math.max(maxR, height[r]);
      water = water + maxR - height[r];
    }
  }
  return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([5, 3, 2, 0, 4, 3, 6]));
