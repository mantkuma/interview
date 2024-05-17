/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let isSingleZero = false;
    let isMultiZero = false
    let isallZero = true;
    let multiZeroarr  = [];
    let product = nums.reduce((acc,ele)=>{
        multiZeroarr.push(0);
            if(ele!=0){
                isallZero = false;
                acc= acc*ele
            }else {
                if(isSingleZero=== false){
                    isSingleZero=true
                }else{
                    isMultiZero = true;
                }
            }
            return acc;
    },1)
    if(isallZero){
        return nums
    }else if(isMultiZero){
        return multiZeroarr
    }
    nums = nums.reduce((acc,ele)=> {
        if(isSingleZero){
            if(ele !=0){
                acc.push(0);
            }else {
                acc.push(product);
            }
        } else{
            acc.push(product/ele);
        }
        return acc;
    },[])
    return nums;
};
//[-1,1,0,-3,3]
//0,0,9,0,0
console.log(productExceptSelf([0,4,0]))