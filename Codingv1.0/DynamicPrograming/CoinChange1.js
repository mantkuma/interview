//Knapsack  Max Profit
//Input
const dynamicPrograming = async()=>{
let coins = [1,2,5]
let Sum=5;
n=coins.length;
let hash = {};
let minCoin =n;
const knapsack = async(coins, Sum, n) =>{
    if(hash[n+':'+Sum]){
        return hash[n+':'+Sum];
    } 
    // BaseCondition
    // Choice Diagram
    if(Sum === 0){
        return 1;
    }
    if(Sum  < 0){
        return 0;
    }
    if(n === 0){
        return 0;
    }
    if(coins[n-1]<=Sum){
        let a = await knapsack(coins, Sum-coins[n-1], n)
        let b = await knapsack(coins, Sum, n-1)
        let data =  a+b
        hash[n+':'+Sum] = data;
        return data
    } else if(coins[n-1] > Sum){ 
        let data = await knapsack(coins, Sum, n-1);
        hash[n+':'+Sum] = data;
        return data
    }
}
let max = await knapsack(coins, Sum, n);
console.log(minCoin);
return max;

}
dynamicPrograming().then(data => {
    console.log(data);
})