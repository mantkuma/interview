/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let heap = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(heap);
    if (heap.length === 0) {
      heap.push(arr[i]);
    } else if (Math.abs(heap[heap.length - 1] - x) <= Math.abs(arr[i] - x)) {
      heap.unshift(arr[i]);
    } else {
      heap.push(arr[i]);
    }
    if (heap.length > k) {
      heap.pop();
    }
  }
  return heap.sort((a, b) => a - b);
};

let arr = [1, 2, 3, 4, 5];
console.log(findClosestElements(arr, 4, 3)); // [1, 2, 3, 4 ]
