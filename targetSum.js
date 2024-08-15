let sum = 9;
let res = [];
let arr = [3, 34, 4, 12, 5, 2];
function getSum(n, arr, target, res) {
  if (target === 0) {
    console.log(res);
    return "completed";
  }
  if (n === arr.length || res.length > 3) {
    return "completed";
  }

  getSum(n + 1, arr, target - arr[n], [...res, arr[n]]);
  getSum(n + 1, arr, target, res);
}
getSum(0, arr, 9, []);
