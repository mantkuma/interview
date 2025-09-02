/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (num.length <= k) {
    return "0";
  }
  let stack = [];
  for (let i = 0; i < num.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > num[i] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  // Remove remaining k digits from the end if k > 0
  stack = stack.slice(0, stack.length - k);

  // Remove leading zeros
  let result = stack.join("").replace(/^0+/, "");

  return result === "" ? "0" : result;
};
console.log(removeKdigits("112", 1));
