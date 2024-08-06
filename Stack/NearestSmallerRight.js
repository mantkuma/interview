function NearestSmallerRight(arr) {
  let stack = [];
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      res.push(-1);
      stack.push(arr[i]);
    } else if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
      res.push(stack[stack.length - 1]);
      stack.push(arr[i]);
    } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
        stack.pop();
      }
      stack.length > 0 ? res.push(stack[stack.length - 1]) : res.push(-1);
      stack.push(arr[i]);
    }
  }
  return res.reverse();
}

//console.log(Nearestlargest([1, 3, 2, 4]));
console.log(NearestSmallerRight([4, 5, 2, 10, 8]));
console.log(NearestSmallerRight([1, 2, 1]));
