/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k=k%nums.length;
    if(k==1){
        nums.unshift(nums.pop());
    }else{
        let arr1 = nums.splice(0,nums.length-k)
        nums  =  [...nums, ...arr1]
    }
};

let nums = [1,2,3,4,5,6,7]
console.log(rotate(nums, 3))
console.log(nums);


//console.log(rotate([-1,-100,3,99], 2))

// var rotate = function(nums, k) {
//     let arr1 = nums.splice(0, nums.length-k);
//     for(i=0;i<arr1.length;i++){
//         nums.push(arr1[i])
//     }
//     return nums;
// };
