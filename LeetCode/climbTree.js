/**
 * @param {number} n
 * @return {number}
 */
let hash = {};
var climbStairs = function(n) {
    if(hash[n]){
        return hash[n]
    }
    if(n===0 || n===1){
        return 1;
    }
    if(n>1){
     let data  =  climbStairs(n-1) + climbStairs(n-2)
     hash[n] = data;
     return data;
    }
   
};


console.log(climbStairs(5))