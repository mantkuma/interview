/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const s2 = new Set(nums);
    let n = Array.from(s2);
    console.log(n)
    return n
};

console.log([0,0,1,1,1,2,2,3,3,4])