/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const hashBracket = { "(": ")", "{": "}", "[": "]" };
    const stack = [];
    for (let ele of s) {
      if (hashBracket[ele]) {
        stack.push(hashBracket[ele]);
      } else if (stack.length > 0 && stack[stack.length - 1] === ele) {
        stack.pop();
      } else {
        return false;
      }
    }
    return stack.length === 0;
  };

   console.log(isValid("[[[]"))