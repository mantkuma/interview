/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const makeNum = (start, len) => {
  let val = start;
  while (--len) {
    start++;
    val = val * 10 + start;
  }
  return val;
};
var sequentialDigits = function(low, high) {
    const ret = [];
  for (let len = 2; len <= 9; ++len) {
    for (let pre = 1; pre <= 10 - len; ++pre) {
      const val = makeNum(pre, len);
      val <= high && val >= low && ret.push(val);
    }
  }
  return ret;
};

console.log(makeNum(1,4));
// console.log(sequentialDigits(100, 300))
// console.log(sequentialDigits(1000, 13000))
