/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
            let l = 0;
            let r = numbers.length;
            while(l<r){
                if(numbers[l] + numbers[r] === target){
                    return [l+1,r+1];
                }else if(numbers[l] + numbers[r] < target){
                    l++
                }else{
                    r--
                }
            }
            return []
    };



console.log(twoSum([2,7,11,15],  9))