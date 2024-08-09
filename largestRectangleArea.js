/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let max_area = 0;
  let index = 0;
  let stack = [];
  while (index < heights.length) {
    console.log("max_area =>", max_area);
    console.log("index ", index);
    console.log("stack ", stack);
    console.log("stack length ", stack.length);
    console.log("stack top", stack[stack.length - 1]);
    console.log("stacktop value ", heights[stack[stack.length - 1]]);
    console.log("height ", heights[index]);
    console.log("**********************************");
    if (
      stack.length === 0 ||
      heights[stack[stack.length - 1]] <= heights[index]
    ) {
      stack.push(index);
      index += 1;
    } else {
      console.log("inside pop");
      top_stack = stack.pop();

      console.log("index ", index);
      console.log("stack top ", stack[stack.length - 1]);
      let area =
        heights[top_stack] *
        (stack.length > 0 ? index - stack[stack.length - 1] - 1 : index);
      max_area = Math.max(max_area, area);
    }
  }
  // while (stack.length > 0) {
  //   top_stack = stack.pop();
  //   let area =
  //     heights[top_stack] *
  //     (stack.length > 0 ? index - stack[stack.length - 1] - 1 : index);
  //   max_area = Math.max(max_area, area);
  // }
  return max_area;
};

console.log(largestRectangleArea([6, 2, 5, 4, 5, 1, 6]));
console.log(largestRectangleArea([5, 6, 7, 4, 1]));
