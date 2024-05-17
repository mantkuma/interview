/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let res = []
    if(nums.length < 2){
        return nums[0]
    }
    res.push(nums[0]);
    res.push(Math.max(nums[1] , nums[2]));
    for(let i=2;i<nums.length;i++){
        res[i] = Math.max(res[i-2]+ nums[i], res[i-1])
    }
    return res[res.length-1];
   
};
console.log(rob([2,7,3,1,4,2,1,8])) //19