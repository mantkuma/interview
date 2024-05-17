/**
 * @param {number[]} temperatures
 * @return {number[]}
 */


var dailyTemperatures = function(temperatures) {
    let stk = []
    let res = Array.apply(null, Array(temperatures.length)).map(function (x) { return 0; })
    temperatures.forEach((ele,i)=>{
                if(stk.length === 0){
                    stk.push({val: ele, index:i})
                }else{
                    while(stk.length !== 0 && (ele > stk[stk.length-1].val)){
                        res[(stk[stk.length-1]).index]  = i - (stk[stk.length-1]).index
                        stk.pop()
                    }
                        stk.push({val: ele, index:i}) 
                }
    })
    return res;
};







console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))

// var dailyTemperatures = function(temperatures) {
//     res = [];
//     let found = false
//    for(i=0;i<temperatures.length;i++){
//     for(j=i+1;j<temperatures.length;j++){
//         if(temperatures[i] < temperatures[j]){
//             res.push(j-i);
//             found = true;
//             j=temperatures.length
//         }
//     }
//     if(!found){
//         res.push(0);
//     } else {
//         found = false;
//     }
// }
//    return res;
// };

// var dailyTemperatures = function(temperatures) {
//     let hash={};
//     let data = temperatures.reduce((acc, ele, i)=> {
//             if(hash.hasOwnProperty(ele-1)){
//                 hash[ele] = i;
//                 console.log(i, ele , ele-1, hash[ele-1])
//                 acc[hash[ele-1]]=i-hash[ele-1];
//                 return acc;
//             } else {
//                 hash[ele] = i
//                 return acc;
//             }
//     },Array.apply(null, Array(temperatures.length)).map(function (x) { return 0; }))
//     console.log(hash);
//     return data
// };