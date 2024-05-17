/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let data =[]
    for(let i=0;i<nums.length;i++){
        data.push(nums[i]);
    }
    let hash = {};
    nums.length=0;
   let res =  data.reduce((acc, ele)=>{
            if(hash[ele]){
                    if(hash[ele] === 1){
                        hash[ele]= hash[ele]+1;
                        acc= acc+1;
                        nums.push(ele);
                    }
                    return acc;
            } else{ 
                nums.push(ele);
                hash[ele] = 1;
                return acc+1
            }
  },0)
  return res;
};

//console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))