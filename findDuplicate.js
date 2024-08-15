function findduplicate(a, n) {
  let i = 0,
    j = 0;
  while (i < n) {
    if (a[i] == a[++j]) return a[j];
    if (j == n - 1) {
      i++;
      j = i;
    }
  }
  return -1;
}

let arr = [1, 2, 4, 3, 4, 5, 6, 3];
let n = arr.length;
console.log(findduplicate(arr, n));
