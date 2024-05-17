/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let hash = {};
   return nums.reduce((acc,ele)=>{
            if(hash[ele]){
                    hash[ele] = hash[ele]+1;
                    if(hash[acc]<hash[ele]){
                        acc=ele
                    }
                    return acc
            }else{
                hash[ele] = 1;
                if(acc===null){
                    acc=ele;
                }
                return acc;
            }
   },null)
};

console.log(majorityElement([2,2,1,1,1,2,2,9,9,9,9,9]))