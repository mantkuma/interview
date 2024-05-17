/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length) return 0;
    nums = nums.sort((a,b) => a - b)
    let con = 0
    let resCon =0
    nums.reduce((acc,ele)=>{
        if(acc === ele){
            return acc;
        }
        if(ele-acc===1){
            con++
        }else{
            if(resCon < con){
                resCon = con;
              }
              con=0
             }
        acc=ele;
        return acc
    },nums[0])
    if(resCon>con){
        return resCon+1
    }else{
        return con+1
    }
};


//let data  = longestConsecutive([100,4,200,1,3,2]);
let data  =  longestConsecutive([]);
console.log(data)