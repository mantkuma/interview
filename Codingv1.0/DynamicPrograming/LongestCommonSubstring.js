//LongestCommonSubsequences

var DP = function () {
  var LCS = function (string1, string2, n, m, count) {
    if (n === 0 || m === 0) {
      return count;
    }
    if (string1[n - 1] === string2[m - 1]) {
      return LCS(string1, string2, n - 1, m - 1, count + 1);
    } else {
      return Math.max(
        count,
        Math.max(
          LCS(string1, string2, n - 1, m, 0),
          LCS(string1, string2, n, m - 1, 0)
        )
      );
    }
  };
  return LCS("abeggh", "abedgh", 6, 6, 0);
};

console.log(DP());
