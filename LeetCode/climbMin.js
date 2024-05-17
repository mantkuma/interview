/**
 * @param {number} cost
 * @return {number}
 */

var minCostClimbingStairs = function(cost) {
    let n = cost.length
    let i=0;
    let hash = {};
    var climb = function(cost,i){
        if(hash[i]){
            return hash[i] 
        }
        if(i>cost.length-1){
            return 0;
        }
        if(i===cost.length-1){
            return cost[i]
        }
        if(i===cost.length-2){
            let data= Math.min(
                cost[i]+climb(cost,i+1),
                cost[i]+climb(cost,i+2
            ))
            hash[i] = data;
            return data
        }if(i===cost.length-3){
            let data= Math.min(
                   cost[i]+climb(cost,i+1),
                   cost[i]+climb(cost,i+2)
            )
            hash[i] = data;
            return data
        }
            let data = Math.min(
                cost[i]+climb(cost,i+1),
                cost[i]+climb(cost,i+2)
            )
            hash[i] = data;
            return data
    }

    let min1 = climb(cost,0)
    let min2 = climb(cost, 1)
    let data =  Math.min(min1, min2)
    return data;
   
};
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))
console.log(minCostClimbingStairs([10,15,20]))
console.log(minCostClimbingStairs([1,1,1,1]))
console.log(minCostClimbingStairs([0,0,0,1]))
console.log(minCostClimbingStairs([0,0,0,0]))