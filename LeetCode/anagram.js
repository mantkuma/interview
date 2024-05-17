/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {}
    strs.forEach((ele, index)=>{
        ele = ele.split('').sort().join('') ;
        if(hash[ele]){
            hash[ele].push(strs[index])
        }else{
            hash[ele] = [strs[index]]
        }
   })
   let res = []
   keys = Object.keys(hash);
   keys.forEach(ele => {
    res.push(hash[ele]);
   })
   return res;
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))