// /**
//  * @param {string} s
//  * @return {string}
//  */

// var longestPalindrome = function (s) {
//   var LCS = function (string1, string2, n, m) {
//     let t = [];
//     for (let i = 0; i < n + 1; i++) {
//       t[i] = [];
//       for (let j = 0; j < m + 1; j++) {
//         if (i === 0) t[i][j] = "";
//         if (j === 0) t[i][j] = "";
//       }
//     }
//     for (let i = 1; i < n + 1; i++) {
//       for (let j = 1; j < m + 1; j++) {
//         if (string1[i - 1] === string2[j - 1]) {
//           t[i][j] = string1[i - 1] + t[i - 1][j - 1];
//         } else {
//           t[i][j] = "";
//         }
//       }
//     }

//     let pallindromic = "";
//     for (let i = 1; i < n + 1; i++) {
//       for (let j = 1; j < m + 1; j++) {
//         let str = t[i][j];
//         if (str === str.split("").reverse().join("") && str.length > 0) {
//           pallindromic = pallindromic.length < str.length ? str : pallindromic;
//         }
//       }
//     }
//     return pallindromic;
//   };
//   return LCS(s, s.split("").reverse().join(""), s.length, s.length);
// };
// console.log(longestPalindrome("aacabdkacaa"));

var longestPalindrome = function (s) {
  if (!s || s.length < 1) return "";

  let start = 0,
    end = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i); // odd length
    const len2 = expandAroundCenter(i, i + 1); // even length
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};

console.log(longestPalindrome("aacabdkacaa"));
