//Knapsack  Max Profit
//Input
const dynamicPrograming = async()=>{
let coins = [1,1,1]
let Sum=3
// let arr = [3, 34, 4, 12, 5, 2];
// let target=30
let n =coins.length;
const SSPTDA = async(coins, n, sum) =>{
    let arr =[]
        for(let i =0;i<n+1;i++){
            arr[i] = []
            for(let j=0;j<sum+1;j++){
                if(i===0){
                arr[i][j]=Number.MAX_SAFE_INTEGER-1
                }
                if(j==0){
                arr[i][j] = 0;
                }
            }
        }
        arr[0][0] = Number.MAX_SAFE_INTEGER-1;

        for(j=1;j<sum+1;j++){
            if(j%coins[0] === 0){
                arr[1][j] = j/coins[0];
            }else{
                arr[1][j] = Number.MAX_SAFE_INTEGER-1
            }
        }
        for(let i=2;i<n+1;i++){
            for(let j=1;j<sum+1;j++){
                if(coins[i-1] <= j){
                arr[i][j] = Math.min(arr[i-1][j] , 1+arr[i][j-coins[i-1]])
                } else{
                    arr[i][j] =  arr[i-1][j]
                }
            }
        }
    console.log(arr);
    return arr[n][Sum];
}
let max = await SSPTDA(coins, n, Sum);
return max;

}
dynamicPrograming().then(data => {
    console.log(data);
})





// const dynamicPrograming = async()=>{
// // let arr = [2,3,7,8,10]
// // let target=11
// let arr = [3, 34, 4, 12, 5, 2];
// let target=30
// let n =arr.length;
// let res = 0;
// const SSPTDA = async(wt, n, sum) =>{
//     let arr =[]
//     for(let i =0;i<n+1;i++){
//         arr[i] = []
//         for(let j=0;j<sum+1;j++){
//             if(i===0 || j === 0){
//                 arr[i][j]=0
//             }
//         }
//     }
//         for(let i=1;i<n+1;i++){
//         for(let j=1;j<sum+1;j++){
//            if(wt[i-1] <= j){
//             let sum1 = wt[i-1] + arr[i-1][j-wt[i-1]];
//             let sum2 = arr[i-1][j];
//                 if(sum1===target) res=res+1;
//                 if(sum2===target) res=res+1
//             arr[i][j] = Math.max(sum1,sum2)
//            } else{
//             arr[i][j] =  arr[i-1][j]
//            }
//         }
//     }
//     return res;
// }
// let max = await SSPTDA(arr, n, target);
// return max;

// }