//LongestCommonSubsequences
let palindromic = "";
let plength = 0;
var DP = function () {
  var LCS = function (string1, string2, n, m) {
    let t = [];
    for (let i = 0; i < n + 1; i++) {
      t[i] = [];
      for (let j = 0; j < m + 1; j++) {
        if (i === 0) t[i][j] = "";
        if (j === 0) t[i][j] = "";
      }
    }
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < m + 1; j++) {
        if (string1[i - 1] === string2[j - 1]) {
          t[i][j] = string1[i - 1] + t[i - 1][j - 1];
          if (t[i][j] === t[i][j].split("").reverse().join("")) {
            palindromic = t[i][j];
            plength = palindromic.length;
          }
        } else {
          const str1 = t[i][j - 1];
          const str2 = t[i - 1][j];
          t[i][j] = str1.length > str2.length ? str1 : str2;
        }
      }
    }
    return t[n][m].split("").reverse().join("");
  };
  return LCS("abcagh", "abeagfr", 6, 6);
};

console.log(DP());
console.log(plength);
console.log(palindromic);

//LongestCommonSubsequences

// var DP = function(){

//     var LCS = function (string1, string2, n, m){
//      let t = [];
//         for(let i=0; i<n+1;i++)
//           {
//             t[i] = [];
//             for(let j=0;j<m+1;j++){
//                 if(i===0) t[i][j] = 0;
//                 if(j===0) t[i][j] = 0
//             }
//           }
//         for(let i=1;i<n+1;i++){
//             for(let j=1;j<m+1;j++){
//                 if(string1[i-1]=== string2[j-1]){
//                     t[i][j] = 1+t[i-1][j-1]
//                 }else{
//                     t[i][j] = Math.max(t[i][j-1], t[i-1][j])
//                 }
//             }
//         }
//         return t[n][m]

//     }
//     return LCS('abcdgh', 'abedgfr', 6, 6)
// }

// console.log(DP());
