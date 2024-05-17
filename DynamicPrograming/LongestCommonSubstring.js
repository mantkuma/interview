//LongestCommonSubsequences


var DP = function(){

    var LCS = function (string1, string2, n, m){
        if(n===0 || m===0){
            return 0;
        }
        if(string1[n-1]===string2[m-1]){
            return 1+LCS(string1, string2, n-1, m-1)
        }else{
            return 0;
        }
    }
    return LCS('abcdgh', 'abedfgr', 6, 6)
}

console.log(DP());