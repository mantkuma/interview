/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=> a-b)
        let res = []
        let hash = {}
        for(let i =0 ; i< nums.length-2; i++){
            let l = i+1;
            let r = nums.length-1;
            while(l<r){
                if(nums[l] + nums[r] + nums[i] === 0){
                    if(hash[nums[i]+''+nums[l]+''+nums[r]]){

                    }else {
                        hash[nums[i]+''+nums[l]+''+nums[r]] = true;
                        res.push([nums[i], nums[l],nums[r]]);
                    }
                    l++;
                    r--;
                }else if(nums[l] + nums[r]+nums[i] < 0){
                    l++
                }else{
                    r--
                }
            }
        }
        return res;
    };



console.log(threeSum([-1,0,1,2,-1,-4]))