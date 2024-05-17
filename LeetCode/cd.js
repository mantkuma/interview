/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let item = new Set(nums)
    if(item.size < nums.length)
        return true
    else 
        return false
};