function NearestSmallerLeftIndex(arr) {
  let stack = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      res.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1].height < arr[i]) {
      res.push(stack[stack.length - 1].index);
    } else if (stack.length > 0 && stack[stack.length - 1].height > arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1].height > arr[i]) {
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

console.log(NearestSmallerLeftIndex([4, 5, 2, 10, 8]));
console.log(NearestSmallerLeftIndex([6, 2, 5, 4, 5, 1, 6]));
// console.log(NearestlargestLeft([2, 6, 4, 1, 5, 9]));
