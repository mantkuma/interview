//LongestCommonSubsequences


var DP = function(){

    var LCS = function (string1, string2, n, m){
     let t = [];
        for(let i=0; i<n+1;i++)
          {
            t[i] = [];
            for(let j=0;j<m+1;j++){
                if(i===0) t[i][j] = 0;
                if(j===0) t[i][j] = 0
            }
          }
        for(let i=1;i<n+1;i++){
            for(let j=1;j<m+1;j++){
                if(string1[i-1]=== string2[j-1]){
                    t[i][j] = 1+t[i-1][j-1]
                }else{
                    t[i][j] = Math.max(t[i][j-1], t[i-1][j])
                }
            }
        }
        return t[n][m]

    }
    return LCS('abcdgh', 'abedgfr', 6, 6)
}

console.log(DP());