/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1 =  [...nums1.slice(0,m), ...nums2.slice(0,n) ]
    nums1 = nums1.sort((a,b) => a - b)
    return nums1;
};


let data  =  merge(
    [1,2,3,0,0,0],
    3,
    [2,5,6],
    3,
    )
console.log(data);