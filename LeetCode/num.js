
var removeDuplicates = function(nums) {
    const s2 = new Set(nums);
    nums = Array.from(s2);
    return nums
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
