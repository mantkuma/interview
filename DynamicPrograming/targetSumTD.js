

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
let n= nums.length;
let hash = {}
    function tSum(arr, n, sum , target){
        if(hash[n+':'+sum]){
            console.log("return from hash");
            return hash[n+':'+sum]
        }
        if(sum===target && n===0){
            return 1;
        }
        if(n===0){
            return 0;
        }
        let s1 = tSum(arr, n-1, sum+arr[n-1], target) 
        hash[n-1+':'+sum+arr[n-1]] = s1
        let s2 =  tSum(arr, n-1, sum-arr[n-1], target)
        hash[n-1+':'+sum-arr[n-1]] = s2
        return s1+s2;
    }
    console.log(hash);
    return tSum(nums, n, 0, target)
};

console.log(findTargetSumWays([0,0,0,0,0,0,0,0,1], 1))












// // Function to find the number of ways to calculate
// // a target number using only array elements and
// // addition or subtraction operator.
// function findTotalWays(arr, i, s, target) {
//     // If target is reached, return 1
//     if (s === target && i === arr.length) {
//         return 1;
//     }
 
//     // If all elements are processed and
//     // target is not reached, return 0
//     if (i >= arr.length) {
//         return 0;
//     }
 
//     // Return total count of two cases:
//     // 1. Consider the current element and add it to the current sum target
//     // 2. Consider the current element and subtract it from the current sum.
//     return findTotalWays(arr, i + 1, s + arr[i], target)
//          + findTotalWays(arr, i + 1, s - arr[i], target);
// }
 
// // Driver Program
// const arr = [0,0,0,0,0,0,0,0,1];
 
// // target number
// const target = 1;
 
// console.log(findTotalWays(arr, 0, 0, target));