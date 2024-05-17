/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewels_hash = {}
    let count =0;
    jewels_hash = jewels.split('').reduce((acc, ele)=>{
        if(!acc[ele]){
            acc[ele] = 1;
        }
        return acc;
    },{})

     for(let i=0;i<stones.length;i++){
        if(jewels_hash[stones[i]]){
            count= count+1;
        }
     }

    return count
};


let jewels = "aA";
let stones = "aAAbbbb"
console.log(numJewelsInStones(jewels, stones))


// var numJewelsInStones = function(jewels, stones) {
//     let jewels_length = jewels.length;
//     count = 0;
//     for(let i=0; i<stones.length-jewels_length;i++){
//         if(jewels === stones.substring(i, i+jewels_length)){
//             count= count+1;
//         }
//     }
//     return count;
// };