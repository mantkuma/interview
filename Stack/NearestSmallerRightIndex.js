function NearestSmallerRight(arr) {
  let stack = [];
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      res.push(arr.length);
    } else if (stack.length > 0 && stack[stack.length - 1].height < arr[i]) {
      res.push(stack[stack.length - 1].index);
    } else if (stack.length > 0 && stack[stack.length - 1].height > arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1].height > arr[i]) {
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
console.log(NearestSmallerRight([6, 2, 5, 4, 5, 1, 6]));
console.log(NearestSmallerRight([4, 5, 2, 10, 8]));
console.log(NearestSmallerRight([1, 2, 1]));
