// as a monotonic stack we store the previous min height index to get the index btween two height to calculate are

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let max_area = 0;
  let index = 0;
  let stack = [];
  while (index < heights.length) {
    if (
      stack.length === 0 ||
      heights[stack[stack.length - 1]] <= heights[index]
    ) {
      stack.push(index);
      index += 1;
    } else {
      top_stack = stack.pop();
      let area =
        heights[top_stack] *
        (stack.length > 0 ? index - stack[stack.length - 1] - 1 : index);
      max_area = Math.max(max_area, area);
    }
  }
  while (stack.length > 0) {
    top_stack = stack.pop();
    let area =
      heights[top_stack] *
      (stack.length > 0 ? index - stack[stack.length - 1] - 1 : index);
    max_area = Math.max(max_area, area);
  }
  return max_area;
};

let heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights));

// function max_area_histogram(histogram) {
//   let stack = [];
//   let max_area = 0;
//   let index = 0;
//   while (index < histogram.length) {
//     console.log("*******************************");
//     console.log(histogram[stack[stack.length - 1]]);
//     console.log(histogram[index]);
//     if (
//       stack.length == 0 ||
//       histogram[stack[stack.length - 1]] <= histogram[index]
//     ) {
//       stack.push(index);
//       index += 1;
//     } else {
//       let top_of_stack = stack.pop();
//       let area =
//         histogram[top_of_stack] *
//         (stack.length > 0 ? index - stack[stack.length - 1] - 1 : index);
//       max_area = Math.max(max_area, area);
//     }
//   }

//   while (stack.length > 0) {
//     let top_of_stack = stack.pop();
//     let area =
//       histogram[top_of_stack] *
//       (stack.length > 0 ? index - stack[stack.length - 1] - 1 : index);
//     max_area = Math.max(max_area, area);
//   }
//   return max_area;
// }

// // Driver Code
// let hist = [6, 2, 5, 4, 5, 1, 6];
// console.log(max_area_histogram(hist));
