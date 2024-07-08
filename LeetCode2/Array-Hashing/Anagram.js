// https://leetcode.com/problems/valid-anagram/description/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("")
    ? true
    : false;
};

console.log(isAnagram("mantosh", "hsotnam"));
