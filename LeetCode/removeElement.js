/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let nums2 = [...nums]
    nums.length=0
    for(let i=0;i<nums2.length;i++){
        if(nums2[i] !== val){
            nums.push(nums2[i])
        }
    }
    return nums
};


let data  =  removeElement(
    [3,2,2,3],
    3,
    )
console.log(data);