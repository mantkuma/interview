// let i = 0;
// let j = 0;
// console.log(++j);

function findduplicate(arr, n) {
  // return -1 because in these cases
  // there can not be any repeated element
  if (n <= 1) return -1;
  // initialize fast and slow
  let slow = arr[0];
  let fast = arr[arr[0]];
  // loop to enter in the cycle
  while (fast != slow) {
    // move one step for slow
    slow = arr[slow];
    // move two step for fast
    fast = arr[arr[fast]];
  }
  // loop to find entry
  // point of the cycle
  fast = 0;
  while (slow != fast) {
    slow = arr[slow];
    fast = arr[fast];
  }
  return slow;
}

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let n = arr.length;
console.log(findduplicate(arr, n));
