function NearestSmallestRightIndex(arr) {
  let stack = [];
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      res.push(arr.length);
    } else if (stack.length > 0 && stack[stack.length - 1].height < arr[i]) {
      res.push(stack[stack.length - 1].index);
    } else if (stack.length > 0 && stack[stack.length - 1].height >= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1].height >= arr[i]) {
        stack.pop();
      }
      stack.length > 0
        ? res.push(stack[stack.length - 1].index)
        : res.push(arr.length);
    }
    stack.push({
      height: arr[i],
      index: i,
    });
  }
  return res.reverse();
}
function NearestSmallerLeftIndex(arr) {
  let stack = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      res.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1].height < arr[i]) {
      res.push(stack[stack.length - 1].index);
    } else if (stack.length > 0 && stack[stack.length - 1].height >= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1].height >= arr[i]) {
        stack.pop();
      }
      stack.length > 0 ? res.push(stack[stack.length - 1].index) : res.push(-1);
    }
    stack.push({
      height: arr[i],
      index: i,
    });
  }
  return res;
}

const largestRectangleArea = (heights) => {
  let max_area = 0;
  let nsr = NearestSmallestRightIndex(heights);
  let nsl = NearestSmallerLeftIndex(heights);
  for (let i = 0; i < heights.length; i++) {
    let area = (nsr[i] - nsl[i] - 1) * heights[i];
    max_area = Math.max(area, max_area);
  }
  return max_area;
};
console.log(largestRectangleArea([0, 0]));
// console.log(area([2, 1, 5, 6, 2, 3]));
// console.log(area([6, 2, 5, 4, 5, 1, 6]));
