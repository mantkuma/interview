function StockSpan(arr) {
  let stack = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      res.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1].item > arr[i]) {
      res.push(stack[stack.length - 1].index);
    } else if (stack.length > 0 && stack[stack.length - 1].item < arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1].item < arr[i]) {
        stack.pop();
      }
      stack.length > 0 ? res.push(stack[stack.length - 1].index) : res.push(-1);
    }
    stack.push({ item: arr[i], index: i });
  }
  for (let i = 0; i < res.length; i++) {
    res[i] = i - res[i];
  }
  return res;
}

console.log(StockSpan([100, 80, 60, 70, 60, 75, 85]));
// console.log(NearestlargestLeft([1, 2, 1]));
// console.log(NearestlargestLeft([2, 6, 4, 1, 5, 9]));

// function StockSpan(arr) {
//   let stack = [];
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (stack.length === 0) {
//       res.push(1);
//     } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
//       res.push(1);
//     } else if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
//       let count = 1;
//       let stack_count = stack.length - 1;
//       while (stack.length > 0 && stack[stack_count] <= arr[i]) {
//         count = count + 1;
//         stack_count = stack_count - 1;
//       }
//       res.push(count);
//     }
//     stack.push(arr[i]);
//   }
//   return res;
// }
