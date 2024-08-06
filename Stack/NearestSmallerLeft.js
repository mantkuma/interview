function NearestSmallerLeft(arr) {
  let stack = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      res.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
      res.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
        stack.pop();
      }
      stack.length > 0 ? res.push(stack[stack.length - 1]) : res.push(-1);
    }
    stack.push(arr[i]);
  }
  return res;
}

console.log(NearestSmallerLeft([4, 5, 2, 10, 8]));
// console.log(NearestlargestLeft([1, 2, 1]));
// console.log(NearestlargestLeft([2, 6, 4, 1, 5, 9]));
