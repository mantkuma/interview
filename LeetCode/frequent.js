/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let fre = [];
    let dummy = [];
    let hash = {}
    nums.forEach(ele => {
        if(hash[ele]) {
            hash[ele] = hash[ele]+1
        }else{
            hash[ele] = 1;
        }
    })
    keys = Object.keys(hash);
    keys.forEach(ele => {
        fre.push([ele, hash[ele]]);
    })
    fre.sort((a, b) => b[1] - a[1]);
    fre = fre.reduce((acc, ele)=>{
        acc.push(parseInt(ele[0]));
        return acc;
    },[])
    return fre.slice(0,k-1);
};


console.log(topKFrequent([1,1,1,2,2,3], 3))