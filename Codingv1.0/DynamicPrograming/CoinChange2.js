//Knapsack  Min Coin
//Input
const dynamicPrograming = async()=>{
// let coins = [25,10,5]
// let Sum=30;
// let coins = [25]
// let Sum=25;
let coins = [9,6,4,1]
let Sum=11;
n=coins.length;
let hash = {};
const knapsack = async(coins, sum, n, ucoin) =>{
        if(sum === 0){
            return {
                isValid: true,
                usedCoin : ucoin
            };
        }
        if(n===0 || sum < 0){
            return {
                isValid: false,
                usedCoin : ucoin
            };
        }
            if(coins[n-1] <= sum){
            ucoin = ucoin+1;
            let data1 =  await knapsack(coins, sum-coins[n-1], n, ucoin);
            let data2 =  await knapsack(coins, sum, n-1, ucoin-1);
            if(data1.isValid && data2.isValid){
                if(data1.usedCoin<data2.usedCoin){
                    return data1
                }else return data2
            }else if(data1.isValid){
                return data1
            }else if(data2.isValid){
                return data2
            }else{
                return {
                    isValid: false,
                    usedCoin : Number.MAX_SAFE_INTEGER
                }
            }
            } else {
               let data =  await knapsack(coins, sum, n-1, ucoin)
               if(data.isValid){
                return data
               }else{
                return {
                    isValid: false,
                    usedCoin : Number.MAX_SAFE_INTEGER
                }
               }
            }
            
}
let res = await knapsack(coins, Sum, n, 0);
return res.usedCoin;

}
dynamicPrograming().then(data => {
    console.log(data);
})