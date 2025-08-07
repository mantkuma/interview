//LongestCommonSubsequences

var DP = function () {
  var LCS = function (string1, string2, n, m) {
    if (n === 0 || m === 0) {
      return "";
    }
    if (string1[n - 1] === string2[m - 1]) {
      return string1[n - 1] + LCS(string1, string2, n - 1, m - 1);
    } else {
      let str1 = LCS(string1, string2, n, m - 1);
      let str2 = LCS(string1, string2, n - 1, m);
      return str1.length > str2.length ? str1 : str2;
      // return "";
    }
  };
  return LCS("aacabdkacaa", "aacakdbacaa", 11, 11);
};

console.log(DP().split("").reverse().join("")); // Output: "abe"

// //LongestCommonSubsequences

// var DP = function () {
//   var LCS = function (string1, string2, n, m) {
//     if (n === 0 || m === 0) {
//       return 0;
//     }
//     if (string1[n - 1] === string2[m - 1]) {
//       return 1 + LCS(string1, string2, n - 1, m - 1);
//     } else {
//       return Math.max(
//         LCS(string1, string2, n, m - 1),
//         LCS(string1, string2, n - 1, m)
//       );
//     }
//   };
//   return LCS("abcde", "abe", 5, 3);
// };

// console.log(DP());
