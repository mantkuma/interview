function findDuplicate(arr) {
  // Find the intersection point of
  // the slow and fast.
  let slow = arr[0];
  let fast = arr[0];
  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow != fast);

  // Find the "entrance" to the cycle.
  let ptr1 = arr[0];
  let ptr2 = slow;
  while (ptr1 != ptr2) {
    ptr1 = arr[ptr1];
    ptr2 = arr[ptr2];
  }
  return ptr1;
}

let arr = [1, 3, 2, 1];
console.log(findDuplicate(arr));
