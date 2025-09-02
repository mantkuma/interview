/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let lastindex = {};
  for (let i = 0; i < s.length; i++) {
    lastindex[s[i]] = i;
  }
  let stack = [];
  let visited = new Set();
  for (let i = 0; i < s.length; i++) {
    if (visited.has(s[i])) continue;
    while (
      stack.length > 0 &&
      lastindex[stack[stack.length - 1]] > i &&
      stack[stack.length - 1] > s[i]
    ) {
      visited.delete(stack.pop());
    }
    stack.push(s[i]);
    visited.add(s[i]);
  }
  return stack.join("");
};

let str = "bcacb";
console.log(removeDuplicateLetters(str));
